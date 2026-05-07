# Portfolio Web — Laurent Boyer
## Travaux Pratiques DWCA (UE 5.2 & 6.1)

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)](https://www.php.net/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)

---

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Structure du projet](#structure-du-projet)
- [Accès rapide](#accès-rapide)
- [Semestre 1 — HTML/CSS/JS](#semestre-1--htmlcssjs)
- [Semestre 2 — PHP/Base de données](#semestre-2--phpbase-de-données)
- [Installation & Utilisation](#installation--utilisation)
- [Notes techniques](#notes-techniques)

---

## 👋 Vue d'ensemble

Ce portfolio regroupe l'ensemble des travaux pratiques réalisés dans le cadre de la formation **Développeur Web "Création d'Applications"** (DWCA), couvrant deux semestres :

- **S1 (UE 5.2)** : Fondamentaux web — HTML5, CSS3, JavaScript vanilla
- **S2 (UE 6.1)** : Développement backend et bases de données — PHP, SQL, React

Chaque TP progresse en complexité et intègre les bonnes pratiques du développement web.

---

## 🗂️ Structure du projet

```
LaurentBoyer-LP-DWCA-Projets-Web/
├── index.html                     # Page d'accueil principale
├── readMe.md                      # Ce fichier
├── styles/
│   ├── styles.css                # Styles unifiés (mobile-first)
│   └── variables.css             # Design tokens (couleurs, espacements, etc.)
│
├── assets/                        # Ressources partagées
│   ├── docs/                      # Documentation PDF des TPs
│   ├── icons/                     # Icônes du portfolio
│   ├── images/                    # Captures d'écran des TPs
│   └── svg/                       # Diagrammes SVG
│
├── S1-UE52-HTML-CSS-JS/          # 🎓 Semestre 1
│   ├── home_S1.html              # Accueil S1
│   │
│   ├── TPsHTML-CSS/               # Exercices fondamentaux
│   │   ├── TP1_CV.html           # Structure HTML5 (CV)
│   │   ├── TP2_CV.html           # Mise en page (inline/block)
│   │   ├── TP3_SemanticLayout.html # HTML5 sémantique
│   │   ├── TP4_QuizForm.html     # Formulaires HTML5
│   │   └── TP5_Grid.html         # CSS Grid
│   │
│   ├── TP_IntegrationPageSerie/   # Intégration maquette (MonCiné)
│   │   ├── allSeries.html        # Page principale
│   │   ├── HTML/Pages/oneSerie.html # Détail série
│   │   ├── Assets/               # Images, icônes
│   │   ├── Styles/Css/           # Responsive (mobile/laptop/desktop)
│   │   └── scripts/rating.js     # Système de notation
│   │
│   ├── TP_JS/                     # Mini-projet ToDoList (JS)
│   │   ├── index.html            # Application demo
│   │   ├── README.md             # Documentation complète
│   │   ├── GUIDE_UTILISATION.md  # Guide utilisateur
│   │   ├── Data/                 # Fichiers JSON (données, patterns)
│   │   ├── Etapes/               # Fichiers étape par étape
│   │   └── Html/, Style/         # Structure et styles
│   │
│   └── TutoHTMLMedia/             # Tutoriel multimédia (Astro)
│       ├── src/                  # Composants et pages
│       └── public/               # Ressources statiques
│
└── S2-UE61-PHP-DB/               # 🎓 Semestre 2
    ├── home_S2.html              # Accueil S2
    │
    └── TP_UE_6_3_1/
        ├── Phase_1/              # Fondamentaux React
        │   └── src/
        │
        └── Phase_2/              # Projet React avancé
            ├── index.html
            ├── package.json      # Dépendances (React, Vite)
            ├── vite.config.js
            └── src/              # Composants React
```

---

## 🚀 Accès rapide

### Pages d'accueil
| Page                  | Lien                                                                     | Description                  |
|-----------------------|--------------------------------------------------------------------------|------------------------------|
| **Accueil principal** | [`index.html`](./index.html)                                             | Portail vers S1 et S2        |
| **S1 — HTML/CSS/JS**  | [`S1-UE52-HTML-CSS-JS/home_S1.html`](./S1-UE52-HTML-CSS-JS/home_S1.html) | Tous les TPs de fondamentaux |
| **S2 — PHP/BD**       | [`S2-UE61-PHP-DB/home_S2.html`](./S2-UE61-PHP-DB/home_S2.html)           | Projets backend et React     |

---

## 📚 Semestre 1 — HTML/CSS/JS

### Exercices fondamentaux (`TPsHTML-CSS/`)

| #       | TP                                                                           | Objectifs                                                          | Technos      |
|---------|------------------------------------------------------------------------------|--------------------------------------------------------------------|--------------|
| **TP1** | [CV Structure](./S1-UE52-HTML-CSS-JS/TPsHTML-CSS/TP1_CV.html)                | Structuration sémantique d'un CV                                   | HTML5        |
| **TP2** | [CV Mise en page](./S1-UE52-HTML-CSS-JS/TPsHTML-CSS/TP2_CV.html)             | Display (inline, block, inline-block)                              | HTML5 / CSS3 |
| **TP3** | [Semantic Layout](./S1-UE52-HTML-CSS-JS/TPsHTML-CSS/TP3_SemanticLayout.html) | Balises HTML5 sémantiques (`<header>`, `<nav>`, `<article>`, etc.) | HTML5        |
| **TP4** | [Quiz Form](./S1-UE52-HTML-CSS-JS/TPsHTML-CSS/TP4_QuizForm.html)             | Formulaires HTML5, validation client                               | HTML5 / CSS3 |
| **TP5** | [CSS Grid](./S1-UE52-HTML-CSS-JS/TPsHTML-CSS/TP5_Grid.html)                  | Mise en page responsive avec Grid                                  | CSS3 Grid    |

### Intégration Maquette — MonCiné (`TP_IntegrationPageSerie/`)

**Projet pratique complet** : Intégration d'une maquette Figma en site responsive

- **Pages** : Liste des séries + Détail série (avec système de notation)
- **Design responsive** : Mobile, Tablette, Laptop, Desktop
- **Fonctionnalités** : 
  - Affichage dynamique des données
  - Système de note (étoiles)
  - Navigation fluide

**Fichiers clés** :
- [`allSeries.html`](./S1-UE52-HTML-CSS-JS/TP_IntegrationPageSerie/allSeries.html) — Page d'accueil
- [`Styles/Css/`](./S1-UE52-HTML-CSS-JS/TP_IntegrationPageSerie/Styles/Css/) — CSS responsive (mobile.css, laptop.css, desktop.css)
- [`scripts/rating.js`](./S1-UE52-HTML-CSS-JS/TP_IntegrationPageSerie/scripts/rating.js) — Logique de notation

---

### Mini-Projet : ToDoList (`TP_JS/`)

**Application complète en JavaScript vanilla** — Gestion des tâches avancée

#### Fonctionnalités
✅ Créer, modifier, archiver des tâches  
✅ Sous-tâches et priorités  
✅ Persistance via `localStorage`  
✅ Affichage dynamique du statut global  

#### Documentation
- 📖 [README complet](./S1-UE52-HTML-CSS-JS/TP_JS/README.md) — Architecture et API
- 📘 [Guide d'utilisation](./S1-UE52-HTML-CSS-JS/TP_JS/GUIDE_UTILISATION.md) — Comment utiliser l'app
- 📁 [`Data/`](./S1-UE52-HTML-CSS-JS/TP_JS/Data/) — Jeux de données JSON pour les tests
- 📊 [`Etapes/`](./S1-UE52-HTML-CSS-JS/TP_JS/Etapes/) — Progression étape par étape

#### Fichiers principaux
- [`index.html`](./S1-UE52-HTML-CSS-JS/TP_JS/index.html) — Application démo interactive
- [`Html/`](./S1-UE52-HTML-CSS-JS/TP_JS/Html/) — Templates HTML
- [`Style/`](./S1-UE52-HTML-CSS-JS/TP_JS/Style/) — Styles CSS

**Données disponibles** :
- `tasksData.json` — Exemple de liste de tâches
- `taskProgression.json` — État d'avancement
- `subTask.json` — Structure des sous-tâches
- `skills_evaluation.json` — Évaluation des compétences

---

### Tutoriel Multimédia (`TutoHTMLMedia/`)

**Site statique Astro** — Audio, vidéo, images responsives

- Framework : **Astro** (SSG rapide)
- Contenu : Tutoriels multimédia avec ressources embarquées
- Structure : Composants réutilisables

---

## 🐘 Semestre 2 — PHP/Base de données

### Phase 1 : Fondamentaux React

Premiers projets en React avec composants simples et gestion d'état.

📁 [`Phase_1/`](S2-UE61-PHP-DB/TP_UE_6_3_1/Phase_1/)

---

### Phase 2 : Projet React Avancé

Projet complet avec React, Vite, composants composés et gestion d'état sophistiquée.

📁 [`Phase_2/`](S2-UE61-PHP-DB/TP_UE_6_3_1/Phase_2/)

**Stack** :
- ⚛️ React
- ⚡ Vite (bundler)
- 📦 Node.js + npm

**Démarrage** :
```bash
cd S2-UE61-PHP-DB/TP_UE_6_3_1/Phase_2
npm install
npm run dev
```

---

## 🛠️ Installation & Utilisation

### Prérequis
- **Navigateur moderne** (Chrome, Firefox, Safari, Edge)
- **Node.js 16+** (pour les projets Astro/Vite/React)

### Navigation locale

#### Option 1 : Ouvrir directement dans le navigateur
```powershell
# Via PowerShell (Windows)
start index.html
# ou
Invoke-Item .\index.html
```

#### Option 2 : Serveur local (recommandé pour PHP)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server .
```

Puis accédez à `http://localhost:8000`

#### Option 3 : Projets Vite/Astro
```bash
# Astro (TutoHTMLMedia)
cd S1-UE52-HTML-CSS-JS/TutoHTMLMedia
npm install && npm run dev

# React (Phase_2)
cd S2-UE61-PHP-DB/TP_UE_6_3_1/Phase_2
npm install && npm run dev
```

---

## 🎨 Notes techniques

### Architecture CSS
- **Approche** : Mobile-first avec `@media (min-width: ...)`
- **Variables** : Tous les design tokens dans [`styles/variables.css`](./styles/variables.css)
- **Breakpoints** :
  - 📱 `480px` — Grands mobiles
  - 📟 `768px` — Tablettes
  - 💻 `1024px` — Desktop
  - 🖥️ `1280px` — Large desktop

### Design Tokens
- **Palette** : 5 couleurs accentuées (`--c1` à `--c5`)
- **Typographie** : 3 familles (Display, Body, Serif)
- **Espacements** : Échelle de 12 valeurs (`--sp-1` à `--sp-12`)
- **Ombres** : Du subtil au zoom

### Accessibilité
- ✅ Focus rings explicites (`outline`, `outline-offset`)
- ✅ Support `prefers-reduced-motion` (animations désactivées)
- ✅ Contraste des couleurs conforme WCAG AA

---

## 📖 Documentation complète

| Document                                                                                             | Contenu                             |
|------------------------------------------------------------------------------------------------------|-------------------------------------|
| [`S1-UE52-HTML-CSS-JS/TP_JS/README.md`](./S1-UE52-HTML-CSS-JS/TP_JS/README.md)                       | Architecture ToDoList + API JS      |
| [`S1-UE52-HTML-CSS-JS/TP_JS/GUIDE_UTILISATION.md`](./S1-UE52-HTML-CSS-JS/TP_JS/GUIDE_UTILISATION.md) | Tutoriel utilisateur ToDoList       |
| PDFs (assets/docs/)                                                                                  | Énoncés des TPs React (Phase 1 & 2) |

---

## 📝 Grille d'évaluation rapide

| Critère               | S1 (HTML/CSS/JS)             | S2 (PHP/React)     |
|-----------------------|------------------------------|--------------------|
| **Sémantique HTML**   | TP1-TP5, MonCiné             | -                  |
| **Responsive Design** | MonCiné, ToDoList            | Phase_2            |
| **JavaScript**        | ToDoList (localStorage, DOM) | -                  |
| **React**             | -                            | Phase_1, Phase_2   |
| **Design System**     | Variables CSS                | Variables CSS      |
| **Accessibilité**     | ✅ Intégrée partout           | ✅ Intégrée partout |

---

## 👤 À propos

**Laurent Boyer** — Développeur Web en formation  
Formation : DWCA (Développeur Web "Création d'Applications")  
Période : Année 2026

---

## 📞 Support

Pour toute question sur la structure ou le contenu :
- Consulter le README spécifique du TP (ex. `TP_JS/README.md`)
- Examiner le code source directement dans les fichiers `.html` et `.js`

---

**Dernière mise à jour** : 23 avril 2026
