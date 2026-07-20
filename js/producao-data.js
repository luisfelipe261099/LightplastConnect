/* ============================================================
   LightPlast Connect — Painel de Produção (dados de demonstração)
   Dados fictícios apenas para apresentação do protótipo.
   ============================================================ */

const PROD = {
  operator: { name: "João Ferreira", role: "Líder de Produção — Turno A", initials: "JF" },

  stages: [
    { key: "fila", label: "Fila de Produção", next: "Iniciar produção" },
    { key: "producao", label: "Em Produção", next: "Enviar p/ impressão" },
    { key: "impressao", label: "Em Impressão", next: "Enviar p/ separação" },
    { key: "separacao", label: "Em Separação", next: "Concluir p/ faturamento" },
  ],

  machines: [
    { name: "Extrusora 01", status: "Operando", load: 92 },
    { name: "Extrusora 02", status: "Operando", load: 78 },
    { name: "Impressora Flexo", status: "Operando", load: 64 },
    { name: "Corte & Solda 03", status: "Manutenção", load: 0 },
  ],

  orders: [
    {
      id: "12351", client: "Distribuidora Exemplo LTDA", stage: "separacao",
      items: "10× Saco Preto 100L · 8× Filme 500mm · 4× Compostável 100L",
      kg: 320, due: "21/07", eta: "24/07/2026", machine: "Corte & Solda 03",
      priority: "normal", progress: 85, entered: "18/07 · 14h20",
    },
    {
      id: "12350", client: "Supermercados Boa Vista", stage: "impressao",
      items: "500 kg Saco Personalizado c/ Logo (2 cores)",
      kg: 500, due: "22/07", eta: "27/07/2026", machine: "Impressora Flexo",
      priority: "urgente", progress: 40, entered: "17/07 · 10h45",
    },
    {
      id: "12349", client: "Hospital Santa Clara", stage: "producao",
      items: "30× Saco Branco 50L · 10× Saco Branco 100L",
      kg: 410, due: "23/07", eta: "28/07/2026", machine: "Extrusora 01",
      priority: "urgente", progress: 55, entered: "16/07 · 08h00",
    },
    {
      id: "12348", client: "Transportadora Rota Sul", stage: "producao",
      items: "40× Filme Stretch 500mm",
      kg: 260, due: "24/07", eta: "29/07/2026", machine: "Extrusora 02",
      priority: "normal", progress: 30, entered: "16/07 · 13h30",
    },
    {
      id: "12347", client: "Condomínio Parque Verde", stage: "fila",
      items: "20× Saco Preto 100L · 15× Saco Azul 60L",
      kg: 180, due: "27/07", eta: "31/07/2026", machine: "—",
      priority: "normal", progress: 0, entered: "15/07 · 16h10",
    },
    {
      id: "12346", client: "Rede Farma Mais", stage: "fila",
      items: "12× Bobina Picotada 40x60 · 8× Saco Branco 50L",
      kg: 95, due: "28/07", eta: "01/08/2026", machine: "—",
      priority: "baixa", progress: 0, entered: "15/07 · 09h20",
    },
  ],

  doneToday: [
    { id: "12345", client: "Metalúrgica União", kg: 240, time: "07h40" },
    { id: "12341", client: "Distribuidora Exemplo LTDA", kg: 380, time: "10h15" },
  ],
};
