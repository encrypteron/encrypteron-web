import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="signature">
        <p>Best regards,</p>
        <p className="signature-brand"><span className="pink-dot" /> Encrypteron</p>
        <p className="signature-tagline">Infrastructure, clearly operated.</p>
        <div className="pink-rule" />
        <a href="mailto:mail@encrypteron.com">mail@encrypteron.com</a>
        <a href="https://encrypteron.com">encrypteron.com</a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Encrypteron</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/imprint">Imprint / Contact</Link></div></div>
    </footer>
  );
}
