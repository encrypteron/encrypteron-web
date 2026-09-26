export const frServices = [
  { code: "CALCUL / 01", title: "Serveurs privés virtuels", body: "Des machines virtuelles Proxmox hébergées sur notre infrastructure en France, avec des adresses IP allemandes fournies via un tunnel.", items: ["Virtualisation Proxmox", "IP allemande via tunnel", "Trafic mensuel selon le forfait"] },
  { code: "STOCKAGE / 02", title: "Stockage objet", body: "Un stockage objet MinIO compatible S3 pour vos ressources, sauvegardes et données applicatives, en complément de vos serveurs.", items: ["Stockage objet MinIO", "API compatible S3", "25 Go NVMe M.2"] },
  { code: "RÉSEAU / 03", title: "Options réseau", body: "Un chemin réseau par tunnel entre les serveurs hébergés en France et les adresses IP publiques allemandes des VPS.", items: ["Calcul hébergé en France", "IP allemande via tunnel", "Adapté à votre besoin"] },
];

export const frUseCases = [
  { title: "Déployer une application", text: "Un point de départ simple pour vos services web, API, tâches de fond et outils internes.", mark: "// APP" },
  { title: "Garder vos données à portée", text: "Un stockage objet pour les ressources, exports, sauvegardes et fichiers de vos applications.", mark: "// DONNÉES" },
  { title: "Concevoir le chemin réseau", text: "Une adresse IP allemande via tunnel lorsque l’architecture réseau fait partie du besoin.", mark: "// RÉSEAU" },
];

export const frPrinciples = [
  { number: "01", title: "La clarté avant la mise en scène", body: "Nous décrivons l’infrastructure réellement disponible. Pas de régions fictives, de capacités gonflées ou de hiérarchie de forfaits dissimulée." },
  { number: "02", title: "La sécurité dès la conception", body: "Notre approche repose sur des limites explicites, des changements mesurés et une infrastructure qui reste compréhensible." },
  { number: "03", title: "Des échanges directs", body: "Pour vérifier l’adéquation d’un service ou parler d’infrastructure, contactez-nous directement. Nous préférons cadrer le besoin avec soin plutôt que trop promettre." },
];

export const frProductCategories = [
  { href: "/fr/vps", number: "01", title: "Serveurs privés virtuels", description: "Six forfaits VPS Proxmox, systèmes disponibles et configurations personnalisées.", detail: "Découvrir les VPS", tags: ["recommended"] },
  { href: "/fr/storage", number: "02", title: "Stockage objet", description: "Un stockage objet MinIO compatible S3 pour vos ressources et données applicatives.", detail: "Découvrir le stockage", tags: [] },
  { href: "/fr/network", number: "03", title: "Chemin réseau", description: "Calcul hébergé en France avec une IP publique allemande via tunnel.", detail: "Voir l’architecture", tags: ["featured"] },
];

export const frFutureCategories = [
  { number: "04", title: "Calcul dédié", description: "Une future catégorie pour les charges nécessitant une infrastructure plus dédiée.", detail: "Pas encore disponible", tags: ["soon", "limited"] },
  { number: "05", title: "Hébergement web", description: "Une future catégorie pour héberger des sites et applications web en mode géré.", detail: "Pas encore disponible", tags: ["soon"] },
  { number: "06", title: "Hébergement de jeux", description: "Une future catégorie pour les serveurs de jeux et leurs besoins d’exploitation.", detail: "Pas encore disponible", tags: ["soon", "beta"] },
];
