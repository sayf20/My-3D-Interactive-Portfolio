# Guide pas à pas : remplacer 8 touches du clavier 3D dans Spline

Ce dossier contient les 8 nouveaux logos (PNG 512×512, fond transparent) et
ce guide. L'objectif : remplacer 8 touches du clavier par de nouvelles
compétences, puis exporter un nouveau fichier `skills-keyboard.spline`.

## Comment le site lit le clavier

- Chaque touche est un objet Spline dont le **nom** (par exemple `wordpress`)
  est aussi le champ `name` dans `src/data/constants.ts`.
- Quand la souris survole ou clique une touche, le site lit le nom de l'objet
  et affiche le `label` et la description correspondants (variables Spline
  `heading` et `desc`).
- Donc, pour qu'une nouvelle touche fonctionne, il suffit que **le nom de
  l'objet Spline soit exactement le nouveau `name`** (minuscules, sans espace,
  sans accent).

Ne renommez **pas** les objets techniques suivants, le site en a besoin :
`keyboard`, `keycap`, `keycap-desktop`, `keycap-mobile`, `body`, `platform`,
`text-desktop`, `text-desktop-dark`, `text-mobile`, `text-mobile-dark`.

## Tableau des échanges

| Touche à ouvrir (nom actuel) | Nouveau nom à donner | Fichier PNG à utiliser | Couleur conseillée pour la touche |
|---|---|---|---|
| `wordpress` | `pytorch` | `pytorch.png` | blanc ou gris clair (logo orange) |
| `firebase` | `scikit` | `scikit-learn.png` | blanc ou bleu foncé (logo orange/bleu) |
| `mongodb` | `pandas` | `pandas.png` | blanc (logo bleu marine + rose) |
| `express` | `fastapi` | `fastapi.png` | blanc (logo vert d'eau) |
| `npm` | `kubernetes` | `kubernetes.png` | blanc (logo bleu) |
| `vercel` | `terraform` | `terraform.png` | blanc (logo violet) |
| `css` | `owasp` | `owasp.png` (noir) ou `owasp-blanc.png` (blanc) | touche claire avec `owasp.png`, touche sombre avec `owasp-blanc.png` |
| `html` | `grafana` | `grafana.png` | blanc (logo orange) |

Les 8 PNG ont une marge de 44 px autour du logo pour ne pas toucher les bords
de la touche.

## Étapes dans Spline (à répéter pour chacune des 8 touches)

1. **Ouvrir le projet** du clavier dans l'application Spline (celui qui a
   servi à exporter `public/assets/skills-keyboard.spline`).
2. **Trouver la touche** : dans le panneau de gauche (liste des calques),
   utilisez la loupe / le champ de recherche et tapez le nom actuel, par
   exemple `wordpress`. Cliquez sur l'objet pour le sélectionner. Il se met en
   surbrillance dans la scène 3D.
3. **Remplacer l'image du logo** : dans le panneau de droite, ouvrez la
   section **Material** (matériau). Le logo est un calque de type **Image**
   (ou **Texture**) dans la liste des calques du matériau. Cliquez sur la
   vignette de l'image, puis choisissez **Replace / Upload** et sélectionnez le
   PNG correspondant dans ce dossier (`spline-assets`). Si le logo semble trop
   grand ou décalé, ajustez les réglages **Scale** et **Offset** du calque
   Image jusqu'à ce qu'il soit centré.
   - Si la touche est faite de plusieurs objets (par exemple un groupe avec le
     corps de la touche et une face séparée qui porte le logo), l'image est
     sur l'objet enfant qui a le calque Image. C'est le **nom du groupe / de
     l'objet qui reçoit les événements souris** qu'il faut renommer à l'étape 5
     (voir l'onglet **Events**).
4. **(Facultatif) Changer la couleur de la touche** : toujours dans Material,
   le calque **Color** contrôle la couleur du plastique. Utilisez la colonne
   « Couleur conseillée » du tableau pour garder le logo lisible.
5. **Renommer l'objet** : dans le panneau de gauche, double-cliquez sur le nom
   de l'objet (ou sélectionnez-le et appuyez sur Entrée), tapez le **nouveau
   nom** exactement comme dans le tableau (par exemple `pytorch`), puis validez.
   Vérifiez qu'il n'y a ni majuscule, ni espace, ni accent.
6. **Vérifier les événements** : l'objet sélectionné, ouvrez l'onglet
   **Events** du panneau de droite. Les événements **Mouse Hover** et
   **Mouse Down** (ou équivalents) doivent toujours être présents : le
   renommage ne les supprime pas, mais vérifiez qu'ils sont bien là.
7. Passez à la touche suivante du tableau.

## Exporter le nouveau fichier

1. Une fois les 8 touches faites, ouvrez le menu **Export** (en haut à droite).
2. Choisissez l'export **Code** (celui qui produit le fichier chargé par le
   site, extension `.splinecode`), puis **Download** pour récupérer le fichier
   localement (ne choisissez pas l'export image/vidéo).
3. Renommez le fichier téléchargé en `skills-keyboard.spline` et remplacez
   `public/assets/skills-keyboard.spline` dans le dépôt (gardez une copie de
   l'ancien fichier au cas où).
4. Prévenez-moi : j'activerai alors les 8 nouvelles entrées dans
   `src/data/constants.ts` (bloc `UPCOMING_SKILLS`, déjà prêt), je retirerai
   les 8 anciennes, et je vérifierai touche par touche que la bonne description
   s'affiche.

## En cas de doute

- Une touche qui n'affiche rien au survol : son nom d'objet ne correspond pas
  au `name` dans `constants.ts` (faute de frappe, majuscule, espace).
- Une touche qui affiche l'ancienne description : l'objet n'a pas été renommé.
- Le clavier ne s'affiche plus du tout : le fichier exporté n'est pas au bon
  endroit ou n'a pas le bon nom (`public/assets/skills-keyboard.spline`).
