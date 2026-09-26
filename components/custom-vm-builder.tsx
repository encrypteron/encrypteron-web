"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const operatingSystems = ["Debian 13", "Debian 12", "Debian 11", "Ubuntu 26.04 LTS", "Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Ubuntu 20.04 LTS", "Alpine Linux 3.21", "Alpine Linux 3.20", "Custom ISO files (3 GB total)", "Rescue environment", "Cloud-init image"];
const frenchOperatingSystems = ["Debian 13", "Debian 12", "Debian 11", "Ubuntu 26.04 LTS", "Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Ubuntu 20.04 LTS", "Alpine Linux 3.21", "Alpine Linux 3.20", "Fichiers ISO personnalisés (3 Go au total)", "Environnement de secours", "Image cloud-init"];
const cpuOptions = Array.from({ length: 14 }, (_, index) => (index + 1) / 2);
const ramOptions = Array.from({ length: 96 }, (_, index) => (index + 1) / 2);

export function CustomVmBuilder({ sectionNumber = "03" }: { sectionNumber?: string }) {
  const french = usePathname().startsWith("/fr/");
  const [cpu, setCpu] = useState("2");
  const [ram, setRam] = useState("4");
  const [storage, setStorage] = useState("80");
  const [image, setImage] = useState("Debian 13");
  const cpuDisplay = french ? cpu.replace(".", ",") : cpu;
  const ramDisplay = french ? ram.replace(".", ",") : ram;
  const mailto = useMemo(() => {
    const subject = encodeURIComponent(french ? "Demande de VM personnalisée Encrypteron" : "Encrypteron Custom VM enquiry");
    const body = encodeURIComponent(french ? `Bonjour Encrypteron,\n\nJe souhaite demander une configuration de VM personnalisée :\n- CPU : ${cpuDisplay} vCPU\n- Mémoire : ${ramDisplay} Gio\n- Stockage NVMe : ${storage} Go\n- Image : ${image}\n- IPv4 allemande via tunnel : oui\n\nMerci de m’indiquer la disponibilité et le prix.` : `Hello Encrypteron,\n\nI would like a custom VM configuration:\n- CPU: ${cpuDisplay} vCPU\n- RAM: ${ramDisplay} GiB\n- NVMe storage: ${storage} GB\n- Image: ${image}\n- German IPv4 via tunnel: Yes\n\nPlease let me know availability and pricing.`);
    return `mailto:mail@encrypteron.com?subject=${subject}&body=${body}`;
  }, [cpuDisplay, ramDisplay, storage, image, french]);

  const t = french ? { title: "Configurez la VM adaptée à votre charge.", intro: "Choisissez les ressources et l’image, puis envoyez-nous directement la configuration. Nous confirmerons la disponibilité et le prix avant tout déploiement.", label: "Choisir un système", summary: "VOTRE CONFIGURATION", cta: "Demander cette VM", cpu: "vCPU", memory: "Mémoire", storage: "Stockage NVMe", image: "Système d’exploitation", custom: "VM personnalisée", iso: "Fichiers ISO personnalisés : 3 Go au total pour l’ensemble des fichiers" } : { title: "Build the VM your workload needs.", intro: "Choose the core resources and image, then send the configuration directly to us. We confirm availability and final pricing before anything is provisioned.", label: "Operating system", summary: "YOUR CONFIGURATION", cta: "Request this VM", cpu: "vCPU", memory: "Memory", storage: "NVMe storage", image: "Operating system", custom: "Custom VM", iso: "Custom ISO files: 3 GB total, shared across uploads" };

  return (
    <section className="custom-vm" aria-labelledby="custom-vm-title">
      <div className="custom-vm-intro"><p className="eyebrow">{sectionNumber} / {t.custom}</p><h2 id="custom-vm-title">{t.title}</h2><p>{t.intro}</p><span><i /> {french ? "CALCUL EN FRANCE · IP ALLEMANDE VIA TUNNEL" : "FRANCE-HOSTED COMPUTE · GERMAN IP VIA TUNNEL"}</span><small>{t.iso}</small></div>
      <div className="vm-builder">
        <label>{t.cpu}<select value={cpu} onChange={(event) => setCpu(event.target.value)}>{cpuOptions.map((value) => <option value={value} key={value}>{french ? String(value).replace(".", ",") : value} vCPU</option>)}</select></label>
        <label>{t.memory}<select value={ram} onChange={(event) => setRam(event.target.value)}>{ramOptions.map((value) => <option value={value} key={value}>{french ? String(value).replace(".", ",") : value} {french ? "Gio de RAM" : "GiB RAM"}</option>)}</select></label>
        <label>{t.storage}<select value={storage} onChange={(event) => setStorage(event.target.value)}>{[25, 50, 80, 160, 320, 500, 1000].map((value) => <option value={value} key={value}>{value} {french ? "Go NVMe" : "GB NVMe"}</option>)}</select></label>
        <label>{t.image}<select value={image} onChange={(event) => setImage(event.target.value)}>{(french ? frenchOperatingSystems : operatingSystems).map((system) => <option value={system} key={system}>{system}</option>)}</select></label>
        <div className="vm-summary"><span>{t.summary}</span><strong>{cpuDisplay} vCPU <b>·</b> {ramDisplay} {french ? "Gio de RAM" : "GiB RAM"} <b>·</b> {storage} {french ? "Go NVMe" : "GB NVMe"}</strong><small>{image} · {french ? "IPv4 allemande via tunnel" : "German IPv4 via tunnel"}</small></div>
        <a className="button" href={mailto}>{t.cta} <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
