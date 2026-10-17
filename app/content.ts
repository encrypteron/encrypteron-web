export const navigation: { href?: string; label: string; disabled?: boolean }[] = [
  { href: "/products", label: "Products" },
  { href: "/network", label: "Network" },
  { href: "/principles", label: "Principles" },
  { href: "/wiki", label: "Wiki" },
  { label: "ROOT", disabled: true },
];

export const launchNotice = "VPS and Object Storage are in preparation and are not available to order. ROOT, the future customer control panel, is not available yet. No launch date has been announced.";

export const services = [
  {
    code: "COMPUTE / 01",
    title: "Virtual private servers",
    body: "Planned Proxmox virtual machines on France-hosted infrastructure, with Germany-based IP addresses via tunnel. Not available yet.",
    items: ["Proxmox virtualisation", "German IP via tunnel", "Monthly traffic by plan"],
  },
  {
    code: "STORAGE / 02",
    title: "Object storage",
    body: "Planned MinIO-based, S3-compatible object storage for assets, backups, and application data. Not available yet.",
    items: ["MinIO object storage", "S3-compatible API", "25 GB on NVMe M.2"],
  },
  {
    code: "NETWORK / 03",
    title: "Network options",
    body: "A tunnelled network path that connects France-hosted compute with Germany-based public VPS IP addresses.",
    items: ["France-hosted compute", "German IP via tunnel", "Scoped to your use case"],
  },
];

export const productCategories = [
  { href: "/vps", number: "01", title: "Virtual private servers", description: "Six planned Proxmox VPS plans, system images, and custom configurations. Not available yet.", detail: "Preview VPS", tags: ["soon"] },
  { href: "/storage", number: "02", title: "Object storage", description: "Planned MinIO-based S3-compatible storage. Not available yet.", detail: "Preview storage", tags: ["soon"] },
  { href: "/network", number: "03", title: "Network path", description: "France-hosted compute with German public IP via tunnel.", detail: "View architecture", tags: ["featured"] },
];

export const futureProductCategories = [
  { number: "04", title: "Dedicated compute", description: "A future category for workloads that need a more dedicated infrastructure shape.", detail: "Not available yet", tags: ["soon", "limited"] },
  { number: "05", title: "Website hosting", description: "A future category for hosting websites and web applications as a managed starting point.", detail: "Not available yet", tags: ["soon"] },
  { number: "06", title: "Game hosting", description: "A future category for game-server workloads and their operational requirements.", detail: "Not available yet", tags: ["soon", "beta"] },
];

// Product tag configuration. Add or edit labels here, then reference their key in a plan's `tags` array.
// Use `danger` only for a real destructive or high-impact condition; use `warn` for a factual caveat.
export const productTagCatalog = {
  sale: { label: "SAVE 60%", tone: "sale" },
  sale80: { label: "SAVE 80%", tone: "sale" },
  off10: { label: "10% OFF", tone: "sale" },
  off25: { label: "25% OFF", tone: "sale" },
  off50: { label: "50% OFF", tone: "sale" },
  priceDrop: { label: "PRICE DROPPED", tone: "success" },
  priceLocked: { label: "PRICE LOCKED", tone: "info" },
  recommended: { label: "RECOMMENDED", tone: "recommended" },
  bestValue: { label: "BEST VALUE", tone: "success" },
  new: { label: "NEW", tone: "info" },
  featured: { label: "FEATURED", tone: "recommended" },
  star: { label: "★ STAR", tone: "star" },
  beta: { label: "BETA", tone: "beta" },
  trial: { label: "TRIAL", tone: "info" },
  preorder: { label: "PRE-ORDER", tone: "beta" },
  soon: { label: "COMING SOON", tone: "neutral" },
  limited: { label: "LIMITED", tone: "warn" },
  lowStock: { label: "LOW AVAILABILITY", tone: "warn" },
  soldOut: { label: "SOLD OUT", tone: "danger" },
  off: { label: "OFF", tone: "neutral" },
  disabled: { label: "DISABLED", tone: "neutral" },
  legacy: { label: "LEGACY", tone: "neutral" },
  deprecated: { label: "DEPRECATED", tone: "warn" },
  attention: { label: "ATTENTION", tone: "warn" },
  danger: { label: "DANGER!", tone: "danger" },
  maintenance: { label: "MAINTENANCE", tone: "info" },
  unavailable: { label: "UNAVAILABLE", tone: "danger" },
} as const;

