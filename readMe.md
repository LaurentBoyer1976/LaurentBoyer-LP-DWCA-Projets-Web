# Projet TPs — Laurent Boyer (LP-DWCA)

Ce dépôt contient les travaux pratiques (TP) réalisés pour les UE 5.2 (HTML/CSS/JS) et UE 6.1 (PHP/BD). Ce README explique l'organisation du projet, la façon dont les styles sont centralisés et comment tester rapidement les pages locales.

## Arborescence importante

- `index.html` — page d'accueil principale (navigation vers S1 / S2)
- `style.css`, `homesStyle.css` — importés (compatibilité) ; les vrais styles sont maintenant dans `styles/`
- `styles/` — dossier de styles consolidés :
- `common.css` — variables CSS, imports Google Fonts, reset et règles partagées (body background, header title, layout flex pour footer)
- `style.css` — styles spécifiques à `index.html` (header, nav, .tpSection pour la page d'accueil)
- `homesStyle.css` — styles spécifiques aux pages `home_S1.html` et `home_S2.html` (grille, cartes, dl, hover)
- `S1-UE52-HTML-CSS-JS/` — TPs du 1er semestre (HTML/CSS/JS)
- `S2-UE61-PHP-DB/` — TPs du 2nd semestre (PHP / BD)

## Changements récents appliqués

- Consolidation des styles : les règles communes ont été extraites dans `styles/common.css` pour éviter les doublons et faciliter la maintenance.
- Règles spécifiques et apparence d'origine restaurées dans `styles/style.css` et `styles/homesStyle.css`.
- Les pages HTML principales (`index.html`, `S1-UE52-HTML-CSS-JS/home_S1.html`, `S2-UE61-PHP-DB/home_S2.html`) ont été mises à jour pour pointer vers les nouveaux chemins `./styles/...`.
- Compatibilité : les anciens fichiers à la racine (`style.css`, `homesStyle.css`) redirigent maintenant vers les fichiers consolidés pour éviter les cassures.
- Footer collé au bas : stratégie body flex + `main { flex: 1 0 auto }` et `.footer { margin-top: auto }` pour garantir que le footer reste en bas lorsqu'il y a peu de contenu.

## Comment tester localement

1. Ouvre le fichier `index.html` dans ton navigateur (double‑clic ou via l'éditeur).
2. Recharge la page (Ctrl+F5) pour forcer le cache CSS.
3. Vérifie ces pages :

- `index.html`
- `S1-UE52-HTML-CSS-JS/home_S1.html`
- `S2-UE61-PHP-DB/home_S2.html`

Si un rendu ne correspond pas à ce que tu attends :

- Ouvre les DevTools (F12) → onglet Elements → sélectionne l'élément et regarde le panneau Styles / Box Model.
- Vérifie que la feuille chargée est bien `styles/style.css` ou `styles/homesStyle.css` (onglet Network ou élément `<link>` dans le head).

## Bonnes pratiques et recommandations

- Garder les variables de palette et les imports de polices dans `styles/common.css`.
- Pour les nouvelles pages, ajouter uniquement les règles spécifiques dans `styles/style.css` ou `styles/homesStyle.css` selon l'usage ; éviter les duplications.
- Si tu veux retirer complètement les anciens fichiers racine (`style.css`, `homesStyle.css`), je recommande de le faire seulement après vérification que tous les HTML référencent bien `styles/`.

## Prochaines actions possibles (je peux m'en charger)

- Supprimer définitivement les fichiers CSS racine et mettre à jour tous les liens HTML encore en référence.
- Extraire plus de règles communes (par ex. `.tpSection` hover/box-shadow) dans `common.css` pour DRY.
- Générer un petit script de vérification qui liste tous les fichiers `.html` et signale ceux qui pointent encore vers les anciens chemins.

Si tu veux que j'exécute l'une des actions ci‑dessus, dis laquelle et je la fais directement.

---
Fait le 12 décembre 2025 — je peux compléter ce README avec un historique Git ou un changelog si tu veux garder un journal des modifications.

## Présentation détaillée du site et navigation

Le site sert de portail pour consulter les TPs du 1er et 2ème semestre. Voici comment naviguer :

- Page d'accueil : `index.html` — présente des cartes renvoyant vers les deux unités :
- UE 5.2 (HTML / CSS / JS) → `S1-UE52-HTML-CSS-JS/home_S1.html`
- UE 6.1 (PHP / BD) → `S2-UE61-PHP-DB/home_S2.html`

- À l'intérieur des répertoires :
  - `S1-UE52-HTML-CSS-JS/` contient plusieurs sections :
    - `TPsHTML-CSS/` : TP1 → TP5 (pages HTML et exemples)
    - `TP_JS/` : mini-projet ToDoList (index + Data/ JSON exemples + étapes)
    - `Html/` et `Style/` : variantes et fichiers de style pour les exercices
  - `S2-UE61-PHP-DB/` : pages et ressources pour le second semestre (PHP, bases de données). Le contenu sera complété au fur et à mesure des TPs.

## Liste des TPs présents (aperçu)

S1 — HTML / CSS / JS (dossier `S1-UE52-HTML-CSS-JS/`)

- TP1_CV.html — CV en HTML / mise en forme de base
- TP2_CV.html — mise en page sans Flex (exercices inline/block)
- TP3_SemanticLayout.html — organisation sémantique (balises HTML5)
- TP4_QuizForm.html — formulaire HTML5 (exercices validation)
- TP5_Grid.html — mise en page avec CSS Grid
- TP_JS/ (mini-projet ToDoList)
  - `index.html` (application demo)
  - `Data/` — jeux de données JSON utilisés par les exercices
  - `Etapes/` — étapes et fichiers d'exemple

S2 — PHP / Base de données (dossier `S2-UE61-PHP-DB/`)

- `home_S2.html` — page d'accueil S2 (ressources et liens vers travaux PHP/BD)

Remarque : certains TPs ont des iframes qui pointent vers des pages locales ou des sites hébergés (voir TP listés plus haut).

## Styles et apparence

- Tous les styles sont maintenant centralisés dans le dossier `styles/` :
  - `styles/common.css` — variables CSS, imports Google Fonts, reset et règles communes
  - `styles/style.css` — règles spécifiques de la page d'accueil (`index.html`)
  - `styles/homesStyle.css` — règles spécifiques aux pages `home_S1.html` et `home_S2.html`

- Les anciens fichiers `style.css` et `homesStyle.css` à la racine importent maintenant les fichiers consolidés ; ils sont conservés pour rétrocompatibilité.

## Comment naviguer et tester localement

1. Ouvre `index.html` dans ton navigateur (double‑clic ou via l'éditeur).
2. Pour forcer la prise en compte des CSS récemment modifiés, fais un rechargement forcé :

   - Windows / Linux: Ctrl + F5
   - macOS: Cmd + Shift + R

3. Pages à vérifier :

   - `index.html` — page d'accueil
   - `S1-UE52-HTML-CSS-JS/home_S1.html` — TPs HTML/CSS/JS
   - `S2-UE61-PHP-DB/home_S2.html` — pages S2

4. Si un style n'apparaît pas comme attendu : ouvre les DevTools (F12) → onglet Network pour vérifier que la feuille `styles/*.css` est chargée, et inspecte l'élément pour voir quelles règles s'appliquent.
