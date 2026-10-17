import { vpsNetworkOptions } from "@/app/content";

export const frLaunchNotice = "Les VPS et le stockage objet sont en préparation et ne sont pas disponibles à la commande. ROOT, le futur panneau client, n’est pas encore accessible. Aucune date de lancement n’est annoncée.";

export const frServices = [
  { code: "CALCUL / 01", title: "Serveurs privés virtuels", body: "Des machines virtuelles Proxmox prévues sur l’infrastructure en France, avec des adresses IP allemandes via tunnel. Pas encore disponibles.", items: ["Virtualisation Proxmox", "IP allemande via tunnel", "Trafic mensuel selon le forfait"] },
  { code: "STOCKAGE / 02", title: "Stockage objet", body: "Un stockage objet MinIO compatible S3 prévu pour vos ressources, sauvegardes et données applicatives. Pas encore disponible.", items: ["Stockage objet MinIO", "API compatible S3", "25 Go NVMe M.2"] },
  { code: "RÉSEAU / 03", title: "Options réseau", body: "Un chemin réseau par tunnel entre les serveurs hébergés en France et les adresses IP publiques allemandes des VPS.", items: ["Calcul hébergé en France", "IP allemande via tunnel", "Adapté à votre besoin"] },
];

export const frVpsServiceConditions = [
  { title: "VPS non infogérés", body: "Vous gérez votre système, vos logiciels, les mises à jour et la sécurité. Une assistance par tickets est prévue dans ROOT, à l’adresse /root/support, avec un délai indicatif de réponse de 24 à 72 h, sans jours fixes d’assistance. ROOT et ce support ne sont pas encore disponibles." },
  { title: "Options IPv4", body: `L’IPv4 allemande partagée via tunnel est incluse dans les prix VPS affichés. Une IPv4 dédiée est prévue en option à +${vpsNetworkOptions.dedicatedIpv4Price.replace("€", "")} €/mois TTC. L’IPv6 n’est pas disponible à ce stade.` },
  { title: "Ports sur IP partagée", body: `Les ports publics initiaux sont attribués aléatoirement parmi les ports disponibles et non réservés. Vous pouvez demander les ports disponibles de votre choix pour SSH et vos autres services, dans la limite de ${vpsNetworkOptions.sharedIpv4PortLimit} ports par VPS avec IPv4 partagée.` },
  { title: "Sauvegardes", body: "Aucune sauvegarde n’est incluse. Vous choisissez et gérez votre propre solution de sauvegarde si vous en avez besoin." },
  { title: "Protection DDoS", body: "Aucune protection DDoS n’est fournie actuellement." },
  { title: "Trafic mensuel", body: "Le trafic entrant et sortant est décompté du quota du forfait. Le quota est remis à zéro le premier jour de chaque mois. En cas de dépassement, le trafic est bloqué jusqu’à la prochaine remise à zéro ou une intervention convenue avec le support. Un supplément de trafic peut être chiffré sur demande." },
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
  { href: "/fr/vps", number: "01", title: "Serveurs privés virtuels", description: "Six forfaits VPS Proxmox prévus, systèmes et configurations personnalisées. Pas encore disponibles.", detail: "Aperçu des VPS", tags: ["soon"] },
  { href: "/fr/storage", number: "02", title: "Stockage objet", description: "Un stockage objet MinIO compatible S3 prévu pour vos données. Pas encore disponible.", detail: "Aperçu du stockage", tags: ["soon"] },
  { href: "/fr/network", number: "03", title: "Chemin réseau", description: "Calcul hébergé en France avec une IP publique allemande via tunnel.", detail: "Voir l’architecture", tags: ["featured"] },
];

export const frFutureCategories = [
  { number: "04", title: "Calcul dédié", description: "Une future catégorie pour les charges nécessitant une infrastructure plus dédiée.", detail: "Pas encore disponible", tags: ["soon", "limited"] },
  { number: "05", title: "Hébergement web", description: "Une future catégorie pour héberger des sites et applications web en mode géré.", detail: "Pas encore disponible", tags: ["soon"] },
  { number: "06", title: "Hébergement de jeux", description: "Une future catégorie pour les serveurs de jeux et leurs besoins d’exploitation.", detail: "Pas encore disponible", tags: ["soon", "beta"] },
];
