# LightPlast Connect — Protótipo de Front-end

**Portal B2B + PWA** exclusivo para clientes e representantes da LightPlast.
Este repositório contém um **protótipo navegável de apresentação comercial**: apenas
front-end, com dados fictícios ("chumbados"), sem back-end.

> Objetivo: demonstrar a experiência completa da plataforma para o cliente
> (LightPlast) antes do desenvolvimento do produto final.

## Publicar em produção (GitHub Pages)

O deploy é automático a cada push (workflow `Publicar no GitHub Pages`).
Só é preciso **ativar o Pages uma única vez**, manualmente:

1. Acesse **Settings → Pages** do repositório
   (`github.com/luisfelipe261099/LightplastConnect/settings/pages`)
2. Em **Build and deployment → Source**, selecione **GitHub Actions**
3. Vá na aba **Actions**, abra o workflow **"Publicar no GitHub Pages"**
   e clique em **Run workflow** (ou faça qualquer push)

O site ficará no ar em:
**https://luisfelipe261099.github.io/LightplastConnect/**

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

## Painéis internos (acesso pela tela de login)

| Painel | Arquivo | Destaques |
| --- | --- | --- |
| Produção | `producao.html` | Esteira kanban de fabricação, avanço de etapa em 1 clique, previsão de entrega, máquinas |
| Comercial | `comercial.html` | Meta do mês, aprovações de pedido, orçamentos, agenda de visitas, carteira de clientes |
| Financeiro | `financeiro.html` | Títulos em aberto com cobrança em 1 clique, recebimentos por forma, limites de crédito |
| Diretoria | `diretoria.html` | Faturamento mensal, vendas por representante, produtos top, origem dos pedidos, adoção do app |

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
