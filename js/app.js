/* ============================================================
   LightPlast Connect — Protótipo de front-end (demonstração)
   Navegação, carrinho e renderização com dados mockados.
   ============================================================ */

/* ---------- Ilustrações SVG dos produtos ---------- */
const ART = {
  "bag-black": bagArt("#1c2420", "#2e3a33", "#0f1512"),
  "bag-white": bagArt("#f4f6f2", "#ffffff", "#d8ded4", true),
  "bag-green": bagArt("#3f7a4c", "#54945f", "#2d5c38"),
  "bag-blue": bagArt("#3a6ea8", "#4f83bd", "#2b5480"),
  "bag-custom": bagArt("#e9ece4", "#f6f8f2", "#cfd6c8", true, "lp"),
  film: filmArt(180),
  "film-sm": filmArt(120),
  roll: rollArt(),
};

function bagArt(base, hi, dark, outline = false, label = "") {
  return `
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="106" rx="34" ry="6" fill="rgba(20,40,25,.10)"/>
    <path d="M38 34c-2 8-8 14-8 34 0 22 10 36 30 36s30-14 30-36c0-20-6-26-8-34l-6-6H44l-6 6z"
      fill="${base}" ${outline ? 'stroke="#c6cec2" stroke-width="2"' : ""}/>
    <path d="M43 32c6 10 28 10 34 0l4 6c-8 10-34 10-42 0l4-6z" fill="${dark}"/>
    <path d="M44 22c0-6 5-9 8-4 2-4 6-4 8 0 3-5 8-2 8 4l4 8H40l4-8z" fill="${dark}"/>
    <path d="M46 48c-3 12-2 26 4 38" stroke="${outline ? "#d9dfd3" : hi}" stroke-width="5" stroke-linecap="round" opacity=".7"/>
    ${label ? `<text x="60" y="82" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="26" fill="#31563c">${label}</text>` : ""}
  </svg>`;
}

function filmArt(h) {
  const y = 110 - (h * 0.42);
  return `
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="108" rx="30" ry="5" fill="rgba(20,40,25,.10)"/>
    <rect x="56" y="${y - 14}" width="8" height="14" rx="2" fill="#8a968f"/>
    <rect x="34" y="${y}" width="52" height="${h * 0.42 + 8}" rx="8" fill="#dfe7ea"/>
    <rect x="34" y="${y}" width="52" height="${h * 0.42 + 8}" rx="8" fill="url(#shine${h})"/>
    <rect x="41" y="${y + 6}" width="10" height="${h * 0.42 - 6}" rx="5" fill="#ffffff" opacity=".75"/>
    <defs>
      <linearGradient id="shine${h}" x1="34" y1="0" x2="86" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#cfd9dd"/><stop offset=".45" stop-color="#f2f6f7"/><stop offset="1" stop-color="#c4cfd4"/>
      </linearGradient>
    </defs>
  </svg>`;
}

function rollArt() {
  return `
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="106" rx="34" ry="6" fill="rgba(20,40,25,.10)"/>
    <rect x="26" y="40" width="68" height="56" rx="10" fill="#e8eef0"/>
    <rect x="26" y="40" width="68" height="56" rx="10" fill="url(#rshine)"/>
    <circle cx="60" cy="40" r="26" fill="#dde5e8"/>
    <circle cx="60" cy="40" r="26" fill="url(#rtop)"/>
    <circle cx="60" cy="40" r="9" fill="#9aa8a0"/>
    <circle cx="60" cy="40" r="5" fill="#f6f7f4"/>
    <path d="M34 70h52M34 82h52" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".8" stroke-dasharray="4 7"/>
    <defs>
      <linearGradient id="rshine" x1="26" y1="0" x2="94" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ccd6da"/><stop offset=".5" stop-color="#f4f8f9"/><stop offset="1" stop-color="#c7d2d6"/>
      </linearGradient>
      <radialGradient id="rtop" cx=".4" cy=".35" r=".9">
        <stop stop-color="#f6fafb"/><stop offset="1" stop-color="#c9d4d8"/>
      </radialGradient>
    </defs>
  </svg>`;
}

const NOTIF_ICONS = {
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8zM3.3 8.3L12 13l8.7-4.7M12 13v9"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L11 3H4v7l9.6 10.4a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8z"/><circle cx="8" cy="8" r="1.4"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8h13v8H1zM14 11h4l3 3v2h-7z"/><circle cx="6" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
  sheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M9 13h6M9 17h6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/></svg>',
};

