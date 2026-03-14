# Wowpti

**Optimisation de personnages World of Warcraft — open source**

Wowpti est un logiciel open source qui permet aux joueurs de World of Warcraft d'obtenir une optimisation idéale de leurs personnages.

🔗 [wowpti.fr](https://www.wowpti.fr) · 📦 [GitHub](https://github.com/PierreAND/ProjectPersoWow) · 💬 [Discord](https://discord.gg/tKmTR73B)

---

## Présentation

Wowpti aide les joueurs à maximiser les performances de leurs personnages en analysant et en recommandant les meilleures configurations possibles (stuff, talents, stats…). L'objectif : rendre l'optimisation accessible à tous, du joueur casual au mythic raider.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | **Angular** |
| Backend | **NestJS** |
| ORM / Base de données | **Prisma** |
| Conteneurisation | **Docker** |

---

## Infrastructure & Hébergement

Le projet est auto-hébergé sur un **NAS domestique** avec une architecture réseau complète :

- **Docker** — chaque service tourne dans son propre conteneur
- **Nginx** — reverse proxy avec redirection vers le conteneur frontend
- **Traefik** — gestion automatique des certificats SSL (Let's Encrypt)
- **OVH** — nom de domaine personnalisé avec enregistrement DNS de type A pointant vers l'IP publique du routeur
- **DynHost** — mise à jour automatique de l'IP en cas de changement (IP dynamique)

```
Internet
  │
  ▼
Routeur (IP publique / DynHost OVH)
  │
  ▼
NAS domestique
  ├── Traefik (SSL automatique)
  ├── Nginx (reverse proxy)
  ├── Frontend Angular (conteneur Docker)
  └── Backend NestJS + Prisma (conteneur Docker)
```

---

## Prérequis

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) et Docker Compose
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Installation

```bash
# Cloner le repo
git clone https://github.com/PierreAND/ProjectPersoWow.git
cd ProjectPersoWow
```

### Avec Docker (recommandé)

```bash
docker compose up -d
```

### En local (développement)

```bash
# Backend
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev

# Frontend
cd frontend
npm install
ng serve
```

---

## Fonctionnalités

- **Analyse de personnage** — import et évaluation de la configuration actuelle
- **Recommandations d'optimisation** — suggestions de stuff, stats et talents
- **Open source** — contributions bienvenues de toute la communauté WoW

---

## Contribuer

Les contributions sont les bienvenues ! Rejoins le [Discord](https://discord.gg/tKmTR73B) pour discuter du projet, ou ouvre directement une issue / pull request sur le [dépôt GitHub](https://github.com/PierreAND/ProjectPersoWow).

---

## Licence

Ce projet est open source. Consultez le fichier `LICENSE` pour plus de détails.
