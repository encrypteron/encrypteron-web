"use client";

import { useMemo, useState } from "react";

const operatingSystems = ["Debian 13", "Debian 12", "Debian 11", "Ubuntu 26.04 LTS", "Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Ubuntu 20.04 LTS", "Alpine Linux 3.21", "Custom ISO files (3 GB total)"];

export function CustomVmBuilder() {
  const [cpu, setCpu] = useState("2");
  const [ram, setRam] = useState("4");
  const [storage, setStorage] = useState("80");
  const [image, setImage] = useState("Debian 13");
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Encrypteron Custom VM enquiry");
    const body = encodeURIComponent(`Hello Encrypteron,\n\nI would like a custom VM configuration:\n- CPU: ${cpu} vCPU\n- RAM: ${ram} GB\n- NVMe storage: ${storage} GB\n- Image: ${image}\n- German IPv4 via tunnel: Yes\n\nPlease let me know availability and pricing.`);
    return `mailto:mail@encrypteron.com?subject=${subject}&body=${body}`;
  }, [cpu, ram, storage, image]);

  return (
    <section className="custom-vm" aria-labelledby="custom-vm-title">
      <div className="custom-vm-intro"><p className="eyebrow">04 / Custom VM</p><h2 id="custom-vm-title">Build the VM your workload needs.</h2><p>Choose the core resources and image, then send the configuration directly to us. We confirm availability and final pricing before anything is provisioned.</p><span><i /> FRANCE-HOSTED COMPUTE · GERMAN IP VIA TUNNEL</span><small>Custom ISO files: 3 GB total, shared across uploads</small></div>
      <div className="vm-builder">
        <label>vCPU<select value={cpu} onChange={(event) => setCpu(event.target.value)}>{[1, 2, 4, 6, 8, 12, 16].map((value) => <option value={value} key={value}>{value} vCPU</option>)}</select></label>
        <label>Memory<select value={ram} onChange={(event) => setRam(event.target.value)}>{[1, 2, 4, 8, 16, 32, 64].map((value) => <option value={value} key={value}>{value} GB RAM</option>)}</select></label>
        <label>NVMe storage<select value={storage} onChange={(event) => setStorage(event.target.value)}>{[25, 50, 80, 160, 320, 500, 1000].map((value) => <option value={value} key={value}>{value} GB NVMe</option>)}</select></label>
        <label>Operating system<select value={image} onChange={(event) => setImage(event.target.value)}>{operatingSystems.map((system) => <option value={system} key={system}>{system}</option>)}</select></label>
        <div className="vm-summary"><span>YOUR CONFIGURATION</span><strong>{cpu} vCPU <b>·</b> {ram} GB RAM <b>·</b> {storage} GB NVMe</strong><small>{image} · German IPv4 via tunnel</small></div>
        <a className="button" href={mailto}>Request this VM <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
