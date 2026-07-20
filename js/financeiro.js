/* LightPlast Connect — Painel Financeiro (dados fictícios de demonstração) */

const TITLES = [
  { client: "Distribuidora Exemplo LTDA", nf: "NF-e 000112351 · 1/2", venc: "28/07/2026", valor: 624.35, status: "Em dia", st: "st-entregue" },
  { client: "Supermercados Boa Vista", nf: "NF-e 000112349", venc: "22/07/2026", valor: 6180.0, status: "Vence em 2d", st: "st-separacao" },
  { client: "Hospital Santa Clara", nf: "NF-e 000112347", venc: "20/07/2026", valor: 5240.9, status: "Vence hoje", st: "st-aberto" },
  { client: "Rede Farma Mais", nf: "NF-e 000112322", venc: "12/07/2026", valor: 2130.4, status: "Vencido 8d", st: "st-cancelado" },
  { client: "Transportadora Rota Sul", nf: "NF-e 000112298", venc: "04/07/2026", valor: 1876.4, status: "Vencido 16d", st: "st-cancelado" },
];

$("#titles-table").innerHTML = `
  <thead><tr><th>Cliente</th><th>Título</th><th>Vencimento</th><th>Valor</th><th>Status</th><th></th></tr></thead>
  <tbody>${TITLES.map((t, i) => `
    <tr>
      <td><b>${t.client}</b></td>
      <td><small style="display:inline;">${t.nf}</small></td>
      <td>${t.venc}</td>
      <td class="num">${fmtBRL(t.valor)}</td>
      <td><span class="status-pill ${t.st}">${t.status}</span></td>
      <td class="num" style="white-space:nowrap;">
        <button class="doc-act" style="display:inline-grid;" onclick="toast('2ª via do boleto reenviada para ${t.client} 📄')" title="Reenviar 2ª via">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        </button>
        ${t.st === "st-cancelado" ? `
        <button class="doc-act" style="display:inline-grid;background:var(--red-bg);color:var(--red);" onclick="toast('Cobrança amigável enviada por push + WhatsApp para ${t.client} 🔔')" title="Enviar cobrança">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M10.3 21a2 2 0 0 0 3.4 0"/></svg>
        </button>` : ""}
      </td>
    </tr>`).join("")}</tbody>`;

/* Recebimentos por forma — magnitude, série única */
renderHBars($("#payment-chart"), [
  { label: "Boleto bancário", value: 52, display: "52%" },
  { label: "PIX (portal)", value: 38, display: "38%" },
  { label: "Transferência", value: 10, display: "10%" },
], { highlightFirst: false });

/* Limites de crédito */
const CREDITS = [
  { client: "Rede Farma Mais", used: 92, limit: "R$ 8 mil", warn: true },
  { client: "Supermercados Boa Vista", used: 74, limit: "R$ 30 mil", warn: false },
  { client: "Hospital Santa Clara", used: 61, limit: "R$ 25 mil", warn: false },
  { client: "Distribuidora Exemplo LTDA", used: 35, limit: "R$ 25 mil", warn: false },
];
$("#credit-list").innerHTML = CREDITS.map((c) => `
  <div class="credit-row">
    <span class="cr-name">${c.client}<small>${c.used}% de ${c.limit}</small></span>
    <button class="btn btn-ghost btn-sm cr-action" onclick="toast('Proposta de novo limite para ${c.client} enviada para aprovação ✅')">Ajustar</button>
    <span class="hbar-track"><i style="width:${c.used}%;${c.warn ? "background:var(--amber);" : ""}"></i></span>
  </div>`).join("");
