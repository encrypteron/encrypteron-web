/**
 * Public, reviewed Wiki articles. This file is the temporary editorial source for
 * the static public Wiki; it contains no draft data or write path. Before adding
 * an admin, replace this module with a published-view-only database reader.
 */
export type WikiArticle = {
  slug: string;
  language: "en" | "fr";
  title: string;
  summary: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  body: string;
};

export const articles: WikiArticle[] = [
  {
    slug: "vps-network-path",
    language: "en",
    title: "How the VPS network path works",
    summary: "Follow traffic from a client through the German public IP and tunnel to the France-hosted VPS.",
    category: "Networking",
    tags: ["VPS", "network", "tunnel"],
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    body: `## Request path\n\nPublic traffic follows this path:\n\n\`\`\`text\nClient → German public IP → tunnel path → France-hosted VPS\n\`\`\`\n\nThe VPS compute runs on France-hosted infrastructure. Its public IPv4 address is Germany-based and provided through a tunnel path. The VPS is not physically hosted in Germany.\n\n## Return path\n\nResponses use the reverse path: the France-hosted VPS sends traffic through the tunnel to the German public IP, then back to the client.\n\n## Latency\n\nThe tunnel introduces an additional hop. Latency depends on the client’s origin, ISP and peering, route, and tunnel path. A fixed latency number would not describe every visitor’s route.`,
  },
  {
    slug: "vps-network-path",
    language: "fr",
    title: "Fonctionnement du chemin réseau des VPS",
    summary: "Suivez le trafic depuis le client, via l’IP publique allemande et le tunnel, jusqu’au VPS hébergé en France.",
    category: "Réseau",
    tags: ["VPS", "réseau", "tunnel"],
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    body: `## Trajet aller\n\nLe trafic public suit ce chemin :\n\n\`\`\`text\nClient → IP publique allemande → chemin tunnelisé → VPS hébergé en France\n\`\`\`\n\nLe calcul du VPS fonctionne sur l’infrastructure hébergée en France. Son adresse IPv4 publique est basée en Allemagne et fournie via un chemin tunnelisé. Le VPS n’est pas physiquement hébergé en Allemagne.\n\n## Chemin retour\n\nLes réponses empruntent le chemin inverse : le VPS hébergé en France envoie le trafic par le tunnel jusqu’à l’IP publique allemande, puis vers le client.\n\n## Latence\n\nLe tunnel ajoute un saut au trajet. La latence dépend de l’origine du client, de son fournisseur d’accès et de l’interconnexion, des routes et du chemin tunnelisé. Une valeur fixe ne représenterait pas le trajet de chaque visiteur.`,
  },
  {
    slug: "choosing-a-vps-image",
    language: "en",
    title: "Choosing a VPS image",
    summary: "Review the operating system images and bring-your-own image options currently listed for VPS provisioning.",
    category: "VPS",
    tags: ["VPS", "images", "provisioning"],
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    body: `## Listed images\n\nThe current image list includes Debian 13, 12, and 11; Ubuntu 26.04, 24.04, 22.04, and 20.04 LTS; and Alpine Linux 3.21 and 3.20.\n\n## Bring your own\n\nCustom ISO files, a rescue environment, or a cloud-init image can be discussed during provisioning. Multiple custom ISO files are permitted when their combined size is at most **3 GB total**.\n\nImage availability and custom ISO suitability are confirmed during provisioning. A request prepared by the Custom VM enquiry builder does not provision a VM or calculate a binding price.`,
  },
  {
    slug: "choosing-a-vps-image",
    language: "fr",
    title: "Choisir une image pour un VPS",
    summary: "Consultez les systèmes actuellement proposés et les options d’image personnalisée lors du déploiement d’un VPS.",
    category: "VPS",
    tags: ["VPS", "images", "déploiement"],
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    body: `## Images proposées\n\nLa liste actuelle comprend Debian 13, 12 et 11 ; Ubuntu 26.04, 24.04, 22.04 et 20.04 LTS ; ainsi qu’Alpine Linux 3.21 et 3.20.\n\n## Apporter sa propre image\n\nDes fichiers ISO personnalisés, un environnement de secours ou une image cloud-init peuvent être étudiés lors du déploiement. Plusieurs fichiers ISO personnalisés sont autorisés si leur taille cumulée ne dépasse pas **3 Go au total**.\n\nLa disponibilité des images et la compatibilité des ISO personnalisés sont confirmées lors du déploiement. La demande préparée par le configurateur de VM personnalisée ne déploie pas de VM et ne calcule pas de prix ferme.`,
  },
  {
    slug: "connect-to-a-vps-with-ssh", language: "en", title: "Connect to a VPS with SSH keys",
    summary: "Create an SSH key, install its public half on the server, connect, and verify the host key safely.", category: "VPS", tags: ["VPS", "SSH", "keys", "access"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Gather details | Server IP, username, port, fingerprint, recovery route
2. Create a key | Keep the private file on your device
3. Install public key | Provisioning field or documented first access
4. Verify server | Compare host fingerprint before trusting it
5. Connect and test | Open a second session before changing settings
:::

## Before you connect\n\nYou need the VPS public IPv4 address, initial login user, and a way to install your public key. The user and first-access steps depend on the image and provisioning instructions; do not assume the login is \`root\`.\n\n## Create a key
:::cards
- Private key | Stays on your computer; never send it to the server
- Public key (.pub) | Safe to install on the intended VPS account
- Passphrase | Unlocks your private key locally; it is not your VPS password
:::
\n\nOn macOS, Linux, or Windows with OpenSSH, create an Ed25519 key pair:\n\n\`\`\`sh\nssh-keygen -t ed25519 -a 64 -C "your-name@your-device"\n\`\`\`\n\nChoose a recognizable file path and protect the private key with a passphrase. Keep the private key on your device. Install or share only the public key, usually the file ending in \`.pub\`. Never paste the private key into a website, ticket, chat, or VPS. Print the public key with \`cat ~/.ssh/id_ed25519.pub\`; in PowerShell use \`Get-Content $env:USERPROFILE\\.ssh\\id_ed25519.pub\`.\n\n## What the key-generator prompts mean

The comment after -C is only a label to help you recognize the key later; it is not a username or secret. When asked for a file name, the suggested default is usually suitable. If you choose another name, remember it because you will need to point SSH to that private-key file when connecting. If the tool warns that the file already exists, do not confirm overwrite until you know what that existing key is used for. You can instead choose a new filename.

When asked for a passphrase, type one and press Enter; the terminal may show no characters while you type. Enter it again to confirm. The passphrase protects the private-key file at rest. Keep it in a password manager if needed, and do not send it with the public key. The -a 64 option sets the work factor used when protecting the private key; it does not make the key public or change the server address.

## Install and connect
:::cards
- Your computer | Runs the ssh command and holds the private key
- Network connection | Carries the encrypted SSH session
- VPS account | Checks the matching public key and opens a shell
:::
\n\nAdd the public key through provisioning if supported. Otherwise use the documented initial-access method, then add it to the intended account’s \`~/.ssh/authorized_keys\`. Common permissions are \`700\` for \`.ssh\` and \`600\` for \`authorized_keys\`. Connect with the supplied account and address:\n\n\`\`\`sh\nssh username@SERVER_IP\n\`\`\`\n\nFor a differently named private key, use \`ssh -i ~/.ssh/your_key username@SERVER_IP\`. Do not copy a private key to the VPS for inbound login.\n\n## Verify the server
:::cards
- User key | Proves which client account is logging in
- Host key | Identifies the server you reached
- Fingerprint mismatch | Stop and verify through a separate trusted channel
:::
\n\nOn first connection, verify the displayed host-key fingerprint through a separate trusted channel or provisioning console before accepting it. A host key identifies the server and differs from your user key. If SSH later reports a changed host key, stop and investigate; do not silence the warning without confirming the reason.\n\n## After login: understand the prompt and do a safe first check

When SSH connects, the terminal prompt changes. Commands now run on the VPS rather than your own computer. Start with harmless checks: run whoami to see the account, hostname for the machine name, pwd for the current directory, and ls -la to list files. Type exit to end the remote shell; this logs you out and does not normally power off the VPS. Keep your first working session open while testing a second login in another terminal.

Do not paste commands you do not understand. sudo runs with administrator privileges, rm removes files, and commands piped into a shell can execute downloaded code. If a guide asks you to run a command as administrator, understand what it changes and make sure you have recovery access first.

## Copy files without copying your private key

Run these commands in a terminal on your computer, not in the remote VPS shell. Replace username, SERVER_IP, port, and local paths with the values for your setup.

Send one file to your VPS home directory:

\`\`\`sh
scp ./notes.txt username@SERVER_IP:~/
\`\`\`

Download a file from the VPS into the current folder on your computer:

\`\`\`sh
scp username@SERVER_IP:~/report.txt ./
\`\`\`

Copy a whole folder by adding -r:

\`\`\`sh
scp -r ./my-folder username@SERVER_IP:~/
\`\`\`

If SSH uses a non-default port, add capital -P and the port number:

\`\`\`sh
scp -P 2222 ./notes.txt username@SERVER_IP:~/
\`\`\`

In Windows PowerShell, a local file path can look like this:

\`\`\`powershell
scp "$env:USERPROFILE\Desktop\notes.txt" username@SERVER_IP:~/
\`\`\`

Check the destination before transferring important files. Never copy the SSH private-key file to the VPS; only the public key belongs in authorized_keys.

## First maintenance steps

Before installing an application, confirm the image and operating-system version with the provisioning notes or cat /etc/os-release. On Debian, updates commonly begin with sudo apt update followed by sudo apt full-upgrade; other distributions use different tools. Review prompts, schedule routine security updates, and reboot when required. Take or verify a backup before risky changes. Install only needed software and do not expose database or administration ports simply because an installer suggests it.

If you administer the VPS, create a personal named account when appropriate, install its public key, and verify that account in a second session. Confirm its intended administrator privileges before restricting the initial account. Do not disable password or root login until key login and console recovery have both been tested. Keep the original session open; validate SSH configuration before reload and use the open session or recovery console to undo a mistake.

## Keep the account recoverable

Know where the provider recovery console is and how to use it before changing SSH or firewall settings. Keep a secure record of the server address, account name, SSH port, key label, and recovery steps, but never record a private-key passphrase alongside an unprotected private key. If a device or key is lost, use another authorized route to remove that key public line from authorized_keys, then install and test a replacement key.

## Troubleshooting

Check the address, user, key path, passphrase, account permissions, server state, and network access to the SSH port. \`ssh -v username@SERVER_IP\` can help identify which key is offered. Review verbose output before sharing because it can disclose usernames, paths, addresses, and configuration. Never share a private key or passphrase.`,
  },
  {
    slug: "connect-to-a-vps-with-ssh", language: "fr", title: "Se connecter à un VPS avec une clé SSH",
    summary: "Créer une clé SSH, installer sa partie publique sur le serveur et vérifier l’identité du serveur.", category: "VPS", tags: ["VPS", "SSH", "clés", "accès"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Rassembler les informations | IP, utilisateur, port, empreinte, récupération
2. Créer une clé | Garder la clé privée sur votre appareil
3. Installer la clé publique | Déploiement ou accès initial documenté
4. Vérifier le serveur | Comparer l’empreinte avant de lui faire confiance
5. Se connecter et tester | Ouvrir une seconde session avant les changements
:::

## Avant la connexion\n\nIl vous faut l’adresse IPv4 publique du VPS, le nom de l’utilisateur initial et une méthode pour installer votre clé publique. L’utilisateur dépend de l’image et des instructions de déploiement ; ne supposez pas que l’identifiant est \`root\`.\n\n## Créer une clé
:::cards
- Clé privée | Reste sur votre ordinateur ; ne l’envoyez jamais au serveur
- Clé publique (.pub) | À installer sur le compte VPS prévu
- Phrase secrète | Protège localement la clé privée ; ce n’est pas le mot de passe VPS
:::
\n\nSur macOS, Linux ou Windows avec OpenSSH, créez une paire Ed25519 :\n\n\`\`\`sh\nssh-keygen -t ed25519 -a 64 -C "nom@appareil"\n\`\`\`\n\nChoisissez un emplacement explicite et protégez la clé privée par une phrase secrète. Elle reste sur votre appareil. Seule la clé publique, généralement le fichier se terminant par \`.pub\`, doit être installée ou partagée. Ne collez jamais la clé privée dans un site, un ticket, une discussion ou sur le VPS. Affichez la clé publique avec \`cat ~/.ssh/id_ed25519.pub\` ; dans PowerShell, utilisez \`Get-Content $env:USERPROFILE\\.ssh\\id_ed25519.pub\`.\n\n## Comprendre les questions de génération

Le commentaire après -C est une étiquette qui aide à reconnaître la clé ; ce n’est ni un nom d’utilisateur ni un secret. Le chemin proposé convient généralement. Si vous choisissez un autre nom, retenez-le : vous devrez indiquer le fichier de clé privée lors de la connexion. Si l’outil indique que le fichier existe déjà, ne confirmez pas son remplacement sans savoir à quoi sert cette clé. Vous pouvez choisir un nouveau nom de fichier.

Lorsqu’une phrase secrète est demandée, saisissez-la puis appuyez sur Entrée ; le terminal peut ne rien afficher pendant la saisie. Saisissez-la une seconde fois pour confirmer. Elle protège le fichier de clé privée au repos. Conservez-la dans un gestionnaire de mots de passe si nécessaire et ne l’envoyez pas avec la clé publique. L’option -a 64 règle le coût de protection de la clé privée ; elle ne rend pas la clé publique et ne modifie pas l’adresse du serveur.

## Installer la clé et se connecter
:::cards
- Votre ordinateur | Lance ssh et conserve la clé privée
- Connexion réseau | Transporte la session SSH chiffrée
- Compte VPS | Vérifie la clé publique correspondante et ouvre un shell
:::
\n\nAjoutez la clé publique lors du déploiement si cette option existe. Sinon, utilisez la méthode d’accès initiale documentée, puis ajoutez-la au fichier \`~/.ssh/authorized_keys\` du compte prévu. Les droits courants sont \`700\` pour \`.ssh\` et \`600\` pour \`authorized_keys\`. Connectez-vous avec l’utilisateur et l’adresse fournis :\n\n\`\`\`sh\nssh utilisateur@ADRESSE_IP\n\`\`\`\n\nPour une clé privée portant un autre nom, utilisez \`ssh -i ~/.ssh/ma_cle utilisateur@ADRESSE_IP\`. Ne copiez pas de clé privée sur le VPS.\n\n## Vérifier le serveur
:::cards
- Clé utilisateur | Prouve quel compte client se connecte
- Clé hôte | Identifie le serveur joint
- Empreinte différente | Arrêtez-vous et vérifiez par un canal indépendant
:::
\n\nLors de la première connexion, vérifiez l’empreinte de la clé hôte via un canal de confiance indépendant ou la console de déploiement. Cette clé identifie le serveur ; elle est différente de votre clé utilisateur. Si SSH signale ensuite un changement de clé hôte, arrêtez-vous et vérifiez-le. Ne contournez pas l’avertissement sans comprendre le changement.\n\n## Après connexion : comprendre l’invite et vérifier sans risque

Quand SSH se connecte, l’invite du terminal change. Les commandes s’exécutent alors sur le VPS, et non sur votre ordinateur. Commencez par des vérifications sans danger : whoami affiche le compte, hostname le nom de la machine, pwd le dossier courant et ls -la son contenu. Saisissez exit pour fermer le shell distant ; cela vous déconnecte et n’éteint normalement pas le VPS. Gardez la première session fonctionnelle ouverte pendant que vous testez une seconde connexion dans un autre terminal.

Ne collez pas de commandes que vous ne comprenez pas. sudo exécute une commande avec des privilèges d’administration, rm supprime des fichiers et une commande qui transmet un téléchargement à un interpréteur peut exécuter du code. Si un guide demande des droits administrateur, comprenez les changements et vérifiez votre moyen de récupération avant de continuer.

## Transférer des fichiers sans copier la clé privée

Lancez ces commandes dans un terminal de votre ordinateur, pas dans le shell distant du VPS. Remplacez utilisateur, ADRESSE_IP, le port et les chemins locaux par les valeurs de votre configuration.

Envoyer un fichier vers le dossier personnel du VPS :

\`\`\`sh
scp ./notes.txt utilisateur@ADRESSE_IP:~/
\`\`\`

Télécharger un fichier du VPS dans le dossier courant de votre ordinateur :

\`\`\`sh
scp utilisateur@ADRESSE_IP:~/rapport.txt ./
\`\`\`

Copier un dossier entier en ajoutant -r :

\`\`\`sh
scp -r ./mon-dossier utilisateur@ADRESSE_IP:~/
\`\`\`

Si SSH utilise un port différent, ajoutez -P en majuscule et le numéro du port :

\`\`\`sh
scp -P 2222 ./notes.txt utilisateur@ADRESSE_IP:~/
\`\`\`

Dans Windows PowerShell, un chemin local peut ressembler à ceci :

\`\`\`powershell
scp "$env:USERPROFILE\Desktop\notes.txt" utilisateur@ADRESSE_IP:~/
\`\`\`

Vérifiez la destination avant de transférer des fichiers importants. Ne copiez jamais la clé SSH privée sur le VPS ; seule la clé publique doit figurer dans authorized_keys.

## Premières opérations de maintenance

Avant d’installer une application, vérifiez l’image et la version du système dans les instructions de déploiement ou avec cat /etc/os-release. Sur Debian, la mise à jour commence souvent par sudo apt update, puis sudo apt full-upgrade ; les autres distributions utilisent des outils différents. Lisez les demandes, planifiez les mises à jour de sécurité et redémarrez si nécessaire. Vérifiez une sauvegarde avant les changements risqués. Installez seulement les logiciels nécessaires et n’exposez pas de port de base de données ou d’administration simplement parce qu’un installateur le propose.

Si vous administrez le VPS, créez si nécessaire un compte personnel, installez sa clé publique et vérifiez ce compte dans une seconde session. Confirmez ses privilèges prévus avant de restreindre le compte initial. Ne désactivez pas l’accès par mot de passe ou root avant d’avoir testé la clé et la console de récupération. Gardez la première session ouverte ; validez la configuration SSH avant de la recharger et utilisez la session ou la console pour annuler une erreur.

## Préserver les possibilités de récupération

Repérez la console de récupération du fournisseur et son fonctionnement avant de modifier SSH ou le pare-feu. Conservez de manière sûre l’adresse du serveur, le nom de compte, le port SSH, l’étiquette de la clé et les étapes de récupération, mais ne notez pas la phrase secrète à côté d’une clé privée non protégée. Si un appareil ou une clé est perdu, utilisez un autre accès autorisé pour retirer sa ligne publique de authorized_keys, puis installez et testez une clé de remplacement.

## Dépannage\n\nVérifiez l’adresse, l’utilisateur, le chemin de clé, la phrase secrète, les droits du compte, l’état du serveur et l’accès réseau au port SSH. \`ssh -v utilisateur@ADRESSE_IP\` aide à examiner la clé proposée. Vérifiez la sortie avant de la partager, car elle peut révéler des noms, chemins, adresses et paramètres. Ne communiquez jamais votre clé privée ni sa phrase secrète.`,
  },
  {
    slug: "secure-a-new-debian-vps", language: "en", title: "Secure a new Debian VPS: a careful baseline",
    summary: "A short, step-by-step Debian checklist for safe SSH and firewall setup.", category: "Security", tags: ["VPS", "Debian", "SSH", "firewall", "updates"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Prepare | Confirm recovery access; keep SSH open
2. Update | Upgrade Debian and reconnect
3. Add admin | Test key login and sudo in a second terminal
4. Protect SSH | Keep port 22; allow it before enabling UFW
5. Verify | Test from another terminal or network
:::

## Prepare and update

For Debian, OpenSSH, and UFW only. Find the provider recovery console first. Keep your current SSH session open; stop if you cannot recover access.

:::cards
- Recovery | Find the console before changing access
- Working session | Keep it open while testing
- Default choice | Leave SSH on port 22
:::

Run on the VPS. Review package prompts; if a proposed removal is unclear, stop and ask for help.

\`\`\`sh
sudo apt update
sudo apt full-upgrade
\`\`\`

## Create and test an administrator

Replace \`alice\` with your account name. Install its public key, then test from a second terminal on your computer:

\`\`\`sh
sudo adduser alice
sudo usermod -aG sudo alice
ssh alice@SERVER_IP
sudo whoami
\`\`\`

Run the first two commands on the VPS; run the last two on your computer. Replace \`SERVER_IP\` with the VPS address. \`sudo whoami\` should print \`root\`. If login or sudo fails, fix it from the original session before changing SSH.

:::cards
- VPS terminal | Create the account and grant sudo
- Your computer | Test the new SSH login separately
- Success | Login works; sudo whoami prints root
:::

## Keep SSH on port 22

Port 22 is the recommended default. Only disable root or password login after the new account's key login and sudo work. Debian may load settings from included files; inspect effective settings and validate before reloading:

\`\`\`sh
sudo sshd -T | grep -E '^(port|permitrootlogin|passwordauthentication) '
sudo sshd -t
sudo systemctl reload ssh
\`\`\`

No output from \`sshd -t\` means the syntax check passed. If it reports an error, do not reload. Keep the first session open and test a second login after reloading. If access fails, restore the saved configuration through that session or recovery console.

:::cards
- Before reload | sshd -t reports no errors
- After reload | Test a fresh SSH connection
- If it fails | Restore the saved config using the open session or console
:::

## Allow SSH before enabling UFW

UFW and the provider firewall are separate; both must allow SSH. Check UFW on the VPS. If it is missing, stop and ask an administrator. If active, inspect its rules; if inactive, allow SSH before enabling it.

\`\`\`sh
sudo ufw status verbose
sudo ufw allow 22/tcp
sudo ufw status numbered
sudo ufw enable
\`\`\`

Confirm \`22/tcp ALLOW\` before enabling UFW. Then test another SSH login. Allow TCP 22 in the provider firewall too, if enabled. Check IPv6 rules separately when using a public IPv6 address.

:::cards
- Default port | Keep SSH on 22 unless you have a clear reason to change it
- Two firewalls | Allow the SSH port in UFW and provider rules
- Safe changes | Keep a working session until another login succeeds
:::

:::cards
- UFW missing | Stop and get administrator guidance
- UFW inactive | Add and check the SSH rule before enabling
- UFW active | Review current rules before editing
:::

## Optional: change the SSH port

:::cards
- Allow first | Open the new TCP port in both firewalls
- Listen on both | Keep 22 active during the change
- Test, then remove | Close 22 only after the new login works
:::

Only do this if you can edit both firewalls and use the recovery console. Choose a port available for your use; replace \`PORT\` consistently. Allow it in the provider firewall, if enabled, and in UFW:

\`\`\`sh
sudo ufw allow PORT/tcp
\`\`\`

Back up SSH configuration. Configure both port 22 and \`PORT\`, checking Debian's included files. Validate and reload:

\`\`\`sh
sudo sshd -t
sudo systemctl reload ssh
\`\`\`

Test from a second terminal:

\`\`\`sh
ssh -p PORT alice@SERVER_IP
\`\`\`

Remove port 22 from SSH and both firewalls only after this works. If anything fails, restore port 22 through the open session or console. A custom port may reduce scan noise; it does not replace keys or updates.`,
  },
  {
    slug: "secure-a-new-debian-vps", language: "fr", title: "Sécuriser un nouveau VPS Debian : une base prudente",
    summary: "Un guide court pour configurer SSH et le pare-feu Debian sans perdre l'accès.", category: "Sécurité", tags: ["VPS", "Debian", "SSH", "pare-feu", "mises à jour"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Préparer | Confirmer la récupération ; garder SSH ouvert
2. Mettre à jour | Mettre Debian à niveau et se reconnecter
3. Ajouter un compte | Tester clé et sudo dans un second terminal
4. Protéger SSH | Garder le port 22 ; l'autoriser avant UFW
5. Vérifier | Tester depuis un autre terminal ou réseau
:::

## Préparer et mettre à jour

Pour Debian, OpenSSH et UFW uniquement. Repérez d'abord la console de récupération fournisseur. Gardez la session SSH ouverte ; arrêtez-vous si vous ne pouvez pas récupérer l'accès.

Exécutez sur le VPS. Lisez les demandes de paquets ; si une suppression proposée n'est pas claire, arrêtez-vous et demandez conseil.

\`\`\`sh
sudo apt update
sudo apt full-upgrade
\`\`\`

## Créer et tester un compte administrateur

Remplacez \`alice\` par votre nom de compte. Installez sa clé publique, puis testez depuis un second terminal sur votre ordinateur :

\`\`\`sh
sudo adduser alice
sudo usermod -aG sudo alice
ssh alice@SERVER_IP
sudo whoami
\`\`\`

Exécutez les deux premières commandes sur le VPS et les deux dernières sur votre ordinateur. Remplacez \`SERVER_IP\` par l'adresse du VPS. \`sudo whoami\` doit afficher \`root\`. En cas d'échec, corrigez le compte depuis la session initiale avant de modifier SSH.

:::cards
- Récupération | Repérer la console avant de modifier les accès
- Session active | La garder ouverte pendant les tests
- Choix par défaut | Laisser SSH sur le port 22
:::

## Garder SSH sur le port 22

Le port 22 est recommandé. Ne désactivez root ou l'accès par mot de passe qu'après avoir testé la clé et sudo du nouveau compte. Debian peut charger des fichiers inclus ; examinez les paramètres effectifs et validez avant rechargement :

\`\`\`sh
sudo sshd -T | grep -E '^(port|permitrootlogin|passwordauthentication) '
sudo sshd -t
sudo systemctl reload ssh
\`\`\`

Sans sortie de \`sshd -t\`, la syntaxe est valide. En cas d'erreur, ne rechargez pas. Gardez la première session ouverte et testez une seconde connexion après rechargement. Si l'accès échoue, restaurez la configuration sauvegardée depuis cette session ou la console.

:::cards
- Avant rechargement | sshd -t ne signale aucune erreur
- Après rechargement | Tester une nouvelle connexion SSH
- En cas d'échec | Restaurer la sauvegarde depuis la session ou la console
:::

## Autoriser SSH avant UFW

UFW et le pare-feu fournisseur sont distincts ; les deux doivent autoriser SSH. Vérifiez UFW sur le VPS. S'il est absent, arrêtez-vous et demandez conseil. S'il est actif, examinez ses règles ; s'il est inactif, autorisez SSH avant activation.

\`\`\`sh
sudo ufw status verbose
sudo ufw allow 22/tcp
sudo ufw status numbered
sudo ufw enable
\`\`\`

Vérifiez \`22/tcp ALLOW\` avant d'activer UFW. Testez ensuite une nouvelle connexion SSH. Autorisez aussi le TCP 22 dans le pare-feu fournisseur s'il est actif. Vérifiez séparément IPv6 si vous utilisez une adresse publique IPv6.

:::cards
- Port par défaut | Garder SSH sur 22 sans raison claire de le changer
- Deux pare-feu | Autoriser SSH dans UFW et chez le fournisseur
- Changements sûrs | Garder une session active jusqu'au test réussi
:::

:::cards
- UFW absent | Arrêter et demander conseil à un administrateur
- UFW inactif | Ajouter et vérifier la règle SSH avant activation
- UFW actif | Examiner les règles avant modification
:::

## Option : changer de port SSH

À faire seulement si vous pouvez modifier les deux pare-feu et utiliser la console de récupération. Choisissez un port disponible pour votre usage ; remplacez \`PORT\` partout. Autorisez-le dans le pare-feu fournisseur (s'il est actif) et dans UFW :

\`\`\`sh
sudo ufw allow PORT/tcp
\`\`\`

Sauvegardez la configuration SSH. Configurez les ports 22 et \`PORT\`, en vérifiant les fichiers inclus Debian. Validez et rechargez :

\`\`\`sh
sudo sshd -t
sudo systemctl reload ssh
\`\`\`

Testez depuis un second terminal :

\`\`\`sh
ssh -p PORT alice@SERVER_IP
\`\`\`

Ne retirez le port 22 de SSH et des deux pare-feu qu'après réussite. En cas d'échec, restaurez-le depuis la session ouverte ou la console. Un autre port peut réduire le bruit des scans, mais ne remplace ni les clés ni les mises à jour.`,
  },
  {
    slug: "vps-backups-and-recovery", language: "en", title: "Plan VPS backups and recovery",
    summary: "Choose what to back up, keep independent copies, and test that restoration works.", category: "Operations", tags: ["VPS", "backups", "recovery", "storage"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. List what matters | Data, database, config, rebuild steps
2. Choose a schedule | Match how much data you can recreate
3. Store a separate copy | Protect credentials and encryption keys
4. Restore somewhere safe | Check files, database, permissions, startup
:::

## Decide what must be recoverable\n\nList application data, databases, configuration, uploaded files, and rebuild steps. A disk copy may preserve corruption too; decide whether you need application-aware database exports. Do not assume provider snapshots or object storage are enabled or included without confirmation.\n\n## Keep independent copies\n\nStore copies separately from the VPS so one compromised account or deletion cannot remove every copy. Encrypt backups where appropriate and protect encryption keys separately. Limit who can read, delete, or overwrite them. Set retention according to recovery needs and applicable obligations, and remove copies when no longer needed.\n\nObject Storage may be suitable for backup data if you configure a compatible client and confirm current capacity and scope. S3-compatible describes an API workflow; it does not promise a particular durability, availability, or retention level.\n\n## Choose a backup schedule and understand recovery targets

Two useful questions are: how much recent data can you afford to lose, and how long can the service be unavailable while you restore it? These are recovery objectives, not guarantees. Use the answers to choose backup frequency and test frequency. A small personal site and a frequently changing database may need different schedules.

Make an inventory before selecting tools. Include database exports, uploaded files, configuration, certificates where appropriate, and a written rebuild procedure. Some files can be recreated from source control while user data cannot. Keep at least one copy outside the VPS and protect the account that stores it separately from the VPS login.

## A safe restore drill
:::cards
- Pick a copy | Use a recent backup and note its date
- Restore separately | Use a temporary folder or separate test machine
- Check the result | Files, database, ownership, permissions, startup
- Record gaps | Fix missing steps before relying on the backup
:::


Choose a recent backup and restore it to a temporary location or separate test machine. Do not overwrite the live service during your first test. Check that expected files exist, database exports can be read, ownership and permissions make sense, and the application can start with the restored data. Record missing steps and update the procedure. Delete temporary test data safely when finished.

## Automate and restore-test\n\nSchedule backups according to how much data you can recreate. Monitor failures and capacity without logging passwords, secret keys, or personal data. Give backup credentials only the permissions needed. Periodically restore a representative copy elsewhere; verify files, database consistency, permissions, and application startup. Record the steps and time. A backup never restored is an unverified recovery plan.`,
  },
  {
    slug: "vps-backups-and-recovery", language: "fr", title: "Préparer les sauvegardes et la reprise d’un VPS",
    summary: "Définissez ce qu’il faut sauvegarder, conservez des copies indépendantes et testez la restauration.", category: "Exploitation", tags: ["VPS", "sauvegardes", "reprise", "stockage"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Inventorier l’essentiel | Données, base, configuration, reconstruction
2. Choisir une fréquence | Selon la quantité de données recréable
3. Garder une copie séparée | Protéger identifiants et clés de chiffrement
4. Restaurer sans risque | Vérifier fichiers, base, droits et démarrage
:::

## Définir ce qui doit être récupérable\n\nInventoriez les données applicatives, bases de données, configurations, fichiers envoyés et étapes de reconstruction. Une copie disque peut aussi conserver la corruption ; déterminez si des exports cohérents des bases sont nécessaires. Ne supposez pas que les instantanés fournisseur ou le stockage objet sont activés ou inclus sans confirmation.\n\n## Garder des copies indépendantes\n\nConservez les copies séparément du VPS afin qu’un compte compromis ou une suppression ne les efface pas toutes. Chiffrez-les si nécessaire et protégez séparément les clés de chiffrement. Limitez les accès en lecture, suppression et remplacement. Définissez la conservation selon les besoins de reprise et obligations applicables, puis supprimez les copies inutiles.\n\nLe stockage objet peut convenir aux sauvegardes si vous configurez un client compatible et confirmez capacité et périmètre actuels. « Compatible S3 » décrit un flux d’API ; cela ne promet pas une durabilité, disponibilité ou conservation particulière.\n\n## Choisir une fréquence et définir la reprise

Posez-vous deux questions : quelle quantité de données récentes pouvez-vous perdre et combien de temps le service peut-il rester indisponible pendant la restauration ? Ce sont des objectifs de reprise, pas des garanties. Utilisez les réponses pour choisir la fréquence des sauvegardes et des tests. Un petit site personnel et une base de données qui change souvent peuvent nécessiter des calendriers différents.

Faites l’inventaire avant de choisir un outil. Incluez les exports de base, fichiers envoyés, configuration, certificats si nécessaire et procédure écrite de reconstruction. Certains fichiers sont recréables depuis le dépôt de code ; les données utilisateurs ne le sont pas toujours. Gardez au moins une copie hors du VPS et protégez séparément le compte qui la stocke.

## Effectuer un test de restauration prudent
:::cards
- Choisir une copie | Prendre une sauvegarde récente et noter sa date
- Restaurer à part | Utiliser un dossier temporaire ou une autre machine
- Vérifier le résultat | Fichiers, base, propriétaire, droits, démarrage
- Noter les lacunes | Corriger la procédure avant de compter sur la copie
:::


Choisissez une sauvegarde récente et restaurez-la dans un dossier temporaire ou sur une machine séparée. Lors du premier test, ne remplacez pas le service en production. Vérifiez la présence des fichiers attendus, la lisibilité des exports, la cohérence des propriétaires et droits, puis le démarrage de l’application avec les données restaurées. Notez les étapes manquantes et mettez la procédure à jour. Supprimez prudemment les données temporaires une fois le test terminé.

## Automatiser et tester la restauration\n\nPlanifiez les sauvegardes selon la quantité de données que vous pouvez recréer. Surveillez échecs et capacité sans journaliser mots de passe, clés secrètes ou données personnelles. Limitez les droits des identifiants de sauvegarde. Restaurez périodiquement une copie représentative dans un autre emplacement ; vérifiez fichiers, cohérence de base, droits et démarrage. Notez les étapes et le temps. Une sauvegarde jamais restaurée reste un plan non vérifié.`,
  },
  {
    slug: "use-object-storage-with-s3-tools", language: "en", title: "Use Object Storage with S3-compatible tools",
    summary: "Find the endpoint and credentials, protect access keys, and test a small upload before automation.", category: "Storage", tags: ["Object Storage", "S3", "credentials", "backups"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Get service settings | Endpoint, bucket, key, required options
2. Protect credentials | Use restricted local storage, not shell history
3. Upload a harmless test | Start with a non-sensitive file
4. Verify and remove it | List, download, compare, delete if appropriate
5. Connect the workload | Use least privilege and test recovery
:::

## Gather connection details\n\nObtain the endpoint, bucket name, access key, secret key, and any required region or addressing settings from the service instructions. Do not guess endpoint values or infer a region from the website. S3-compatible APIs can differ in supported features.\n\nEncrypteron describes Object Storage as S3-compatible and lists a 250 GB starting allocation. Confirm availability, current scope, access details, and limits before relying on them.\n\n## Understand the basic words
:::cards
- Endpoint | Where the client sends API requests
- Bucket | The named container that holds objects
- Access and secret keys | Storage credentials; never substitute your SSH key
:::


An object is a stored item such as a file. A bucket is a named container for objects. An endpoint is the service address a client contacts. An access key identifies a client credential, while the secret key proves possession of that credential. These values are not interchangeable with your VPS address or SSH key.

S3-compatible means a client can use an S3-style API, but providers can differ in endpoint format, supported operations, region handling, path-style versus virtual-host addressing, and access controls. Follow the exact service instructions and do not copy settings from an unrelated tutorial.

## Configure a local client carefully

Choose a maintained client and use its documented configuration mechanism. Prefer a local credentials file with restrictive permissions or an operating-system secret store. Avoid putting secrets directly in a command, because commands can remain in shell history or appear in process listings. Do not commit config files containing secrets. Start with a dedicated test bucket or harmless object and verify upload, listing, download, and deletion before connecting a production backup job.

If an operation fails, check endpoint, bucket spelling, system clock, required region/addressing mode, and the credential's allowed actions. Do not solve an access-denied error by granting every permission or making a bucket public. Ask the service administrator which permission is missing.

## Protect credentials\n\nUse credentials with only the permissions the workload needs. Store secret keys in a secret manager or restricted configuration file, not source code, public repositories, screenshots, or shell-history-producing command arguments. Do not reuse VPS login keys as storage credentials. Revoke and replace a key if it may have been exposed.\n\n## Test a client
:::cards
- Upload | Send a harmless sample file
- Download | Retrieve it and compare a checksum
- Clean up | Delete the test object if appropriate
:::
\n\nUse a maintained S3-compatible client and configure it according to the product instructions. Start with a non-sensitive test file: upload, list, download, compare a checksum, and delete if appropriate. Test the intended application or backup tool too. Do not use real secrets or personal data in test objects.\n\n## Plan access and recovery\n\nDecide who can read, overwrite, and delete objects. Use separate credentials for separate workloads where practical. Document key rotation and restore steps. Do not assume versioning, immutability, public-access blocking, encryption settings, or a particular durability level unless confirmed for your bucket and configuration.`,
  },
  {
    slug: "use-object-storage-with-s3-tools", language: "fr", title: "Utiliser le stockage objet avec des outils compatibles S3",
    summary: "Identifiez le point d’accès et les identifiants, protégez les clés et testez un petit envoi.", category: "Stockage", tags: ["stockage objet", "S3", "identifiants", "sauvegardes"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Récupérer les paramètres | Point d’accès, bucket, clé, options requises
2. Protéger les identifiants | Stockage local restreint, pas l’historique shell
3. Envoyer un fichier test | Commencer sans donnée sensible
4. Vérifier puis supprimer | Lister, télécharger, comparer, supprimer si utile
5. Connecter l’application | Limiter les droits et tester la reprise
:::

## Rassembler les paramètres\n\nObtenez le point d’accès, le nom du bucket, la clé d’accès, la clé secrète et les éventuels paramètres de région ou d’adressage via les instructions du service. Ne devinez pas le point d’accès et ne déduisez pas une région depuis le site. Les API compatibles S3 peuvent différer par leurs fonctionnalités.\n\nEncrypteron décrit le stockage objet comme compatible S3 et affiche une allocation de départ de 250 Go. Confirmez disponibilité, périmètre actuel, accès et limites avant de vous y fier.\n\n## Comprendre le vocabulaire
:::cards
- Point d’accès | Adresse où le client envoie ses requêtes API
- Bucket | Conteneur nommé qui regroupe les objets
- Clés d’accès et secrète | Identifiants du stockage, différents de la clé SSH
:::


Un objet est un élément stocké, comme un fichier. Un bucket est un conteneur nommé pour les objets. Un point d’accès est l’adresse du service contactée par le client. La clé d’accès identifie un identifiant client ; la clé secrète prouve que vous possédez cet identifiant. Ces valeurs ne remplacent ni l’adresse du VPS ni la clé SSH.

« Compatible S3 » signifie qu’un client peut utiliser une API de type S3, mais les fournisseurs peuvent différer par le format du point d’accès, les opérations prises en charge, la région, l’adressage par chemin ou nom d’hôte et les contrôles d’accès. Suivez les instructions exactes du service et ne copiez pas les paramètres d’un tutoriel sans rapport.

## Configurer prudemment un client local

Choisissez un client maintenu et utilisez sa méthode de configuration documentée. Préférez un fichier d’identifiants local avec des droits restreints ou le stockage de secrets du système. Évitez de mettre les secrets dans une commande : ils peuvent rester dans l’historique du shell ou apparaître dans la liste des processus. Ne validez pas un fichier de configuration contenant des secrets dans un dépôt. Commencez avec un bucket de test ou un objet sans importance et vérifiez envoi, liste, téléchargement et suppression avant de connecter un processus de sauvegarde réel.

En cas d’échec, vérifiez le point d’accès, l’orthographe du bucket, l’horloge système, la région ou le mode d’adressage requis et les actions autorisées pour l’identifiant. Ne réglez pas un refus d’accès en accordant tous les droits ou en rendant le bucket public. Demandez à l’administrateur du service quelle permission manque.

## Protéger les identifiants\n\nUtilisez des identifiants limités aux permissions nécessaires. Conservez les clés secrètes dans un gestionnaire de secrets ou un fichier restreint, pas dans le code source, un dépôt public, une capture ou une commande enregistrée dans l’historique. Ne réutilisez pas les clés SSH du VPS. Révoquez et remplacez toute clé susceptible d’avoir été exposée.\n\n## Tester un client
:::cards
- Envoyer | Téléverser un fichier de test sans importance
- Télécharger | Le récupérer et comparer une somme de contrôle
- Nettoyer | Supprimer l’objet test si nécessaire
:::
\n\nUtilisez un client maintenu compatible S3 et configurez-le selon les instructions du produit. Commencez par un fichier non sensible : envoyez-le, listez-le, téléchargez-le, comparez une somme de contrôle puis supprimez-le si nécessaire. Testez aussi l’application ou l’outil de sauvegarde prévu. N’utilisez pas de secrets ou données personnelles pour ce test.\n\n## Prévoir accès et reprise\n\nDéterminez qui peut lire, remplacer et supprimer les objets. Utilisez si possible des identifiants distincts par charge. Documentez la rotation des clés et la restauration. Ne supposez pas que versionnage, immutabilité, blocage d’accès public, chiffrement ou niveau de durabilité précis sont disponibles sans confirmation pour votre bucket.`,
  },
  {
    slug: "troubleshoot-ssh-connections", language: "en", title: "Troubleshoot common SSH connection problems",
    summary: "Separate network, firewall, host-key, and authentication errors without weakening SSH protections.", category: "Troubleshooting", tags: ["VPS", "SSH", "network", "troubleshooting"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Copy the exact error | Note what changed since last success
2. Check address and port | Separate reachability from login issues
3. Check the offered key | Use verbose output locally and redact it
4. Verify host identity | Stop if the saved fingerprint changed
5. Recover carefully | Use an open session or provider console
:::

## “Connection timed out”
:::cards
- Address and port | Confirm both match the provisioning details
- Server state | Check the VPS is running
- Network rules | Check provider and server firewalls; do not change keys yet
:::
\n\nCheck the current public IPv4 address and SSH port. Confirm the VPS is running, your local network permits outbound SSH, and provider/network and server-firewall rules allow the connection. A timeout generally means the connection did not complete; it does not prove the key or password is wrong.\n\nThe Encrypteron public IP uses a tunnel path to France-hosted compute. That additional hop can affect routing and latency, which vary by client network.\n\n## “Connection refused”\n\nThe address responded, but no service accepted that port or a firewall rejected it. Verify the port, SSH service state, and firewall through a provider console or existing session. Do not open every port as a diagnostic shortcut.\n\n## “Permission denied”\n\nCheck the username, public key installed for that account, private-key path, passphrase, and server-side ownership and permissions. Run \`ssh -i PATH -v username@SERVER_IP\` to see which key is offered. Review verbose output before sharing it; never share private-key contents or passphrases.\n\n## Host-key warning\n\nA changed host key may follow a legitimate rebuild, but may also mean you reached another server. Stop and verify the fingerprint through a separate trusted channel before changing your known-hosts entry. Do not disable host-key checking to bypass the warning.\n\n## A repeatable diagnostic order

Copy the exact error text and note what changed since the last successful connection. First confirm that you are using the correct server address, username, port, and key file. Next determine whether the failure happens before authentication (timeout/refused) or after the server asks to authenticate (permission denied). This distinction narrows the cause.

From your computer, test whether the SSH port is reachable using the approved port and network tools available to you. If it is not reachable, check server state and firewall rules through the provider console; do not change SSH authentication settings to fix a network timeout. If the port answers but authentication fails, use ssh -i PATH -v username@SERVER_IP to see whether the intended key is offered. Read the output locally and redact usernames, addresses, paths, and hostnames before sharing it.

Change one setting at a time and keep an existing session open. After a fix, make a fresh connection to prove it works. Do not disable host-key checks, open every inbound port, or enable remote root/password login as a general troubleshooting shortcut.

## Locked out after a change\n\nUse an open session or provider recovery console if available. Restore the last known-good configuration, validate SSH syntax, and add the correct firewall rule before reloading restrictions. If recovery access is unavailable, contact the provider through its published support channel. Never give anyone your private key.`,
  },
  {
    slug: "troubleshoot-ssh-connections", language: "fr", title: "Résoudre les problèmes courants de connexion SSH",
    summary: "Distinguez les erreurs réseau, pare-feu, clé hôte et authentification sans affaiblir SSH.", category: "Dépannage", tags: ["VPS", "SSH", "réseau", "dépannage"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Noter l’erreur exacte | Relever les changements récents
2. Vérifier IP et port | Distinguer réseau et authentification
3. Examiner la clé proposée | Lire la sortie localement et la masquer
4. Vérifier l’identité | Arrêter si l’empreinte a changé
5. Récupérer prudemment | Session ouverte ou console fournisseur
:::

## « Connection timed out »
:::cards
- Adresse et port | Comparer aux informations de déploiement
- État du serveur | Vérifier que le VPS fonctionne
- Règles réseau | Vérifier les pare-feu avant de toucher aux clés
:::
\n\nVérifiez l’adresse IPv4 publique actuelle et le port SSH. Confirmez que le VPS fonctionne, que le réseau local autorise SSH sortant et que les règles fournisseur et pare-feu serveur autorisent la connexion. Un délai d’attente signifie généralement que la connexion n’a pas abouti ; il ne prouve pas que la clé est erronée.\n\nL’IP publique Encrypteron suit un chemin tunnelisé vers le calcul hébergé en France. Ce saut peut influer sur le trajet et la latence, qui varient selon le réseau client.\n\n## « Connection refused »\n\nL’adresse a répondu, mais aucun service n’accepte ce port ou un pare-feu l’a rejeté. Vérifiez le port, l’état de SSH et les règles depuis la console fournisseur ou une session existante. N’ouvrez pas tous les ports pour diagnostiquer.\n\n## « Permission denied »\n\nVérifiez l’utilisateur, l’installation de la clé publique pour ce compte, le chemin de clé privée, la phrase secrète et les droits côté serveur. Utilisez \`ssh -i CHEMIN -v utilisateur@ADRESSE_IP\` pour voir la clé proposée. Vérifiez la sortie avant de la partager ; ne communiquez jamais une clé privée ou sa phrase secrète.\n\n## Avertissement de clé hôte\n\nUne clé hôte modifiée peut suivre une reconstruction légitime, mais aussi indiquer un autre serveur. Arrêtez-vous et vérifiez l’empreinte via un canal indépendant avant de modifier le fichier des hôtes connus. Ne désactivez pas la vérification pour contourner l’avertissement.\n\n## Suivre un ordre de diagnostic

Copiez le texte exact de l’erreur et notez ce qui a changé depuis la dernière connexion réussie. Vérifiez d’abord l’adresse du serveur, le nom d’utilisateur, le port et le fichier de clé. Déterminez ensuite si l’échec se produit avant l’authentification (délai d’attente ou refus) ou après la demande d’authentification (permission refusée). Cette distinction aide à cibler la cause.

Depuis votre ordinateur, testez l’accès au port SSH avec le port indiqué et les outils réseau disponibles. Si le port est inaccessible, vérifiez l’état du serveur et les règles pare-feu depuis la console fournisseur ; ne modifiez pas l’authentification SSH pour corriger un délai réseau. Si le port répond mais que l’authentification échoue, utilisez ssh -i CHEMIN -v utilisateur@ADRESSE_IP pour voir si la bonne clé est proposée. Lisez la sortie localement et masquez noms, adresses, chemins et noms d’hôte avant de la partager.

Modifiez un seul réglage à la fois et gardez une session existante ouverte. Après correction, établissez une nouvelle connexion pour confirmer le résultat. Ne désactivez pas la vérification des clés hôtes, n’ouvrez pas tous les ports entrants et n’activez pas l’accès root ou par mot de passe comme raccourci général de dépannage.

## Accès perdu après une modification\n\nUtilisez une session ouverte ou la console de récupération fournisseur si elle existe. Restaurez la dernière configuration connue comme fonctionnelle, vérifiez la syntaxe SSH et ajoutez la bonne règle pare-feu avant de réactiver les restrictions. Si la récupération est impossible, contactez le fournisseur par son canal d’assistance publié. Ne donnez jamais votre clé privée.`,
  },
  {
    slug: "deployment-checklist", language: "en", title: "A deployment checklist for a small VPS service",
    summary: "Prepare configuration, secrets, service ownership, logs, and rollback before exposing an application.", category: "Deployment", tags: ["deployment", "systemd", "secrets", "operations"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Prepare a known release | Record version, config, and data paths
2. Back up persistent data | Confirm you know the restore steps
3. Deploy with least privilege | Use a dedicated service account
4. Check health and exposure | Review logs, listeners, firewall
5. Roll back if needed | Return to the last known-good release
:::

## Before deployment\n\nKnow how to reproduce the service from a clean system: document runtime versions, packages, configuration, data paths, and startup steps. Keep application code and environment-specific configuration separate. Review what ports the application binds to and which should be reachable from the Internet.\n\n## Turn the checklist into a release procedure
:::cards
- Prepare | Version, configuration, data paths
- Protect | Backup and secrets ready
- Deploy | Dedicated account, limited file access
- Verify | Health, logs, open ports
- Recover | Known-good release and restore procedure
:::


Before changing the live service, decide how you will identify the version currently running, back up persistent data, deploy a known release, check health, and return to the previous version. Test the procedure on a non-production instance if available. Keep a short record of the change and outcome so the next person can understand what happened.

Start the process as a non-root user. Keep application files owned by the deployment or service account, and keep writable data in clearly identified directories. Bind internal-only services to localhost or a private interface when possible. A firewall rule is useful only when it matches the application's actual listener and the intended exposure.

After a release, check service status and recent logs, then test the application from a client outside the VPS. Confirm the expected page or endpoint works and that unrelated ports remain closed. If health checks fail, follow the rollback steps instead of repeatedly restarting a broken release.

## Protect configuration and secrets\n\nKeep passwords, API keys, and signing secrets out of source control, images, and logs. Store them in a restricted configuration file or secret manager, grant access only to the service account, and define a rotation procedure. Use separate credentials for development and production.\n\n## Run with limited privileges\n\nCreate a dedicated operating-system account for the application. The service should write only to the directories it needs and should not run as root. Configure a supervised service manager such as systemd with restart behavior appropriate for the application. Avoid automatic restart loops that hide persistent configuration failures.\n\n## Logs, updates, and recovery\n\nMake logs useful for diagnosing failures without including credentials or unnecessary personal data. Set sensible log rotation and access permissions. Define how dependencies and the application are updated, how you will notice failure, and how to return to a known-good release. Back up persistent data before risky migrations and verify the restore process.\n\n## Verify exposure\n\nCheck listening sockets and firewall rules after deployment. Confirm only intended public services are reachable, and keep databases and internal admin interfaces private. Test the application from an external client and inspect logs for startup and permission errors. A successful deployment is not proof that the service is secure; review the full application and its dependencies.`,
  },
  {
    slug: "deployment-checklist", language: "fr", title: "Liste de vérification pour déployer un service sur VPS",
    summary: "Préparez configuration, secrets, compte de service, journaux et retour arrière avant l’exposition d’une application.", category: "Déploiement", tags: ["déploiement", "systemd", "secrets", "exploitation"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Préparer une version connue | Noter version, configuration et données
2. Sauvegarder les données | Confirmer la procédure de restauration
3. Déployer avec peu de droits | Utiliser un compte de service dédié
4. Vérifier santé et exposition | Journaux, ports à l’écoute, pare-feu
5. Revenir en arrière si besoin | Restaurer la dernière version fonctionnelle
:::

## Avant le déploiement\n\nSachez reconstruire le service sur un système propre : documentez versions d’exécution, paquets, configuration, chemins de données et démarrage. Séparez le code applicatif de la configuration propre à l’environnement. Vérifiez sur quelles interfaces et quels ports l’application écoute, et lesquels doivent être accessibles depuis Internet.\n\n## Transformer la liste en procédure de mise en production
:::cards
- Préparer | Version, configuration, chemins des données
- Protéger | Sauvegarde et secrets prêts
- Déployer | Compte dédié, accès fichiers limité
- Vérifier | Santé, journaux, ports ouverts
- Récupérer | Version connue et procédure de restauration
:::


Avant de modifier le service actif, décidez comment identifier la version en cours, sauvegarder les données persistantes, déployer une version connue, vérifier son fonctionnement et revenir à la version précédente. Testez la procédure sur une instance hors production si possible. Notez brièvement le changement et son résultat pour que la prochaine personne puisse comprendre ce qui s’est passé.

Commencez avec un compte non-root. Attribuez les fichiers applicatifs au compte de déploiement ou de service et placez les données modifiables dans des répertoires clairement identifiés. Si possible, faites écouter les services internes uniquement sur localhost ou une interface privée. Une règle pare-feu n’est utile que si elle correspond au port réellement utilisé et à l’exposition voulue.

Après une publication, vérifiez l’état du service et les journaux récents, puis testez l’application depuis un client extérieur au VPS. Confirmez que la page ou l’API attendue fonctionne et que les ports sans rapport restent fermés. Si les contrôles échouent, suivez le retour arrière au lieu de redémarrer sans cesse une version défectueuse.

## Protéger configuration et secrets\n\nNe placez pas mots de passe, clés API et secrets de signature dans le dépôt, les images ou les journaux. Conservez-les dans un fichier restreint ou un gestionnaire de secrets, limitez les accès au compte du service et prévoyez leur rotation. Utilisez des identifiants distincts pour développement et production.\n\n## Limiter les privilèges\n\nCréez un compte système dédié à l’application. Le service ne doit écrire que dans les répertoires nécessaires et ne doit pas fonctionner en root. Configurez un superviseur comme systemd avec un comportement de redémarrage adapté. Évitez les boucles de redémarrage automatiques qui masquent une erreur persistante.\n\n## Journaux, mises à jour et reprise\n\nProduisez des journaux utiles au diagnostic sans secrets ni données personnelles superflues. Configurez rotation et droits d’accès. Définissez comment mettre à jour dépendances et application, détecter les pannes et revenir à une version connue. Sauvegardez les données persistantes avant une migration risquée et vérifiez la restauration.\n\n## Vérifier l’exposition\n\nExaminez les ports à l’écoute et les règles pare-feu après le déploiement. Confirmez que seuls les services prévus sont publics et gardez bases de données et interfaces internes privées. Testez depuis un client externe et consultez les erreurs de démarrage et de permissions. Un déploiement réussi ne prouve pas à lui seul que le service est sécurisé.`,
  },
  {
    slug: "linux-file-permissions", language: "en", title: "Linux file permissions for VPS applications",
    summary: "Understand owner, group, and mode bits to avoid making application files or secrets world-readable.", category: "Linux basics", tags: ["Linux", "permissions", "files", "security"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Identify the account | Which user runs the application?
2. Inspect the path | Check file owner and parent directories
3. Grant only needed access | Avoid broad recursive changes
4. Test the service | Confirm it can read and cannot overreach
:::

## Owner, group, and other users
:::cards
- Owner | The account that owns the file
- Group | Accounts that share the file group
- Other | All remaining local accounts
:::
\n\nLinux permissions describe what the file owner, its group, and other users may do. For files, read allows viewing, write allows changing, and execute allows running. For directories, read lists names, write changes directory entries, and execute allows traversing the directory.\n\nInspect ownership and permissions with:\n\n\`\`\`sh\nls -l PATH\nstat PATH\n\`\`\`\n\n## Common restricted modes\n\nThe numeric mode \`600\` gives the owner read and write access to a file. Mode \`700\` gives the owner full access to a directory and denies others. These are common starting points for private SSH keys and their directory. A public web asset may need broader read access, but secret configuration files should not.\n\nChange a specific file or directory deliberately:\n\n\`\`\`sh\nchmod 600 /path/to/secret.conf\nchmod 700 /home/alice/.ssh\nchown alice:alice /path/to/secret.conf\n\`\`\`\n\nReplace paths and account names with the intended values. Avoid recursive ownership or permission changes on broad system paths; they can break services or weaken protections.\n\n## Read the permission shorthand
:::cards
- Read (r = 4) | View a file; list directory names
- Write (w = 2) | Change a file; change directory entries
- Execute (x = 1) | Run a file; traverse a directory
:::


In a listing such as -rw-r-----, the first character indicates the file type; the next three positions are owner permissions, then group permissions, then permissions for everyone else. r means read, w means write, and x means execute. For directories, x also means a user can traverse the directory to reach items inside it. A user may need execute permission on every parent directory to reach a file even when the file itself allows reading.

Numeric modes add three values for each group: read is 4, write is 2, execute is 1. Thus 600 means owner read/write and no access for group or others; 700 means owner read/write/execute on a directory and no access for others; 640 means owner read/write and group read. Choose a mode based on the actual service users instead of copying a number blindly.

After a permission change, inspect it with ls -l and verify the service still works as the intended account. Do not use chmod -R 777 as a fix: it gives broad access and can expose or alter files. Do not run recursive chmod or chown against system directories unless you understand every affected file and have a recovery plan.

## Application service accounts\n\nGive each service a dedicated account and only the directory access it needs. Avoid running application processes as root. Check both file and parent-directory permissions: a restrictive file can still be exposed if its directory allows unexpected access. After changes, test that the service can read required configuration and cannot modify unrelated files.`,
  },
  {
    slug: "linux-file-permissions", language: "fr", title: "Droits des fichiers Linux pour les applications VPS",
    summary: "Comprendre propriétaire, groupe et modes pour éviter de rendre les fichiers ou secrets accessibles à tous.", category: "Bases Linux", tags: ["Linux", "permissions", "fichiers", "sécurité"], publishedAt: "2026-09-24", updatedAt: "2026-09-24",
    body: `
:::flow
1. Identifier le compte | Quel utilisateur lance l’application ?
2. Inspecter le chemin | Vérifier propriétaire et dossiers parents
3. Accorder le minimum utile | Éviter les changements récursifs larges
4. Tester le service | Confirmer lecture utile et droits limités
:::

## Propriétaire, groupe et autres utilisateurs
:::cards
- Propriétaire | Le compte qui possède le fichier
- Groupe | Les comptes membres du groupe du fichier
- Autres | Tous les autres comptes locaux
:::
\n\nLes permissions Linux définissent les droits du propriétaire, du groupe du fichier et des autres utilisateurs. Pour un fichier, la lecture permet de le consulter, l’écriture de le modifier et l’exécution de le lancer. Pour un répertoire, la lecture liste les noms, l’écriture modifie les entrées et l’exécution permet de le parcourir.\n\nExaminez propriétaire et droits avec :\n\n\`\`\`sh\nls -l CHEMIN\nstat CHEMIN\n\`\`\`\n\n## Modes courants à accès restreint\n\nLe mode numérique \`600\` donne au propriétaire lecture et écriture sur un fichier. Le mode \`700\` lui donne tous les droits sur un répertoire et refuse l’accès aux autres. Ce sont des bases courantes pour une clé SSH privée et son répertoire. Un fichier web public peut nécessiter des droits de lecture plus larges, contrairement aux fichiers contenant des secrets.\n\nModifiez explicitement un fichier ou répertoire :\n\n\`\`\`sh\nchmod 600 /chemin/secret.conf\nchmod 700 /home/alice/.ssh\nchown alice:alice /chemin/secret.conf\n\`\`\`\n\nRemplacez chemins et comptes par les valeurs voulues. Évitez les changements récursifs sur de larges chemins système : ils peuvent casser des services ou affaiblir les protections.\n\n## Lire la notation des permissions
:::cards
- Lecture (r = 4) | Lire un fichier ; lister un dossier
- Écriture (w = 2) | Modifier un fichier ou les entrées du dossier
- Exécution (x = 1) | Lancer un fichier ; traverser un dossier
:::


Dans une liste telle que -rw-r-----, le premier caractère indique le type de fichier ; les trois positions suivantes correspondent au propriétaire, puis au groupe, puis aux autres utilisateurs. r signifie lecture, w écriture et x exécution. Pour un répertoire, x permet aussi de le traverser pour atteindre son contenu. Un utilisateur peut avoir besoin du droit x sur chaque dossier parent pour accéder à un fichier, même si ce fichier autorise la lecture.

Les modes numériques additionnent trois valeurs pour chaque groupe : lecture vaut 4, écriture 2 et exécution 1. Ainsi 600 donne lecture et écriture au propriétaire seulement ; 700 donne tous les droits au propriétaire d’un répertoire et aucun aux autres ; 640 donne lecture/écriture au propriétaire et lecture au groupe. Choisissez selon les comptes réellement utilisés par le service, sans recopier un nombre à l’aveugle.

Après modification, inspectez le résultat avec ls -l et vérifiez que le service fonctionne sous le compte prévu. N’utilisez pas chmod -R 777 comme solution : cela accorde un accès large et peut exposer ou modifier des fichiers. N’appliquez pas chmod ou chown récursivement à des répertoires système sans comprendre tous les fichiers concernés et disposer d’un moyen de récupération.

## Comptes de service applicatif\n\nAttribuez à chaque service un compte dédié et uniquement l’accès aux répertoires nécessaires. Évitez d’exécuter les applications en root. Vérifiez les permissions du fichier et de ses répertoires parents : un fichier restreint peut rester exposé si son dossier autorise un accès inattendu. Après modification, testez que le service lit sa configuration nécessaire sans pouvoir modifier des fichiers sans rapport.`,
  },
];

export function getPublishedArticles(language: "en" | "fr" = "en") {
  const existingPageDuplicates = new Set(["vps-network-path", "choosing-a-vps-image"]);
  return articles.filter((article) => article.language === language && !existingPageDuplicates.has(article.slug));
}
