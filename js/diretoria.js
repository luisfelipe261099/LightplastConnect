/* LightPlast Connect — Dashboard Executivo (dados fictícios de demonstração) */

/* ---------- Faturamento mensal (colunas, série única) ---------- */
const REVENUE = [
  { m: "Fev", v: 402 }, { m: "Mar", v: 418 }, { m: "Abr", v: 395 },
  { m: "Mai", v: 441 }, { m: "Jun", v: 433 }, { m: "Jul", v: 486 },
];

function renderRevenue() {
  const W = 560, H = 230, padL = 36, padB = 30, padT = 26;
  const plotW = W - padL - 10, plotH = H - padT - padB;
  const maxV = 500;
  const bw = 34, step = plotW / REVENUE.length;

  const grid = [0, 250, 500].map((v) => {
    const y = padT + plotH - (v / maxV) * plotH;
    return `<line class="grid-line" x1="${padL}" y1="${y}" x2="${W - 10}" y2="${y}"/>
            <text class="grid-label" x="${padL - 6}" y="${y + 3}" text-anchor="end">${v}</text>`;
  }).join("");

  const bars = REVENUE.map((d, i) => {
    const h = (d.v / maxV) * plotH;
    const x = padL + i * step + (step - bw) / 2;
    const y = padT + plotH - h;
    const last = i === REVENUE.length - 1;
    return `
      <path class="bar ${last ? "hl" : ""}" data-i="${i}"
        d="M${x} ${y + 4} q0 -4 4 -4 h${bw - 8} q4 0 4 4 v${h - 4} h-${bw} z"/>
      ${last ? `<text class="bar-value" x="${x + bw / 2}" y="${y - 8}">R$ ${d.v} mil</text>` : ""}
      <text class="x-label" x="${x + bw / 2}" y="${H - 8}">${d.m}</text>`;
  }).join("");

  $("#revenue-chart").innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Faturamento mensal de fevereiro a julho, em milhares de reais">${grid}${bars}</svg>
    <div class="chart-tip" id="rev-tip"></div>`;

  const tip = $("#rev-tip");
  document.querySelectorAll("#revenue-chart .bar").forEach((bar) => {
    bar.addEventListener("mousemove", (e) => {
      const d = REVENUE[+bar.dataset.i];
      const box = $("#revenue-chart").getBoundingClientRect();
      tip.innerHTML = `R$ ${d.v} mil<small>${d.m}/2026 · ${d.v >= 486 ? "recorde do ano" : "faturamento"}</small>`;
      tip.style.left = e.clientX - box.left + "px";
      tip.style.top = e.clientY - box.top - 6 + "px";
      tip.classList.add("show");
    });
    bar.addEventListener("mouseleave", () => tip.classList.remove("show"));
  });
}

/* ---------- Vendas por representante ---------- */
renderHBars($("#reps-chart"), [
  { label: "Carlos Mendes", value: 142, display: "R$ 142 mil" },
  { label: "Fernanda Lima", value: 118, display: "R$ 118 mil" },
  { label: "Roberto Alves", value: 96, display: "R$ 96 mil" },
  { label: "Juliana Castro", value: 74, display: "R$ 74 mil" },
  { label: "Outros (4)", value: 56, display: "R$ 56 mil" },
], { highlightFirst: true });

/* ---------- Produtos mais vendidos ---------- */
renderHBars($("#products-chart"), [
  { label: "Saco Preto 100L", value: 28, display: "28%" },
  { label: "Filme Stretch 500mm", value: 21, display: "21%" },
  { label: "Saco Branco 50L", value: 16, display: "16%" },
  { label: "Compostável 100L", value: 12, display: "12%" },
  { label: "Personalizados", value: 9, display: "9%" },
]);

/* ---------- Origem dos pedidos (composição) ----------
   Paleta validada p/ daltonismo (validate_palette.js: ALL CHECKS PASS) */
const CHANNELS = [
  { label: "Portal Connect", pct: 62, color: "#2f7a4a" },
  { label: "Representante", pct: 24, color: "#3272c4" },
  { label: "WhatsApp / telefone", pct: 14, color: "#d99a26" },
];
$("#channels-bar").innerHTML = CHANNELS.map((c) =>
  `<i style="width:${c.pct}%;background:${c.color};" title="${c.label}: ${c.pct}%"></i>`).join("");
$("#channels-legend").innerHTML = CHANNELS.map((c) =>
  `<span><span class="sw" style="background:${c.color};"></span>${c.label} · <b>${c.pct}%</b></span>`).join("");

renderRevenue();
