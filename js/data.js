/* ============================================================
   LightPlast Connect — Dados de demonstração (mock)
   Todos os dados abaixo são fictícios, usados apenas para
   apresentação do protótipo de front-end.
   ============================================================ */

const DB = {
  company: {
    name: "Distribuidora Exemplo LTDA",
    cnpj: "12.345.678/0001-90",
    contact: "Ana Beatriz Souza",
    email: "compras@distribuidoraexemplo.com.br",
    phone: "(41) 99876-5432",
    address: "Av. das Indústrias, 1250 — CIC, Curitiba/PR",
    creditLimit: 25000,
    creditUsed: 8642.3,
    loyaltyPoints: 1250,
    cashback: 86.4,
  },

  rep: {
    name: "Carlos Mendes",
    role: "Seu representante comercial",
    phone: "(41) 98811-2233",
    initials: "CM",
  },

  categories: ["Todos", "Sacos de Lixo", "Filme Stretch", "Compostáveis", "Personalizados", "Bobinas"],

  products: [
    {
      id: "p1", name: "Saco de Lixo Preto 100L", variant: "Reforçado · Fardo c/ 100 un",
      category: "Sacos de Lixo", price: 45.9, img: "bag-black", fav: true, featured: true,
      badge: null, desc: "Saco de lixo reforçado de alta resistência, ideal para uso industrial e comercial. Solda dupla e polietileno de alta densidade.",
      specs: { "Capacidade": "100 litros", "Cor": "Preto", "Espessura": "0,08 mm", "Material": "PEAD reciclado", "Embalagem": "Fardo com 100 unidades" },
    },
    {
      id: "p2", name: "Saco de Lixo Branco 50L", variant: "Reforçado · Fardo c/ 100 un",
      category: "Sacos de Lixo", price: 38.5, img: "bag-white", fav: true, featured: true,
      badge: "-10%", desc: "Indicado para ambientes hospitalares e de alimentação. Alta alvura e resistência à perfuração.",
      specs: { "Capacidade": "50 litros", "Cor": "Branco leitoso", "Espessura": "0,07 mm", "Material": "PEBD virgem", "Embalagem": "Fardo com 100 unidades" },
    },
    {
      id: "p3", name: "Filme Stretch 500mm", variant: "Bobina 25µm · 300m",
      category: "Filme Stretch", price: 54.9, img: "film", fav: true, featured: true,
      badge: "-15%", desc: "Filme stretch para paletização manual ou automática. Excelente elasticidade e transparência.",
      specs: { "Largura": "500 mm", "Espessura": "25 µm", "Comprimento": "300 m", "Cor": "Cristal", "Aplicação": "Paletização" },
    },
    {
      id: "p4", name: "Filme Stretch 300mm", variant: "Bobina 20µm · 200m",
      category: "Filme Stretch", price: 32.9, img: "film-sm", fav: false, featured: false,
      badge: null, desc: "Versão compacta para embalagens menores e uso com aplicador manual.",
      specs: { "Largura": "300 mm", "Espessura": "20 µm", "Comprimento": "200 m", "Cor": "Cristal", "Aplicação": "Uso manual" },
    },
    {
      id: "p5", name: "Saco Compostável 100L", variant: "Linha LightGreen · Fardo c/ 50 un",
      category: "Compostáveis", price: 68.0, img: "bag-green", fav: false, featured: true,
      badge: "Novo", desc: "Linha sustentável LightGreen: biodegradável e compostável, certificado OK Compost.",
      specs: { "Capacidade": "100 litros", "Cor": "Verde", "Material": "Amido de milho + PBAT", "Certificação": "OK Compost / EN 13432", "Embalagem": "Fardo com 50 unidades" },
    },
    {
      id: "p6", name: "Saco de Lixo Azul 60L", variant: "Coleta seletiva · Fardo c/ 100 un",
      category: "Sacos de Lixo", price: 41.2, img: "bag-blue", fav: false, featured: false,
      badge: null, desc: "Para coleta seletiva de recicláveis. Cor padrão CONAMA.",
      specs: { "Capacidade": "60 litros", "Cor": "Azul", "Espessura": "0,06 mm", "Material": "PEAD reciclado", "Embalagem": "Fardo com 100 unidades" },
    },
    {
      id: "p7", name: "Saco Personalizado c/ Logo", variant: "Impressão até 2 cores",
      category: "Personalizados", price: null, img: "bag-custom", fav: false, featured: false,
      badge: "Sob consulta", desc: "Sacos e embalagens com a marca da sua empresa. Impressão flexográfica em até 2 cores, pedido mínimo de 500 kg.",
      specs: { "Impressão": "Flexográfica até 2 cores", "Pedido mínimo": "500 kg", "Prazo": "15 dias úteis", "Arte": "Aprovação digital inclusa" },
    },
    {
      id: "p8", name: "Bobina Picotada 40x60", variant: "PEBD · Bobina c/ 500 sacos",
      category: "Bobinas", price: 89.9, img: "roll", fav: false, featured: false,
      badge: null, desc: "Bobina picotada transparente para acondicionamento de alimentos e peças.",
      specs: { "Medida": "40 x 60 cm", "Material": "PEBD atóxico", "Quantidade": "500 sacos por bobina", "Cor": "Transparente" },
    },
  ],

  orders: [
    {
      id: "12351", date: "15/07/2026", status: "separacao", statusLabel: "Em Separação",
      items: 7, total: 1248.7, eta: "24/07/2026",
      products: [
        { id: "p1", qty: 10 }, { id: "p3", qty: 8 }, { id: "p5", qty: 4 },
      ],
      timeline: [
        { label: "Pedido recebido", date: "15/07/2026 · 09h12", done: true },
        { label: "Em produção", date: "16/07/2026 · 08h00", done: true },
        { label: "Em impressão", date: "17/07/2026 · 10h45", done: true },
        { label: "Em separação", date: "18/07/2026 · 14h20", done: true, current: true },
        { label: "Faturado", date: "Previsto · 21/07/2026", done: false },
        { label: "Em transporte", date: "Previsto · 22/07/2026", done: false },
        { label: "Entregue", date: "Previsto · 24/07/2026", done: false },
      ],
    },
    {
      id: "12344", date: "01/07/2026", status: "entregue", statusLabel: "Entregue",
      items: 4, total: 987.5, eta: "08/07/2026",
      products: [{ id: "p2", qty: 15 }, { id: "p4", qty: 6 }],
      timeline: [
        { label: "Pedido recebido", date: "01/07/2026 · 11h02", done: true },
        { label: "Em produção", date: "02/07/2026 · 08h00", done: true },
        { label: "Em separação", date: "04/07/2026 · 09h30", done: true },
        { label: "Faturado", date: "05/07/2026 · 16h10", done: true },
        { label: "Em transporte", date: "06/07/2026 · 07h45", done: true },
        { label: "Entregue", date: "08/07/2026 · 10h18", done: true, current: true },
      ],
    },
    {
      id: "12343", date: "18/06/2026", status: "entregue", statusLabel: "Entregue",
      items: 11, total: 2542.3, eta: "26/06/2026",
      products: [{ id: "p1", qty: 30 }, { id: "p3", qty: 12 }, { id: "p8", qty: 5 }],
      timeline: [
        { label: "Pedido recebido", date: "18/06/2026 · 15h40", done: true },
        { label: "Em produção", date: "19/06/2026 · 08h00", done: true },
        { label: "Em separação", date: "22/06/2026 · 10h15", done: true },
        { label: "Faturado", date: "23/06/2026 · 14h00", done: true },
        { label: "Em transporte", date: "24/06/2026 · 06h50", done: true },
        { label: "Entregue", date: "26/06/2026 · 09h05", done: true, current: true },
      ],
    },
    {
      id: "12342", date: "05/06/2026", status: "cancelado", statusLabel: "Cancelado",
      items: 3, total: 1150.0, eta: "—",
      products: [{ id: "p7", qty: 3 }],
      timeline: [
        { label: "Pedido recebido", date: "05/06/2026 · 10h22", done: true },
        { label: "Cancelado a pedido do cliente", date: "06/06/2026 · 09h00", done: true, current: true, cancel: true },
      ],
    },
  ],

  boletos: [
    { id: "NF-e 000112351", parcela: "Parcela 1/2", venc: "28/07/2026", valor: 624.35, status: "aberto" },
    { id: "NF-e 000112351", parcela: "Parcela 2/2", venc: "27/08/2026", valor: 624.35, status: "aberto" },
    { id: "NF-e 000112344", parcela: "Parcela única", venc: "05/07/2026", valor: 987.5, status: "pago" },
    { id: "NF-e 000112343", parcela: "Parcela única", venc: "23/06/2026", valor: 2542.3, status: "pago" },
  ],

  notas: [
    { id: "NF-e 000112351", pedido: "12351", data: "18/07/2026", valor: 1248.7 },
    { id: "NF-e 000112344", pedido: "12344", data: "05/07/2026", valor: 987.5 },
    { id: "NF-e 000112343", pedido: "12343", data: "23/06/2026", valor: 2542.3 },
    { id: "NF-e 000112298", pedido: "12298", data: "12/05/2026", valor: 1876.4 },
  ],

  promos: [
    {
      id: "promo1", tag: "Semana do Cliente", title: "10% OFF", subtitle: "em sacos de lixo e filme stretch",
      code: "CLIENTE10", until: "Válido até 31/07/2026", theme: "dark",
    },
    {
      id: "promo2", tag: "Linha LightGreen", title: "15% OFF", subtitle: "embalagens compostáveis certificadas",
      code: "VERDE15", until: "Válido até 15/08/2026", theme: "lime",
    },
    {
      id: "promo3", tag: "Frete grátis", title: "Acima de R$ 2.000", subtitle: "para a região Sul e Sudeste",
      code: null, until: "Campanha permanente", theme: "soft",
    },
  ],

  docs: [
    { name: "Catálogo Completo 2026", type: "Catálogo", size: "8,4 MB", icon: "book" },
    { name: "Ficha Técnica — Sacos de Lixo", type: "Ficha técnica", size: "1,2 MB", icon: "sheet" },
    { name: "Ficha Técnica — Filme Stretch", type: "Ficha técnica", size: "980 KB", icon: "sheet" },
    { name: "FISPQ — Polietileno PEAD/PEBD", type: "FISPQ", size: "740 KB", icon: "shield" },
    { name: "Certificado ISO 9001:2015", type: "Certificado", size: "520 KB", icon: "award" },
    { name: "Certificado OK Compost — LightGreen", type: "Certificado", size: "610 KB", icon: "award" },
    { name: "Laudo de Resistência Mecânica", type: "Laudo", size: "1,1 MB", icon: "shield" },
    { name: "Manual de Armazenamento", type: "Manual", size: "2,3 MB", icon: "book" },
  ],

  notifications: [
    { icon: "box", title: "Seu pedido #12351 entrou em separação", time: "Hoje · 08h32", unread: true },
    { icon: "tag", title: "Semana do Cliente: 10% OFF em sacos de lixo", time: "Ontem · 10h00", unread: true },
    { icon: "doc", title: "NF-e 000112351 disponível para download", time: "18/07 · 16h12", unread: true },
    { icon: "truck", title: "Pedido #12344 foi entregue. Avalie sua experiência!", time: "08/07 · 10h20", unread: false },
    { icon: "star", title: "Você ganhou 250 pontos no Programa Fidelidade", time: "08/07 · 10h21", unread: false },
    { icon: "book", title: "Novo Catálogo 2026 disponível na área de documentos", time: "01/07 · 09h00", unread: false },
  ],
};

const fmtBRL = (v) =>
  v == null ? "Sob consulta" : v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
