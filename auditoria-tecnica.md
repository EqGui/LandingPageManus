# Auditoria Técnica — Casamento Inteligente

## Estratégia aplicada

A landing page continua sendo uma aplicação React, mas a rota inicial agora é **pré-renderizada estaticamente durante o build**. A etapa de build gera o bundle do navegador, produz uma entrada de servidor somente para renderização e insere o HTML resultante em `dist/public/index.html`. No navegador, o React utiliza hidratação quando encontra o conteúdo inicial e mantém as interações existentes, como calculadora, FAQ, CTAs e notificações.

Essa abordagem é mais simples do que uma aplicação SSR permanente e é adequada para uma landing page de rota única cujo conteúdo é estável. Ela mantém o conteúdo essencial disponível para clientes que não executam JavaScript e para ferramentas que leem o HTML inicial.

| Área verificada | Resultado |
| --- | --- |
| HTML de produção | Entrega um H1, 15 H2, textos da FAQ e informações da oferta antes da execução de JavaScript. |
| Renderização | Build do cliente, bundle de pré-renderização e servidor de produção compilam sem erros de TypeScript. |
| SEO técnico | Title, meta description, canonical, Open Graph, Twitter Card, robots.txt e sitemap.xml configurados. |
| Dados estruturados | WebSite, Organization, Course e FAQPage refletem apenas dados presentes na página. |
| Semântica | Header, nav, main, sections, articles e footer foram preservados ou reforçados; foi incluído link para pular ao conteúdo principal. |
| Imagens | Hero tem prioridade de carregamento e dimensões declaradas; imagens maiores abaixo da primeira dobra usam carregamento adiado. |
| Produção sem JavaScript | O servidor de produção retornou H1, FAQ, oferta, JSON-LD, robots.txt e sitemap.xml apenas via requisição HTTP. |
| Revisão visual | Desktop e celular preservam a aparência, a hierarquia e o CTA móvel. |

## Limites conhecidos

O checkout continua aguardando uma URL de pagamento real, portanto seus botões seguem exibindo a mesma orientação já existente. O evento de compra precisa continuar sendo enviado pelo checkout integrado quando essa URL for configurada. A calculadora permanece interativa após a hidratação e seu estado inicial explicativo também aparece no HTML pré-renderizado.
