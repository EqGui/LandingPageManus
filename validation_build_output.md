

## Validação final pós-migração para build/

Em 18/08/2026, a instância `NODE_ENV=production node build/index.js` foi executada em porta livre. A landing page e `/metodo-casarmais` responderam com HTTP 200; os assets locais, CSS e JavaScript também responderam com HTTP 200. O HTML pré-renderizado continha a headline principal.

A calculadora foi aberta no navegador, iniciou em R$ 80.000 e, ao alterar o campo para R$ 85.000, recalculou as categorias para R$ 35.700, R$ 10.200, R$ 8.500, R$ 9.350 e R$ 21.250. Um item de FAQ foi aberto e depois fechado, confirmando o accordion. O CTA da oferta navegou para `https://pay.hotmart.com/U107190056A`, onde o checkout oficial carregou sem iniciar qualquer compra.

As screenshots pós-correção em desktop (1280×720) e mobile (390×844), nas rotas `/` e `/metodo-casarmais`, foram revisadas. Hero, logo, copy, CTA, enquadramento e layout mobile permaneceram sem regressões perceptíveis. A alteração ficou restrita aos caminhos de build e ao teste de contrato.

## CTAs adicionais

Após a inclusão dos novos CTAs, o navegador identificou cinco pontos de conversão “Quero o Método CASAR+” direcionados ao checkout Hotmart. Os três novos pontos são os eventos `offer_price`, `faq_payment` e `final_clarity`, posicionados respectivamente após o preço da oferta, após o item “Como funciona o pagamento?” e após a frase final de clareza. As revisões de desktop e mobile não mostraram cortes ou sobreposições.
