import type { ReactNode } from "react";

export type WikiHeading = { id: string; title: string; level: number };

function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    const token = match[0];
    if (token.startsWith("**")) parts.push(<strong key={index}>{token.slice(2, -2)}</strong>);
    else if (token.startsWith("`")) parts.push(<code key={index}>{token.slice(1, -1)}</code>);
    else {
      const parsed = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (parsed) {
        const safeUrl = /^(https?:\/\/|mailto:|\/|#)/i.test(parsed[2]) && !/^\/\//.test(parsed[2]);
        parts.push(safeUrl ? <a key={index} href={parsed[2]}>{parsed[1]}</a> : parsed[1]);
      }
    }
    last = index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function headingId(title: string) {
  return title.toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";
}

export function getWikiHeadings(markdown: string): WikiHeading[] {
  const seen = new Map<string, number>();
  return markdown.split("\n").flatMap((line) => {
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) return [];
    const title = match[2].replace(/[*`]/g, "");
    const base = headingId(title);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return [{ id: count ? `${base}-${count + 1}` : base, title, level: match[1].length }];
  });
}

export function WikiMarkdown({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const headings = getWikiHeadings(markdown);
  const seen = new Map<string, number>();
  const nodes: ReactNode[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }
    if (line.trim() === ":::flow") {
      const steps: Array<{ title: string; detail: string }> = [];
      index += 1;
      while (index < lines.length && lines[index].trim() !== ":::") {
        const step = /^\s*\d+\.\s+(.+?)(?:\s*\|\s*(.*))?$/.exec(lines[index]);
        if (step) steps.push({ title: step[1], detail: step[2] ?? "" });
        index += 1;
      }
      if (index < lines.length) index += 1;
      if (steps.length) {
        nodes.push(
          <ol className="wiki-flow" key={`flow-${index}`}>
            {steps.map((step, stepIndex) => (
              <li key={stepIndex}>
                <strong>{inline(step.title)}</strong>
                {step.detail ? <span>{inline(step.detail)}</span> : null}
              </li>
            ))}
          </ol>,
        );
      }
      continue;
    }
    if (line.trim() === ":::cards") {
      const cards: Array<{ title: string; detail: string }> = [];
      index += 1;
      while (index < lines.length && lines[index].trim() !== ":::") {
        const card = /^\s*[-*]\s+(.+?)(?:\s*\|\s*(.*))?$/.exec(lines[index]);
        if (card) cards.push({ title: card[1], detail: card[2] ?? "" });
        index += 1;
      }
      if (index < lines.length) index += 1;
      if (cards.length) {
        nodes.push(
          <ul className="wiki-cards" key={`cards-${index}`}>
            {cards.map((card, cardIndex) => (
              <li key={cardIndex}>
                <strong>{inline(card.title)}</strong>
                {card.detail ? <span>{inline(card.detail)}</span> : null}
              </li>
            ))}
          </ul>,
        );
      }
      continue;
    }
    const fence = /^```([\w+-]*)\s*$/.exec(line);
    if (fence) {
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !/^```\s*$/.test(lines[index])) code.push(lines[index++]);
      if (index < lines.length) index += 1;
      nodes.push(<pre key={`code-${index}`}><code className={fence[1] ? `language-${fence[1]}` : undefined}>{code.join("\n")}</code></pre>);
      continue;
    }
    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      const title = heading[2].replace(/[*`]/g, "");
      const base = headingId(title);
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      const id = heading[1].length >= 2 ? headings.find((item) => item.title === title && item.id === (count ? `${base}-${count + 1}` : base))?.id : undefined;
      const Tag = `h${heading[1].length}` as "h1" | "h2" | "h3";
      nodes.push(<Tag id={id} key={`heading-${index}`}>{inline(heading[2])}</Tag>);
      index += 1;
      continue;
    }
    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) quote.push(lines[index++].replace(/^>\s?/, ""));
      nodes.push(<blockquote key={`quote-${index}`}><p>{inline(quote.join(" "))}</p></blockquote>);
      continue;
    }
    if (/^[-*+]\s+/.test(line)) {
      const list: string[] = [];
      while (index < lines.length && /^[-*+]\s+/.test(lines[index])) list.push(lines[index++].replace(/^[-*+]\s+/, ""));
      nodes.push(<ul key={`list-${index}`}>{list.map((item, itemIndex) => <li key={itemIndex}>{inline(item)}</li>)}</ul>);
      continue;
    }
    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,3}\s|```|>\s?|[-*+]\s+)/.test(lines[index])) paragraph.push(lines[index++]);
    nodes.push(<p key={`paragraph-${index}`}>{inline(paragraph.join(" "))}</p>);
  }
  return <div className="wiki-prose">{nodes}</div>;
}
