/* ============================================================
   LightPlast Connect — Painel de Produção (demonstração)
   Kanban de fabricação com dados mockados.
   ============================================================ */

const $ = (s, el = document) => el.querySelector(s);

const STAGE_COLORS = { fila: "#8a968f", producao: "#d99a26", impressao: "#6a4fc4", separacao: "#3272c4" };

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span>${msg}</span>`;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------- Stats ---------- */
function renderStats() {
  const inLine = PROD.orders.length;
  const urgent = PROD.orders.filter((o) => o.priority === "urgente").length;
  const kgQueue = PROD.orders.reduce((s, o) => s + o.kg, 0);
  const kgDone = PROD.doneToday.reduce((s, o) => s + o.kg, 0);
  $("#total-fila").textContent = inLine;
  $("#done-kg").textContent = `${kgDone} kg produzidos`;
  $("#prod-stats").innerHTML = `
    <div class="pstat hl"><b>${inLine}</b><span>Pedidos na esteira</span><span class="delta up">▲ 2 novos hoje</span></div>
    <div class="pstat"><b>${urgent}</b><span>Prioridade urgente</span><span class="delta warn">Atenção ao prazo</span></div>
    <div class="pstat"><b>${(kgQueue / 1000).toFixed(1).replace(".", ",")} t</b><span>Volume em fila</span><span class="delta up">Capacidade OK</span></div>
    <div class="pstat"><b>${PROD.doneToday.length}</b><span>Concluídos hoje</span><span class="delta up">▲ ${kgDone} kg</span></div>
    <div class="pstat"><b>96%</b><span>Entregas no prazo (30d)</span><span class="delta up">▲ 3 p.p. vs junho</span></div>`;
}

/* ---------- Kanban ---------- */
function renderKanban() {
  $("#kanban").innerHTML = PROD.stages.map((stage) => {
    const cards = PROD.orders.filter((o) => o.stage === stage.key);
    return `
    <div class="kb-col">
      <div class="kb-col-head">
        <span class="kb-dot" style="background:${STAGE_COLORS[stage.key]};"></span>
        ${stage.label}
        <span class="kb-count">${cards.length}</span>
      </div>
      ${cards.length ? cards.map((o) => kbCard(o, stage)).join("") : '<div class="kb-empty">Nenhum pedido nesta etapa</div>'}
    </div>`;
  }).join("");
}

function kbCard(o, stage) {
  return `
  <div class="kb-card stage-${o.stage}">
    <div class="kb-card-top">
      <b>#${o.id}</b>
      <span class="prio prio-${o.priority}">${o.priority}</span>
    </div>
    <div class="kb-client">${o.client}</div>
    <div class="kb-items">${o.items}</div>
    <div class="kb-meta">
      <span>Volume <b>${o.kg} kg</b></span>
      <span>Máquina <b>${o.machine}</b></span>
      <span>Prazo interno <b class="${["12349", "12350"].includes(o.id) ? "late" : ""}">${o.due}</b></span>
      <span>Entrega <b>${o.eta}</b></span>
    </div>
    <div class="kb-progress"><i style="width:${o.progress}%;"></i></div>
    <div class="kb-actions">
      <button class="kb-advance" onclick="advance('${o.id}')">
        ${stage.next}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
      <button class="kb-eta-btn" onclick="openEta('${o.id}')" title="Informar previsão de entrega">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        Previsão
      </button>
    </div>
  </div>`;
}

function advance(id) {
  const o = PROD.orders.find((x) => x.id === id);
  const idx = PROD.stages.findIndex((s) => s.key === o.stage);
  const machines = { producao: "Extrusora 02", impressao: "Impressora Flexo", separacao: "Corte & Solda 03" };
  if (idx === PROD.stages.length - 1) {
    PROD.orders = PROD.orders.filter((x) => x.id !== id);
    PROD.doneToday.unshift({ id: o.id, client: o.client, kg: o.kg, time: "agora" });
    toast(`Pedido #${id} concluído e liberado para faturamento ✅ Cliente notificado.`);
    renderDone();
  } else {
    o.stage = PROD.stages[idx + 1].key;
    o.machine = machines[o.stage] || o.machine;
    o.progress = Math.min(95, o.progress + 30);
    toast(`Pedido #${id} → ${PROD.stages[idx + 1].label}. Cliente notificado em tempo real 🔔`);
  }
  renderKanban();
  renderStats();
}

/* ---------- Previsão de entrega ---------- */
let etaOrder = null;
function openEta(id) {
  etaOrder = PROD.orders.find((x) => x.id === id);
  $("#eta-body").innerHTML = `
    <div class="eta-form">
      <h2>Previsão de entrega</h2>
      <div class="variant">Pedido #${etaOrder.id} · ${etaOrder.client}</div>
      <label>Nova data prevista</label>
      <input type="date" id="eta-input" value="2026-07-${etaOrder.eta.slice(0, 2)}" min="2026-07-20" />
      <button class="btn btn-lime" onclick="saveEta()">Salvar e notificar cliente</button>
    </div>`;
  $("#eta-sheet").classList.add("open");
  document.body.style.overflow = "hidden";
}
function saveEta() {
  const v = $("#eta-input").value;
  if (v) {
    const [y, m, d] = v.split("-");
    etaOrder.eta = `${d}/${m}/${y}`;
  }
  closeEta();
  renderKanban();
  toast(`Previsão do pedido #${etaOrder.id} atualizada para ${etaOrder.eta} 📅 Cliente avisado.`);
}
function closeEta() {
  $("#eta-sheet").classList.remove("open");
  document.body.style.overflow = "";
}
$("#eta-sheet").addEventListener("click", (e) => { if (e.target.id === "eta-sheet") closeEta(); });

/* ---------- Máquinas e concluídos ---------- */
function renderMachines() {
  $("#machines").innerHTML = PROD.machines.map((m) => `
    <div class="machine-row">
      <span class="doc-ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8"/></svg>
      </span>
      <span class="machine-mid">
        <b>${m.name}</b>
        <span class="status-pill ${m.status === "Operando" ? "st-entregue" : "st-aberto"}" style="margin-top:4px;">${m.status}</span>
        <span class="kb-progress"><i style="width:${m.load}%;background:${m.load > 85 ? "var(--amber)" : "var(--green-600)"};"></i></span>
      </span>
      <span class="machine-load">${m.load}%</span>
    </div>`).join("");
}

function renderDone() {
  $("#done-list").innerHTML = PROD.doneToday.map((d) => `
    <div class="done-row">
      <span class="done-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </span>
      <span class="done-mid">
        <b>Pedido #${d.id} — ${d.client}</b>
        <small>${d.kg} kg · concluído ${d.time === "agora" ? "agora" : "às " + d.time}</small>
      </span>
      <button class="btn btn-ghost btn-sm" onclick="toast('Etiquetas de expedição do pedido #${d.id} enviadas para impressão 🖨️')">Etiquetas</button>
    </div>`).join("");
}

/* ---------- Init ---------- */
renderStats();
renderKanban();
renderMachines();
renderDone();