const STATUS_CLASS = { separacao: "st-separacao", producao: "st-producao", faturado: "st-faturado", entregue: "st-entregue", cancelado: "st-cancelado" };

/* ---------- Estado ---------- */
const state = {
  cart: {}, // productId -> qty
  catalogFilter: "Todos",
  catalogQuery: "",
  ordersFilter: "todos",
  docsFilter: "Todos",
  finTab: "boletos",
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const P = (id) => DB.products.find((p) => p.id === id);

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span>${msg}</span>`;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------- Login / navegação ---------- */
function doLogin(e) {
  if (e) e.preventDefault();
  $("#screen-login").classList.remove("active");
  $("#app").classList.add("active");
  navigate("dashboard");
  toast("Bem-vinda de volta, Ana! 👋");
  return false;
}

function logout() {
  $("#app").classList.remove("active");
  $("#screen-login").classList.add("active");
  window.scrollTo(0, 0);
}

function navigate(name) {
  $$("#app .screen").forEach((s) => s.classList.remove("active"));
  const target = $(`#screen-${name}`);
  if (!target) return;
  target.classList.add("active");
  $$("[data-nav]").forEach((b) => b.classList.toggle("active", b.dataset.nav === name && (b.classList.contains("side-link") || b.classList.contains("bnav-item"))));
  window.scrollTo({ top: 0 });
  updateCartBar();
}

document.addEventListener("click", (e) => {
  const nav = e.target.closest("[data-nav]");
  if (!nav) return;
  if (nav.dataset.order) renderTracking(nav.dataset.order);
  if (nav.dataset.tab) state.finTab = nav.dataset.tab;
  navigate(nav.dataset.nav);
  if (nav.dataset.nav === "finance") renderFinance();
});

/* ---------- Carrinho ---------- */
function cartCount() { return Object.values(state.cart).reduce((a, b) => a + b, 0); }
function cartTotal() {
  return Object.entries(state.cart).reduce((sum, [id, qty]) => {
    const p = P(id);
    return sum + (p.price || 0) * qty;
  }, 0);
}

function addToCart(id, qty = 1) {
  const p = P(id);
  if (p.price == null) { toast("Produto sob consulta — solicite um orçamento 📋"); return; }
  state.cart[id] = (state.cart[id] || 0) + qty;
  toast(`${p.name} adicionado ao carrinho 🛒`);
  updateCartBar();
  renderQuick();
  renderCart();
}

function setQty(id, qty) {
  if (qty <= 0) delete state.cart[id];
  else state.cart[id] = qty;
  updateCartBar();
  renderQuick();
  renderCart();
}

function updateCartBar() {
  const n = cartCount();
  $$(".cart-count").forEach((el) => {
    el.textContent = n;
    if (el.classList.contains("pill-badge")) el.style.display = n ? "" : "none";
  });
  const bar = $("#cart-bar");
  const onCartScreen = $("#screen-cart").classList.contains("active");
  bar.classList.toggle("visible", n > 0 && !onCartScreen && $("#app").classList.contains("active"));
  $("#cart-bar-total").textContent = fmtBRL(cartTotal());
}

function repeatOrder(orderId) {
  const order = DB.orders.find((o) => o.id === orderId);
  order.products.forEach(({ id, qty }) => { state.cart[id] = (state.cart[id] || 0) + qty; });
  toast(`Pedido #${orderId} copiado para o carrinho 🔁`);
  updateCartBar();
  renderCart();
  navigate("cart");
}

function checkout() {
  state.cart = {};
  renderCart();
  updateCartBar();
  navigate("orders");
  toast("Pedido #12352 enviado! Você receberá a confirmação em instantes ✅");
}

/* ---------- Dashboard ---------- */
function renderDashboard() {
  $("#dash-stats").innerHTML = [
    { n: 1, label: "Em produção", cls: "st-producao", icon: NOTIF_ICONS.box },
    { n: 1, label: "Em separação", cls: "st-separacao", icon: NOTIF_ICONS.truck },
    { n: 2, label: "Entregues no mês", cls: "st-entregue", icon: NOTIF_ICONS.star },
    { n: "R$ 4,8 mil", label: "Comprado em julho", cls: "st-faturado", icon: NOTIF_ICONS.doc },
  ].map((s) => `
    <div class="stat-card">
      <span class="stat-ico ${s.cls}" style="border-radius:9px;">${s.icon}</span>
      <b>${s.n}</b><span>${s.label}</span>
    </div>`).join("");

  $("#dash-promos").innerHTML = DB.promos.map(promoCard).join("");
  $("#dash-orders").innerHTML = DB.orders.slice(0, 3).map(orderRow).join("");
}

