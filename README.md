# LightPlast Connect — Protótipo de Front-end

**Portal B2B + PWA** exclusivo para clientes e representantes da LightPlast.
Este repositório contém um **protótipo navegável de apresentação comercial**: apenas
front-end, com dados fictícios ("chumbados"), sem back-end.

> Objetivo: demonstrar a experiência completa da plataforma para o cliente
> (LightPlast) antes do desenvolvimento do produto final.

## Como abrir

**Opção 1 — direto no navegador:** dê dois cliques em `index.html`.

**Opção 2 — com servidor local (habilita o modo PWA/instalável):**

```bash
npx serve .
# ou
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

Para apresentar no celular (visual de aplicativo): abra a URL no smartphone e use
**Compartilhar → Adicionar à Tela de Início**.

## O que está incluído (área do cliente)

| Tela | Destaques |
| --- | --- |
| Login | CPF/CNPJ, SSO Google/Microsoft, recuperação de senha, selo de segurança/2FA |
| Dashboard | Resumo de pedidos, representante com WhatsApp, atalhos, promoções, avisos |
| Catálogo | Busca, categorias, favoritos, ficha técnica (bottom sheet), badge de promoção |
| Pedido Rápido | Produtos frequentes com stepper, copiar pedido anterior, pedido recorrente |
| Carrinho | Cupom aplicado, frete grátis, observações, confirmar pedido / orçamento |
| Meus Pedidos | Filtros por status, repetir pedido, exportar PDF |
| Rastreamento | Linha do tempo completa da produção à entrega + mapa animado |
| Financeiro | Limite de crédito, boletos (2ª via, PIX, código de barras), NF-e/DANFE, extrato |
| Promoções | Fidelidade, cashback, cupons, campanhas |
| Documentos | Fichas técnicas, FISPQ, certificados ISO, laudos, catálogos |
| Notificações | Central de avisos com não-lidas |
| Perfil | Dados da empresa, usuários, endereços, atendimento, sair |

Tudo responsivo: **mobile-first** (navegação inferior + FAB de pedido rápido) e
**desktop** (barra lateral), seguindo a identidade visual LightPlast
(verde-floresta + verde-lima + logotipo serifado "lp").

## Estrutura

```
index.html            → todas as telas (SPA sem framework)
css/styles.css        → design system completo
js/data.js            → dados fictícios de demonstração
js/app.js             → navegação, carrinho e renderização
manifest.webmanifest  → configuração PWA
sw.js                 → service worker (cache offline básico)
icons/icon.svg        → ícone do aplicativo
```

Sem dependências, sem build — HTML, CSS e JavaScript puros.