export type ProductTag = keyof typeof productTagCatalog;
type Plan = {
  category: "vps" | "storage";
  name: string;
  price: string;
  vatPercent?: number;
  wasPrice: string;
  period: string;
  description: string;
  specs: string[];
  cpuQuota?: number;
  ramGiB?: number;
  maxMbps?: number;
  tags: ProductTag[];
  highlighted?: boolean;
  starred?: boolean;
};

export const plans: Plan[] = [
  { category: "vps", name: "VPS Pulse", price: "€12.60", vatPercent: 20, wasPrice: "", period: "/ month", description: "More CPU quota than Neo, with 9.5 GiB RAM and 64 GB NVMe storage.", specs: ["2.75 vCPU (275% total quota)", "9.5 GiB RAM", "64 GB NVMe storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1 TB monthly traffic", "Shared German IPv4 via tunnel included"], cpuQuota: 2.75, ramGiB: 9.5, maxMbps: 300, tags: ["soon", "star"], starred: true },
  { category: "vps", name: "VPS One", price: "€4.80", vatPercent: 20, wasPrice: "", period: "/ month", description: "An entry point for small services and personal projects.", specs: ["0.5 vCPU (50% total quota)", "1.5 GiB RAM", "25 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 750 GB monthly traffic", "Shared German IPv4 via tunnel included"], cpuQuota: 0.5, ramGiB: 1.5, maxMbps: 100, tags: ["soon"] },
  { category: "vps", name: "VPS Neo", price: "€8.40", vatPercent: 20, wasPrice: "", period: "/ month", description: "More room for applications and development environments.", specs: ["1.5 vCPU (150% total quota)", "4.5 GiB RAM", "50 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1 TB monthly traffic", "Shared German IPv4 via tunnel included"], cpuQuota: 1.5, ramGiB: 4.5, maxMbps: 200, tags: ["soon"] },
  { category: "vps", name: "VPS X", price: "€16.80", vatPercent: 20, wasPrice: "", period: "/ month", description: "More RAM, storage, and monthly traffic than Pulse, with a lower CPU quota.", specs: ["2.5 vCPU (250% total quota)", "11.5 GiB RAM", "100 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1.25 TB monthly traffic", "Shared German IPv4 via tunnel included"], cpuQuota: 2.5, ramGiB: 11.5, maxMbps: 350, tags: ["soon", "recommended"], highlighted: true },
  { category: "vps", name: "VPS Pure", price: "€25.20", vatPercent: 20, wasPrice: "", period: "/ month", description: "More CPU, memory, and storage for heavier workloads.", specs: ["4 vCPU (400% total quota)", "21.5 GiB RAM", "200 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1.5 TB monthly traffic", "Shared German IPv4 via tunnel included"], cpuQuota: 4, ramGiB: 21.5, maxMbps: 450, tags: ["soon"] },
  { category: "vps", name: "VPS Max", price: "€37.20", vatPercent: 20, wasPrice: "", period: "/ month", description: "The largest configuration in this VPS range.", specs: ["6.5 vCPU (650% total quota)", "32.5 GiB RAM", "300 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 2 TB monthly traffic", "Shared German IPv4 via tunnel included"], cpuQuota: 6.5, ramGiB: 32.5, maxMbps: 500, tags: ["soon"] },
  { category: "storage", name: "Object Storage 25 GB", price: "€1", wasPrice: "", period: "/ month", description: "MinIO-based, S3-compatible object storage on NVMe M.2.", specs: ["25 GB NVMe M.2 storage", "MinIO object storage", "S3-compatible API", "Planned service · not available yet"], tags: ["soon", "recommended"] },
  { category: "storage", name: "Object Storage 50 GB", price: "€10", wasPrice: "", period: "/ month", description: "MinIO-based, S3-compatible object storage on NVMe M.2.", specs: ["50 GB NVMe M.2 storage", "MinIO object storage", "S3-compatible API", "Planned service · not available yet"], tags: ["soon"] },
  { category: "storage", name: "Object Storage 100 GB", price: "€20", wasPrice: "", period: "/ month", description: "MinIO-based, S3-compatible object storage on NVMe M.2.", specs: ["100 GB NVMe M.2 storage", "MinIO object storage", "S3-compatible API", "Planned service · not available yet"], tags: ["soon"] },
];

