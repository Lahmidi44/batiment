# Plateforme Geomatique - Kenitra

Ce depot contient un site web statique professionnel base sur votre travail geomatique.

## Contenu

- `index.html`: page d'accueil du site (dashboard + carte + figures)
- `analyse_geomatique_kenitra.html`: carte Folium exportee
- `analyse_geomatique_kenitra.ipynb`: notebook Jupyter valide avec cellule "tous les parametres"
- `data/parametres_kenitra.json`: donnees centralisees (site, risques, points MAT)
- `assets/style.css`: design responsive
- `assets/app.js`: logique dashboard + figures (Chart.js)

## Publication GitHub Pages

Le workflow `.github/workflows/static.yml` deploie automatiquement le depot sur GitHub Pages a chaque push sur `main`.

URL attendue apres deploiement:

https://lahmidi44.github.io/batiment/
