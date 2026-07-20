/* LightPlast Connect — Painel Comercial (dados fictícios de demonstração) */

const ACTIONS = [
  {
    id: "a1", type: "Aprovação de pedido", client: "Distribuidora Exemplo LTDA",
    detail: "Pedido #12352 · R$ 140,13 · feito pelo portal há 2h", kind: "pedido",
  },
  {
    id: "a2", type: "Aprovação de pedido", client: "Rede Farma Mais",
    detail: "Pedido #12353 · R$ 2.480,00 · excede limite de crédito em R$ 320", kind: "pedido",
  },
  {
    id: "a3", type: "Orçamento solicitado", client: "Metalúrgica União",
    detail: "800 kg de saco personalizado 2 cores · aguarda proposta desde ontem", kind: "orcamento",
  },
];

function renderActions() {
  $("#approvals").innerHTML = ACTIONS.length ? ACTIONS.map((a) => `
    <div class="approve-row" id="row-${a.id}">
      <span class="order-ico">${a.kind === "pedido"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8zM3.3 8.3L12 13l8.7-4.7M12 13v9"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M9 13h6M9 17h6"/></svg>'}</span>
      <span class="approve-mid">
        <b>${a.type} — ${a.client}</b>
        <small>${a.detail}</small>
      </span>
      <span class="approve-actions">
        <button class="btn-approve" onclick="resolveAction('${a.id}', true)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><path d="M20 6L9 17l-5-5"/></svg>
          ${a.kind === "pedido" ? "Aprovar" : "Enviar proposta"}
        </button>
        <button class="btn-reject" onclick="resolveAction('${a.id}', false)">${a.kind === "pedido" ? "Rejeitar" : "Adiar"}</button>
      </span>
    </div>`).join("")
    : '<div class="kb-empty" style="padding:26px;">Tudo em dia! Nenhuma pendência na sua carteira ✅</div>';
}

function resolveAction(id, ok) {
  const a = ACTIONS.find((x) => x.id === id);
  const row = $(`#row-${id}`);
  row.classList.add("leaving");
  setTimeout(() => {
    ACTIONS.splice(ACTIONS.indexOf(a), 1);
    renderActions();
  }, 300);
  toast(ok
    ? (a.kind === "pedido" ? `Pedido de ${a.client} aprovado — produção notificada ✅` : `Proposta enviada para ${a.client} 📤`)
    : (a.kind === "pedido" ? `Pedido de ${a.client} devolvido com justificativa` : "Orçamento adiado para amanhã"));
}

const CLIENTS = [
  { name: "Distribuidora Exemplo LTDA", city: "Curitiba/PR", last: "há 5 dias", monthly: "R$ 4,8 mil/mês", status: "Ativo", st: "st-entregue", tip: "Sugerir pedido recorrente" },
  { name: "Supermercados Boa Vista", city: "S. J. dos Pinhais/PR", last: "há 3 dias", monthly: "R$ 6,2 mil/mês", status: "Ativo", st: "st-entregue", tip: "Arte pendente de aprovação" },
  { name: "Hospital Santa Clara", city: "Curitiba/PR", last: "há 4 dias", monthly: "R$ 5,1 mil/mês", status: "Contrato", st: "st-separacao", tip: "Renovação na quarta-feira" },
  { name: "Metalúrgica União", city: "Araucária/PR", last: "há 12 dias", monthly: "R$ 3,4 mil/mês", status: "Ativo", st: "st-entregue", tip: "Orçamento em aberto" },
  { name: "Rede Farma Mais", city: "Colombo/PR", last: "há 18 dias", monthly: "R$ 2,1 mil/mês", status: "Atenção", st: "st-aberto", tip: "Compra caiu 30% — agendar contato" },
  { name: "Transportadora Rota Sul", city: "Pinhais/PR", last: "há 41 dias", monthly: "R$ 1,8 mil/mês", status: "Inativo 40d+", st: "st-cancelado", tip: "Oferecer cupom de reativação" },
];

$("#clients-table").innerHTML = `
  <thead><tr><th>Cliente</th><th>Última compra</th><th>Média mensal</th><th>Status</th><th></th></tr></thead>
  <tbody>${CLIENTS.map((c) => `
    <tr>
      <td class="td-main"><b>${c.name}</b><small>${c.city} · ${c.tip}</small></td>
      <td data-label="Última compra">${c.last}</td>
      <td class="num" data-label="Média mensal">${c.monthly}</td>
      <td data-label="Status"><span class="status-pill ${c.st}">${c.status}</span></td>
      <td class="num td-actions">
        <button class="doc-act" style="display:inline-grid;" onclick="toast('Abrindo conversa no WhatsApp com ${c.name} 💬')" title="WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/></svg>
        </button>
      </td>
    </tr>`).join("")}</tbody>`;

renderActions();