export const vpsNetworkOptions = { dedicatedIpv4Price: "€2", sharedIpv4PortLimit: 15 };

export const vpsServiceConditions = [
  { title: "Self-managed VPS", body: "You manage your operating system, software, updates, and security. Support is planned through ROOT tickets at /root/support, with an indicative response time of 24–72 hours and no fixed support days. ROOT and its support service are not available yet." },
  { title: "IPv4 options", body: `Shared German IPv4 via tunnel is included in the listed VPS prices. A dedicated IPv4 is planned at an additional ${vpsNetworkOptions.dedicatedIpv4Price}/month including VAT. IPv6 is not available at this stage.` },
  { title: "Shared-IP ports", body: `Initial public ports are assigned randomly from available, non-reserved ports. You can request your preferred available ports for SSH and other services, up to ${vpsNetworkOptions.sharedIpv4PortLimit} ports per VPS with shared IPv4.` },
  { title: "Backups", body: "No backups are included. You choose and manage your own backup solution if you need one." },
  { title: "DDoS protection", body: "No DDoS protection is currently provided." },
  { title: "Monthly traffic", body: "Incoming and outgoing traffic both count towards the plan’s allowance. The quota resets on the first day of each month. Traffic is blocked when the allowance is exceeded, until the next reset or an agreed support intervention. Additional traffic is quoted on request." },
];

export function getStartingPlan(category: Plan["category"]) {
  return plans.filter((plan) => plan.category === category).sort((a, b) => Number(a.price.slice(1)) - Number(b.price.slice(1)))[0];
}

export const operatingSystems = [
  { family: "Debian", versions: ["13 Trixie", "12 Bookworm", "11 Bullseye"] },
  { family: "Ubuntu", versions: ["26.04 LTS", "24.04 LTS", "22.04 LTS", "20.04 LTS"] },
  { family: "Alpine Linux", versions: ["3.21", "3.20"] },
  { family: "Bring your own", versions: ["Custom ISO files · 3 GB total", "Rescue environment", "Cloud-init image"] },
];

export const principles = [
  {
    number: "01",
    title: "Clarity over theatre",
    body: "We describe the infrastructure that exists today. No fictional regions, no inflated capacity map, no hidden hierarchy of plans.",
  },
  {
    number: "02",
    title: "Security by design",
    body: "Our approach starts with deliberate boundaries, measured change, and an infrastructure footprint that remains understandable.",
  },
  {
    number: "03",
    title: "Direct conversations",
    body: "For a fit check or an infrastructure conversation, contact us directly. We would rather scope carefully than over-promise.",
  },
];

export const useCases = [
  { title: "Ship an application", text: "A clean compute starting point for web services, APIs, workers, and internal tools.", mark: "// APP" },
  { title: "Keep data close", text: "Object storage for application assets, exports, backups, and the files your service needs.", mark: "// DATA" },
  { title: "Design the path", text: "A Germany-based IP path via tunnel when the network shape is part of the requirement.", mark: "// NETWORK" },
];
