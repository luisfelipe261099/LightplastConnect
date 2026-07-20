/* LightPlast Connect — utilidades compartilhadas dos painéis administrativos */

const $ = (s, el = document) => el.querySelector(s);

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span>${msg}</span>`;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

const fmtBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/* Barras horizontais de magnitude (série única, tom da marca) */
function renderHBars(el, rows, { unit = "", highlightFirst = false } = {}) {
  const max = Math.max(...rows.map((r) => r.value));
  el.innerHTML = rows.map((r, i) => `
    <div class="hbar-row ${highlightFirst && i === 0 ? "hl" : ""}">
      <span class="hb-label" title="${r.label}">${r.label}</span>
      <span class="hbar-track"><i style="width:${Math.round((r.value / max) * 100)}%;"></i></span>
      <span class="hb-val">${r.display ?? r.value + unit}</span>
    </div>`).join("");
}
