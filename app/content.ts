export const navigation = [
  { href: "/products", label: "Products" },
  { href: "/network", label: "Network" },
  { href: "/principles", label: "Principles" },
  { label: "Wiki", disabled: true },
];

export const services = [
  {
    code: "COMPUTE / 01",
    title: "Virtual private servers",
    body: "Virtual machines hosted on our France-based infrastructure, with Germany-based IP addresses provided via tunnel.",
    items: ["Dedicated virtual resources", "German IP via tunnel", "Human onboarding"],
  },
  {
    code: "STORAGE / 02",
    title: "Object storage",
    body: "S3-compatible object storage for assets, backups, and application data — designed to sit alongside your compute.",
    items: ["S3-compatible API", "Simple capacity pricing", "Built for application data"],
  },
  {
    code: "NETWORK / 03",
    title: "Network options",
    body: "A tunnelled network path that connects France-hosted compute with Germany-based public VPS IP addresses.",
    items: ["France-hosted compute", "German IP via tunnel", "Scoped to your use case"],
  },
];

export const productCategories = [
  { href: "/vps", number: "01", title: "Virtual private servers", description: "Ready-made VPS plans, images, and custom configurations.", detail: "Explore VPS", tags: ["recommended", "sale", "priceDrop"] },
  { href: "/storage", number: "02", title: "Object storage", description: "S3-compatible capacity for assets and application data.", detail: "Explore storage", tags: ["sale", "priceDrop"] },
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
  off10: { label: "10% OFF", tone: "sale" },
  off25: { label: "25% OFF", tone: "sale" },
  off50: { label: "50% OFF", tone: "sale" },
  priceDrop: { label: "PRICE DROPPED", tone: "success" },
  priceLocked: { label: "PRICE LOCKED", tone: "info" },
  recommended: { label: "RECOMMENDED", tone: "recommended" },
  bestValue: { label: "BEST VALUE", tone: "success" },
  new: { label: "NEW", tone: "info" },
  featured: { label: "FEATURED", tone: "recommended" },
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
  wasPrice: string;
  period: string;
  description: string;
  specs: string[];
  tags: ProductTag[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  { category: "vps", name: "VPS Start", price: "€1.60", wasPrice: "€4", period: "/ month", description: "A compact virtual server for small services and personal projects.", specs: ["1 vCPU", "1 GB RAM", "25 GB NVMe storage", "German IPv4 via tunnel"], tags: ["sale", "priceDrop", "bestValue"] },
  { category: "vps", name: "VPS Build", price: "€3.60", wasPrice: "€9", period: "/ month", description: "More room for applications, environments, and growing workloads.", specs: ["2 vCPU", "4 GB RAM", "80 GB NVMe storage", "German IPv4 via tunnel"], tags: ["sale", "priceDrop", "recommended"], highlighted: true },
  { category: "storage", name: "Object Storage", price: "€2", wasPrice: "€5", period: "/ month", description: "S3-compatible storage, starting with a practical capacity allocation.", specs: ["250 GB included", "S3-compatible API", "Usage review on request", "Email support"], tags: ["sale", "priceDrop"] },
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