function promoCard(p) {
  return `
  <div class="promo-card promo-${p.theme}">
    <div>
      <div class="promo-tag">${p.tag}</div>
      <h3>${p.title.includes("OFF") ? p.title.replace("OFF", "<em>OFF</em>") : p.title}</h3>
      <p>${p.subtitle}</p>
    </div>
    <div class="promo-foot">
      <span>${p.until}</span>
      ${p.code ? `<button class="promo-code" onclick="toast('Cupom ${p.code} copiado! 🏷️')">${p.code}</button>` : ""}
    </div>
  </div>`;
}

function orderRow(o) {
  return `
  <button class="order-row" data-nav="tracking" data-order="${o.id}">
    <span class="order-ico">${NOTIF_ICONS.box}</span>
    <span class="order-mid">
      <b>Pedido #${o.id}</b>
      <small>${o.date} · ${o.items} itens</small>
    </span>
    <span class="order-end">
      <b>${fmtBRL(o.total)}</b>
      <span class="status-pill ${STATUS_CLASS[o.status]}">${o.statusLabel}</span>
    </span>
  </button>`;
}

/* ---------- Catálogo ---------- */
function renderCatalogChips() {
  $("#catalog-chips").innerHTML = DB.categories.map((c) =>
    `<button class="chip ${state.catalogFilter === c ? "active" : ""}" onclick="filterCatalog('${c}')">${c}</button>`).join("");
}
function filterCatalog(c) { state.catalogFilter = c; renderCatalogChips(); renderCatalog(); }

function renderCatalog() {
  const q = state.catalogQuery.trim().toLowerCase();
  const list = DB.products.filter((p) =>
    (state.catalogFilter === "Todos" || p.category === state.catalogFilter) &&
    (!q || (p.name + " " + p.variant + " " + p.category).toLowerCase().includes(q)));
  $("#catalog-grid").innerHTML = list.length ? list.map((p) => `
    <div class="product-card">
      <button class="product-thumb" onclick="openSheet('${p.id}')" aria-label="${p.name}">
        ${ART[p.img]}
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </button>
      <button class="fav-btn ${p.fav ? "on" : ""}" onclick="toggleFav('${p.id}', this)" aria-label="Favoritar">
        <svg viewBox="0 0 24 24" fill="${p.fav ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </button>
      <div class="product-body" onclick="openSheet('${p.id}')" style="cursor:pointer;">
        <b>${p.name}</b>
        <small>${p.variant}</small>
        <div class="product-foot">
          <span class="product-price ${p.price == null ? "consult" : ""}">${fmtBRL(p.price)}</span>
          <button class="add-btn" onclick="event.stopPropagation();addToCart('${p.id}')" aria-label="Adicionar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>`).join("")
    : `<div class="empty-state" style="grid-column:1/-1;">${NOTIF_ICONS.box}<b>Nenhum produto encontrado</b><p>Tente outro termo ou categoria.</p></div>`;
}

function toggleFav(id, btn) {
  const p = P(id);
  p.fav = !p.fav;
  btn.classList.toggle("on", p.fav);
  btn.querySelector("svg").setAttribute("fill", p.fav ? "currentColor" : "none");
  toast(p.fav ? "Adicionado aos favoritos ❤️" : "Removido dos favoritos");
}

