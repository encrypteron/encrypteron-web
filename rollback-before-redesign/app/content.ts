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

export const plans = [
  { name: "VPS Start", price: "€3.20", period: "/ month", description: "A compact virtual server for small services and personal projects.", specs: ["1 vCPU", "1 GB RAM", "25 GB NVMe storage", "German IPv4 via tunnel"] },
  { name: "VPS Build", price: "€7.20", period: "/ month", description: "More room for applications, environments, and growing workloads.", specs: ["2 vCPU", "4 GB RAM", "80 GB NVMe storage", "German IPv4 via tunnel"] },
  { name: "Object Storage", price: "€5", period: "/ month", description: "S3-compatible storage, starting with a practical capacity allocation.", specs: ["250 GB included", "S3-compatible API", "Usage review on request", "Email support"] },
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
