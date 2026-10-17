import Image from "next/image";

export function BrandLogo({ priority = false }: Readonly<{ priority?: boolean }>) {
  return (
    <span className="brand-logo">
      <Image className="brand-logo-symbol" src="/assets/encrypteron-notext.png" alt="" width={1280} height={1280} priority={priority} />
      <span className="brand-logo-wordmark">encrypteron<span>.com</span></span>
    </span>
  );
}