/* ---------- Detalhe do produto ---------- */
function openSheet(id) {
  const p = P(id);
  $("#sheet-body").innerHTML = `
    <div class="product-hero">${ART[p.img]}</div>
    <h2>${p.name}</h2>
    <div class="variant">${p.variant} · ${p.category}</div>
    <p class="desc">${p.desc}</p>
    <div class="spec-table">
      ${Object.entries(p.specs).map(([k, v]) => `<div class="spec-row"><span>${k}</span><b>${v}</b></div>`).join("")}
    </div>
    <div style="display:flex;gap:8px;margin-top:14px;">
      <button class="btn btn-ghost btn-sm" onclick="toast('Baixando ficha técnica em PDF 📄')">${NOTIF_ICONS.sheet.replace('stroke-width="2"', 'stroke-width="2" width="15" height="15"')} Ficha técnica</button>
      <button class="btn btn-ghost btn-sm" onclick="toast('Abrindo vídeo do produto ▶️')">▶ Vídeo</button>
    </div>`;
  $("#sheet-cta").innerHTML = p.price != null ? `
    <div class="sheet-price"><small>Preço p/ sua empresa</small><b>${fmtBRL(p.price)}</b></div>
    <button class="btn btn-lime" onclick="addToCart('${p.id}');closeSheet()">Adicionar ao carrinho</button>`
    : `<button class="btn btn-dark" onclick="toast('Orçamento solicitado! Carlos retornará em até 4h úteis 📋');closeSheet()">Solicitar orçamento</button>`;
  $("#product-sheet").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeSheet() {
  $("#product-sheet").classList.remove("open");
  document.body.style.overflow = "";
}
$("#product-sheet").addEventListener("click", (e) => { if (e.target.id === "product-sheet") closeSheet(); });

/* ---------- Pedido rápido ---------- */
function renderQuick() {
  const favs = DB.products.filter((p) => p.fav || p.featured);
  $("#quick-list").innerHTML = favs.map((p) => {
    const qty = state.cart[p.id] || 0;
    return `
    <div class="quick-row">
      <span class="quick-thumb">${ART[p.img]}</span>
      <span class="quick-mid">
        <b>${p.name}</b>
        <small>${p.variant}</small>
        <span class="price">${fmtBRL(p.price)}</span>
      </span>
      ${qty === 0
        ? `<button class="add-btn" style="width:38px;height:38px;" onclick="addToCart('${p.id}')" aria-label="Adicionar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button>`
        : stepper(p.id, qty)}
    </div>`;
  }).join("");
}

function stepper(id, qty) {
  return `
  <div class="qty-stepper">
    <button onclick="setQty('${id}', ${qty - 1})" aria-label="Diminuir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12h14"/></svg></button>
    <span class="qty">${qty}</span>
    <button onclick="setQty('${id}', ${qty + 1})" aria-label="Aumentar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button>
  </div>`;
}

/* ---------- Carrinho ---------- */
function renderCart() {
  const ids = Object.keys(state.cart);
  const itemsEl = $("#cart-items");
  const sumEl = $("#cart-summary");
  if (!ids.length) {
    itemsEl.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/><path d="M3 3h2l2.6 12.4A2 2 0 0 0 9.6 17h7.7a2 2 0 0 0 2-1.6L21 7H6"/></svg>
      <b>Seu carrinho está vazio</b><p>Adicione produtos pelo catálogo ou pelo pedido rápido.</p></div>`;
    sumEl.innerHTML = "";
    return;
  }
  itemsEl.innerHTML = ids.map((id) => {
    const p = P(id), qty = state.cart[id];
    return `
    <div class="cart-item">
      <span class="quick-thumb">${ART[p.img]}</span>
      <span class="quick-mid">
        <b>${p.name}</b>
        <small>${fmtBRL(p.price)} / un</small>
        <span class="price">${fmtBRL((p.price || 0) * qty)}</span>
      </span>
      ${stepper(id, qty)}
      <button class="cart-remove" onclick="setQty('${id}', 0)" aria-label="Remover">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
      </button>
    </div>`;
  }).join("");
  const total = cartTotal();
  const disc = total >= 2000 ? 0 : null;
  sumEl.innerHTML = `
    <div class="section-title"><h2>Observações do pedido</h2></div>
    <div class="obs-field"><textarea placeholder="Ex.: entregar no galpão 2, falar com Pedro no recebimento…"></textarea></div>
    <div class="card summary-card">
      <div class="summary-row"><span>Subtotal (${cartCount()} itens)</span><span>${fmtBRL(total)}</span></div>
      <div class="summary-row"><span>Cupom CLIENTE10 (−10%)</span><span style="color:var(--ok);font-weight:700;">−${fmtBRL(total * 0.1)}</span></div>
      <div class="summary-row"><span>Frete</span><span style="color:var(--ok);font-weight:700;">${total * 0.9 >= 2000 ? "Grátis" : "A calcular"}</span></div>
      <div class="summary-row total"><span>Total</span><span>${fmtBRL(total * 0.9)}</span></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:16px;">
      <button class="btn btn-lime" onclick="checkout()">
        Confirmar pedido
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </button>
      <button class="btn btn-outline" onclick="toast('Orçamento enviado ao seu representante 📋')">Solicitar orçamento em vez de pedido</button>
    </div>`;
}

/* ---------- Pedidos ---------- */
const ORDER_FILTERS = [
  { key: "todos", label: "Todos" },
  { key: "aberto", label: "Em aberto" },
  { key: "entregue", label: "Entregues" },
  { key: "cancelado", label: "Cancelados" },
];

function renderOrders() {
  $("#orders-chips").innerHTML = ORDER_FILTERS.map((f) =>
    `<button class="chip ${state.ordersFilter === f.key ? "active" : ""}" onclick="filterOrders('${f.key}')">${f.label}</button>`).join("");
  const list = DB.orders.filter((o) => {
    if (state.ordersFilter === "todos") return true;
    if (state.ordersFilter === "aberto") return !["entregue", "cancelado"].includes(o.status);
    return o.status === state.ordersFilter;
  });
  $("#orders-list").innerHTML = (list.length ? list.map((o) => `
    ${orderRow(o)}
    <div style="display:flex;gap:8px;margin:8px 0 16px;">
      <button class="btn btn-ghost btn-sm" style="flex:1;" onclick="repeatOrder('${o.id}')">🔁 Repetir pedido</button>
      <button class="btn btn-ghost btn-sm" style="flex:1;" onclick="toast('Exportando pedido #${o.id} em PDF 📄')">📄 Exportar PDF</button>
    </div>`).join("")
    : `<div class="empty-state">${NOTIF_ICONS.box}<b>Nenhum pedido aqui</b><p>Nada nessa categoria por enquanto.</p></div>`);
}
function filterOrders(k) { state.ordersFilter = k; renderOrders(); }

/* ---------- Rastreamento ---------- */
function renderTracking(orderId) {
  const o = DB.orders.find((x) => x.id === orderId) || DB.orders[0];
  const inTransit = o.timeline.some((t) => t.label === "Em transporte" && t.done);
  $("#tracking-body").innerHTML = `
    <div class="track-hero">
      <div class="th-top">
        <div>
          <small>PEDIDO #${o.id} · ${o.date}</small>
          <h2>${o.statusLabel}</h2>
        </div>
        <span class="status-pill ${STATUS_CLASS[o.status]}" style="background:rgba(255,255,255,.12);color:#fff;">${o.items} itens · ${fmtBRL(o.total)}</span>
      </div>
      ${o.status !== "cancelado" ? `
      <div class="eta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
        Previsão de entrega: <b style="margin-left:4px;">${o.eta}</b>
      </div>` : ""}
    </div>

    <div class="section-title"><h2>Linha do tempo</h2></div>
    <div class="card timeline">
      ${o.timeline.map((t) => `
        <div class="tl-item ${t.done ? "done" : ""} ${t.current ? "current" : ""} ${t.cancel ? "cancel" : ""}">
          <span class="tl-dot">${t.done ? (t.cancel
            ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'
            : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>') : ""}</span>
          <span class="tl-info"><b>${t.label}</b><small>${t.date}</small></span>
        </div>`).join("")}
    </div>

    ${o.status !== "cancelado" ? `
    <div class="section-title"><h2>Mapa da entrega</h2></div>
    <div class="map-card">
      <div class="map-canvas">${mapArt(inTransit)}</div>
      <div class="map-foot">
        <span class="order-ico" style="width:38px;height:38px;">${NOTIF_ICONS.truck}</span>
        <div style="flex:1;">
          <b>${inTransit ? "Saiu do CD LightPlast — São José dos Pinhais/PR" : "Aguardando expedição no CD LightPlast"}</b>
          <small>Destino: Av. das Indústrias, 1250 — Curitiba/PR</small>
        </div>
      </div>
    </div>` : ""}

    <div style="display:flex;gap:10px;margin-top:18px;">
      <button class="btn btn-dark" onclick="toast('Conectando com um atendente… 💬')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/></svg>
        Falar com a atendente
      </button>
      <button class="btn btn-outline" onclick="repeatOrder('${o.id}')">Repetir pedido</button>
    </div>`;
}

function mapArt(inTransit) {
  return `
  <svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="190" fill="#eef2ec"/>
    <path d="M0 40h400M0 95h400M0 150h400M60 0v190M150 0v190M255 0v190M340 0v190" stroke="#dde4da" stroke-width="7"/>
    <path d="M0 40h400M0 95h400M0 150h400M60 0v190M150 0v190M255 0v190M340 0v190" stroke="#fff" stroke-width="1.4" stroke-dasharray="8 8"/>
    <rect x="14" y="10" width="34" height="20" rx="3" fill="#dce6d4"/>
    <rect x="170" y="110" width="60" height="30" rx="3" fill="#dce6d4"/>
    <rect x="290" y="55" width="38" height="26" rx="3" fill="#dce6d4"/>
    <path d="M60 150 L150 150 L150 95 L255 95 L255 40 L340 40" fill="none" stroke="#2a6a43" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${inTransit ? "none" : "2 10"}"/>
    <circle cx="60" cy="150" r="9" fill="#0c1d10"/>
    <text x="60" y="154" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="10" fill="#b5e04c">lp</text>
    ${inTransit ? `<g><circle cx="255" cy="95" r="13" fill="#b5e04c"/><circle cx="255" cy="95" r="13" fill="none" stroke="#b5e04c" stroke-width="6" opacity=".3"><animate attributeName="r" values="13;22" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values=".4;0" dur="1.6s" repeatCount="indefinite"/></circle>
      <path d="M249 95h7v-4h3l3 3v3h-13z" fill="#0c1d10"/><circle cx="252" cy="98.5" r="1.5" fill="#0c1d10"/><circle cx="259" cy="98.5" r="1.5" fill="#0c1d10"/></g>` : ""}
    <g>
      <circle cx="340" cy="40" r="10" fill="#cf4b3b"/>
      <circle cx="340" cy="40" r="4" fill="#fff"/>
    </g>
  </svg>`;
}

/* ---------- Financeiro ---------- */
function renderFinance() {
  const c = DB.company;
  $("#credit-used").textContent = fmtBRL(c.creditUsed) + " utilizado";
  $("#credit-avail").textContent = fmtBRL(c.creditLimit - c.creditUsed) + " disponível";
  $("#credit-bar").style.width = Math.round((c.creditUsed / c.creditLimit) * 100) + "%";
  $$(".fin-tab").forEach((t) => t.classList.toggle("active", t.dataset.fintab === state.finTab));

  const body = $("#finance-body");
  if (state.finTab === "boletos") {
    body.innerHTML = DB.boletos.map((b) => `
      <div class="doc-row">
        <span class="doc-ico">${NOTIF_ICONS.doc}</span>
        <span class="doc-mid">
          <b>${b.id} · ${b.parcela}</b>
          <small>Vencimento ${b.venc}</small>
        </span>
        <span class="boleto-val">
          <b>${fmtBRL(b.valor)}</b>
          <span class="status-pill ${b.status === "pago" ? "st-pago" : "st-aberto"}">${b.status === "pago" ? "Pago" : "Em aberto"}</span>
        </span>
      </div>
      ${b.status === "aberto" ? `
      <div style="display:flex;gap:8px;margin:8px 0 14px;">
        <button class="btn btn-ghost btn-sm" style="flex:1;" onclick="toast('Código de barras copiado! 📋')">Copiar código</button>
        <button class="btn btn-ghost btn-sm" style="flex:1;" onclick="toast('QR Code PIX gerado — pague em segundos ⚡')">Pagar com PIX</button>
        <button class="btn btn-ghost btn-sm" style="flex:1;" onclick="toast('Baixando 2ª via do boleto 📄')">2ª via</button>
      </div>` : `<div style="height:10px;"></div>`}`).join("");
  } else if (state.finTab === "notas") {
    body.innerHTML = DB.notas.map((n) => `
      <div class="doc-row">
        <span class="doc-ico">${NOTIF_ICONS.sheet}</span>
        <span class="doc-mid">
          <b>${n.id}</b>
          <small>Pedido #${n.pedido} · ${n.data} · ${fmtBRL(n.valor)}</small>
        </span>
        <span class="doc-actions">
          <button class="doc-act" onclick="toast('Baixando DANFE em PDF 📄')" aria-label="DANFE" title="DANFE (PDF)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </button>
          <button class="doc-act" onclick="toast('Baixando XML da NF-e 🧾')" aria-label="XML" title="XML">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
          </button>
        </span>
      </div>`).join("");
  } else {
    body.innerHTML = `
      <div class="card">
        <div class="summary-row"><span>Total em aberto</span><b style="color:var(--amber);">${fmtBRL(1248.7)}</b></div>
        <div class="summary-row"><span>Pago nos últimos 90 dias</span><b style="color:var(--ok);">${fmtBRL(5406.2)}</b></div>
        <div class="summary-row"><span>Próximo vencimento</span><b>28/07/2026</b></div>
        <div class="summary-row"><span>Cashback acumulado</span><b style="color:var(--green-600);">${fmtBRL(DB.company.cashback)}</b></div>
      </div>
      <button class="btn btn-outline" style="margin-top:14px;" onclick="toast('Extrato completo exportado em PDF 📄')">Exportar extrato completo (PDF)</button>`;
  }
}
$$(".fin-tab").forEach((t) => t.addEventListener("click", () => { state.finTab = t.dataset.fintab; renderFinance(); }));

/* ---------- Promoções ---------- */
function renderPromos() {
  $("#promos-list").innerHTML = DB.promos.map(promoCard).join("");
  $("#coupons-list").innerHTML = [
    { off: "10%", name: "CLIENTE10", desc: "Sacos de lixo e filme stretch · até 31/07" },
    { off: "15%", name: "VERDE15", desc: "Linha compostável LightGreen · até 15/08" },
    { off: "R$ 50", name: "BEMVINDO50", desc: "Primeira compra acima de R$ 800" },
  ].map((c) => `
    <div class="coupon">
      <span class="cp-off">${c.off}<br /><small style="font-size:10px;font-weight:700;color:var(--ink-3);">OFF</small></span>
      <span class="cp-info"><b>${c.name}</b><small>${c.desc}</small></span>
      <button class="btn btn-dark btn-sm" onclick="toast('Cupom ${c.name} aplicado ao carrinho 🏷️')">Usar</button>
    </div>`).join("");
}

/* ---------- Documentos ---------- */
const DOC_TYPES = ["Todos", "Ficha técnica", "Certificado", "FISPQ", "Laudo", "Catálogo", "Manual"];
function renderDocs() {
  $("#docs-chips").innerHTML = DOC_TYPES.map((t) =>
    `<button class="chip ${state.docsFilter === t ? "active" : ""}" onclick="filterDocs('${t}')">${t}</button>`).join("");
  const list = DB.docs.filter((d) => state.docsFilter === "Todos" || d.type === state.docsFilter);
  $("#docs-list").innerHTML = list.map((d) => `
    <div class="doc-row">
      <span class="doc-ico">${NOTIF_ICONS[d.icon]}</span>
      <span class="doc-mid"><b>${d.name}</b><small>${d.type} · PDF · ${d.size}</small></span>
      <span class="doc-actions">
        <button class="doc-act" onclick="toast('Baixando ${d.name} 📄')" aria-label="Baixar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        </button>
        <button class="doc-act" onclick="toast('Link de compartilhamento copiado 🔗')" aria-label="Compartilhar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
        </button>
      </span>
    </div>`).join("");
}
function filterDocs(t) { state.docsFilter = t; renderDocs(); }

/* ---------- Notificações ---------- */
function renderNotifs() {
  $("#notif-list").innerHTML = DB.notifications.map((n) => `
    <div class="notif-row ${n.unread ? "unread" : ""}">
      <span class="doc-ico">${NOTIF_ICONS[n.icon]}</span>
      <span style="flex:1;min-width:0;"><b>${n.title}</b><small>${n.time}</small></span>
    </div>`).join("");
}
function markAllRead() {
  DB.notifications.forEach((n) => (n.unread = false));
  renderNotifs();
  toast("Todas as notificações foram lidas ✅");
}

/* ---------- Busca do catálogo ---------- */
$("#catalog-search").addEventListener("input", (e) => {
  state.catalogQuery = e.target.value;
  renderCatalog();
});

/* ---------- Init ---------- */
renderDashboard();
renderCatalogChips();
renderCatalog();
renderQuick();
renderCart();
renderOrders();
renderFinance();
renderPromos();
renderDocs();
renderNotifs();
renderTracking("12351");
updateCartBar();

/* PWA: registra service worker quando servido via http(s) */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
