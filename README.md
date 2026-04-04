# 🗺️ Analyse Géomatique Complète

Notebook Google Colab pour une **étude géomatique complète** d'un site géographique.

## 🚀 Ouvrir dans Google Colab

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Lahmidi44/batiment/blob/main/analyse_geomatique.ipynb)

## 📋 Fonctionnalités

| Module | Description |
|---|---|
| 📍 Carte interactive | Affichage des coordonnées sur carte (OpenStreetMap, Satellite, Topographique) |
| 🌧️ Précipitations | Taux journalier/mensuel, distribution statistique, épisodes extrêmes |
| 💨 Rose des vents | Direction dominante, vitesse, fréquence par secteur |
| 🌡️ Température | Courbes min/moy/max, heatmap saisonnière, statistiques thermiques |
| 🌊 Risque d'inondation | Évaluation multi-critères (précipitations, altitude, pente) |
| 🏔️ Risque de glissement | Analyse des pentes, pluies soutenues, susceptibilité du terrain |
| 🌍 Risque sismique | Données USGS : séismes historiques, magnitude, fréquence |
| 📊 Tableau de bord | Synthèse visuelle de tous les indicateurs |
| 📄 Rapport textuel | Rapport complet avec recommandations |

## 📡 Sources de données (toutes gratuites, sans clé API)

- **[Open-Meteo](https://open-meteo.com/)** – Météo historique (précipitations, température, vent)
- **[OpenTopoData](https://www.opentopodata.org/)** – Altitude SRTM 90 m
- **[USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/)** – Séismes historiques

## 🛠️ Utilisation

1. Cliquez sur le badge **Open in Colab** ci-dessus
2. Dans la cellule **"Définition des coordonnées du site"**, modifiez :
   ```python
   LATITUDE  = 33.5731   # Votre latitude
   LONGITUDE = -7.5898   # Votre longitude
   NOM_SITE  = 'Casablanca, Maroc'  # Nom de votre site
   DATE_DEBUT = '2024-01-01'
   DATE_FIN   = '2024-12-31'
   ```
3. Exécutez toutes les cellules (**Exécution > Tout exécuter**)
4. Les cartes, graphiques et le rapport sont générés automatiquement et proposés en téléchargement

## 📦 Bibliothèques requises

Installées automatiquement dans la première cellule :
`folium`, `requests`, `pandas`, `numpy`, `matplotlib`, `plotly`, `scipy`

## 📁 Fichiers générés

| Fichier | Contenu |
|---|---|
| `carte_site.html` | Carte interactive du site |
| `carte_risques.html` | Carte multicouches des risques naturels |
| `precipitations.png` | Analyse des précipitations |
| `rose_des_vents.png` | Rose des vents |
| `temperatures.png` | Analyse des températures |
| `risque_inondation.png` | Évaluation du risque d'inondation |
| `risque_glissement.png` | Évaluation du risque de glissement |
| `risque_sismique.png` | Évaluation du risque sismique |
| `tableau_de_bord.png` | Tableau de bord de synthèse |
| `rapport_geomatique.txt` | Rapport textuel avec recommandations |
| `donnees_meteo.csv` | Données météo exportées |
| `seismes.csv` | Données sismiques exportées |
