export const navigation: { href?: string; label: string; disabled?: boolean }[] = [
  { href: "/products", label: "Products" },
  { href: "/network", label: "Network" },
  { href: "/principles", label: "Principles" },
  { href: "/wiki", label: "Wiki" },
  { label: "ROOT", disabled: true },
];

export const services = [
  {
    code: "COMPUTE / 01",
    title: "Virtual private servers",
    body: "Proxmox virtual machines on our France-hosted infrastructure, with Germany-based IP addresses provided via tunnel.",
    items: ["Proxmox virtualisation", "German IP via tunnel", "Monthly traffic by plan"],
  },
  {
    code: "STORAGE / 02",
    title: "Object storage",
    body: "MinIO-based, S3-compatible object storage for assets, backups, and application data — designed to sit alongside your compute.",
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
  { href: "/vps", number: "01", title: "Virtual private servers", description: "Six Proxmox VPS plans, system images, and custom configurations.", detail: "Explore VPS", tags: ["recommended"] },
  { href: "/storage", number: "02", title: "Object storage", description: "MinIO-based S3-compatible capacity for assets and application data.", detail: "Explore storage", tags: [] },
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
  tags: ProductTag[];
  highlighted?: boolean;
  starred?: boolean;
};

export const plans: Plan[] = [
  { category: "vps", name: "VPS Pulse", price: "€5.95", vatPercent: 20, wasPrice: "", period: "/ month", description: "A VPS configuration for applications and projects.", specs: ["2.75 vCPU (275%)", "9.5 GB RAM", "64 GB disk", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1 TB monthly traffic", "German IPv4 via tunnel"], tags: ["star"], starred: true },
  { category: "vps", name: "VPS One", price: "€4.80", vatPercent: 20, wasPrice: "", period: "/ month", description: "An entry point for small services and personal projects.", specs: ["0.5 vCPU (one core limited to 50%)", "1.5 GB RAM", "25 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 750 GB monthly traffic", "German IPv4 via tunnel"], tags: [] },
  { category: "vps", name: "VPS Neo", price: "€8.40", vatPercent: 20, wasPrice: "", period: "/ month", description: "More room for applications and development environments.", specs: ["1.5 vCPU (150% of one core)", "4.5 GB RAM", "50 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1 TB monthly traffic", "German IPv4 via tunnel"], tags: [] },
  { category: "vps", name: "VPS X", price: "€16.80", vatPercent: 20, wasPrice: "", period: "/ month", description: "A mid-range configuration for growing applications.", specs: ["2.5 vCPU (250%)", "11.5 GB RAM", "100 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1.25 TB monthly traffic", "German IPv4 via tunnel"], tags: ["recommended"], highlighted: true },
  { category: "vps", name: "VPS Pure", price: "€25.20", vatPercent: 20, wasPrice: "", period: "/ month", description: "More CPU, memory, and storage for heavier workloads.", specs: ["4 vCPU (400%)", "21.5 GB RAM", "200 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 1.5 TB monthly traffic", "German IPv4 via tunnel"], tags: [] },
  { category: "vps", name: "VPS Max", price: "€37.20", vatPercent: 20, wasPrice: "", period: "/ month", description: "The largest configuration in this VPS range.", specs: ["6.5 vCPU (650%)", "32.5 GB RAM", "300 GB NVMe M.2 storage", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "HP EX950 NVMe · 2 TB monthly traffic", "German IPv4 via tunnel"], tags: ["bestValue"] },
  { category: "storage", name: "Object Storage 25 GB", price: "€1", wasPrice: "€5", period: "/ month", description: "MinIO-based, S3-compatible object storage on NVMe M.2.", specs: ["25 GB NVMe M.2 storage", "MinIO object storage", "S3-compatible API", "Email enquiry before provisioning"], tags: ["sale80", "recommended"] },
  { category: "storage", name: "Object Storage 50 GB", price: "€10", wasPrice: "", period: "/ month", description: "MinIO-based, S3-compatible object storage on NVMe M.2.", specs: ["50 GB NVMe M.2 storage", "MinIO object storage", "S3-compatible API", "Email enquiry before provisioning"], tags: [] },
  { category: "storage", name: "Object Storage 100 GB", price: "€20", wasPrice: "", period: "/ month", description: "MinIO-based, S3-compatible object storage on NVMe M.2.", specs: ["100 GB NVMe M.2 storage", "MinIO object storage", "S3-compatible API", "Email enquiry before provisioning"], tags: [] },
];

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
