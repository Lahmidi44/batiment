async function loadData() {
  const response = await fetch("./data/parametres_kenitra.json");
  if (!response.ok) {
    throw new Error("Impossible de charger les parametres.");
  }
  return response.json();
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function riskBadgeClass(level) {
  if (level === "FAIBLE") return "low";
  if (level === "ELEVEE") return "high";
  return "very-high";
}

function renderDashboard(data) {
  const { site, risques, points_mat } = data;

  setText("ville", site.ville);
  setText("coord", `${site.latitude.toFixed(5)}, ${site.longitude.toFixed(5)}`);
  setText("surface", `${site.surface_m2} m2`);
  setText("alt", `${site.altitude_moy_m} m`);
  setText("pente", `${site.pente_moy_deg} deg`);
  setText("climat", `${site.temp_moy_c} C / ${site.precip_ann_mm} mm`);

  const riskConfig = [
    ["inondation", risques.inondation],
    ["glissement", risques.glissement],
    ["sismique", risques.sismique]
  ];

  riskConfig.forEach(([key, risk]) => {
    setText(`${key}-score`, `${risk.score}/10`);
    const badge = document.getElementById(`${key}-niveau`);
    if (badge) {
      badge.textContent = risk.niveau;
      badge.className = `badge ${riskBadgeClass(risk.niveau)}`;
    }
  });

  const tbody = document.getElementById("points-body");
  tbody.innerHTML = points_mat
    .map(
      (p) =>
        `<tr><td>MAT ${p.id}</td><td>${p.x.toFixed(2)}</td><td>${p.y.toFixed(2)}</td><td>${p.lat.toFixed(6)}</td><td>${p.lon.toFixed(6)}</td><td>${p.alt_m.toFixed(1)}</td></tr>`
    )
    .join("");

  renderCharts(site, risques, points_mat);
}

function renderCharts(site, risques, points_mat) {
  const ctxRisk = document.getElementById("riskChart");
  const ctxClimate = document.getElementById("climateChart");
  const ctxAlt = document.getElementById("altChart");

  new Chart(ctxRisk, {
    type: "bar",
    data: {
      labels: ["Inondation", "Glissement", "Sismique"],
      datasets: [{
        label: "Score de risque",
        data: [risques.inondation.score, risques.glissement.score, risques.sismique.score],
        backgroundColor: ["#22c55e", "#16a34a", "#dc2626"]
      }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true, max: 10 } } }
  });

  new Chart(ctxClimate, {
    type: "bar",
    data: {
      labels: ["Precipitation annuelle", "Temperature moyenne", "Vent max"],
      datasets: [{
        label: "Indicateurs climatiques",
        data: [site.precip_ann_mm, site.temp_moy_c, site.vent_max_kmh],
        backgroundColor: ["#0ea5e9", "#f59e0b", "#94a3b8"]
      }]
    },
    options: { responsive: true }
  });

  new Chart(ctxAlt, {
    type: "line",
    data: {
      labels: points_mat.map((p) => `MAT ${p.id}`),
      datasets: [{
        label: "Profil altimetrique (m)",
        data: points_mat.map((p) => p.alt_m),
        borderColor: "#0f766e",
        backgroundColor: "rgba(15,118,110,0.15)",
        fill: true,
        tension: 0.22
      }]
    },
    options: { responsive: true }
  });
}

loadData().then(renderDashboard).catch((error) => {
  const container = document.getElementById("load-error");
  if (container) {
    container.textContent = `Erreur: ${error.message}`;
  }
});
