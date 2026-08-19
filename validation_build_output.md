

## Validação final pós-migração para build/

Em 18/08/2026, a instância `NODE_ENV=production node build/index.js` foi executada em porta livre. A landing page e `/metodo-casarmais` responderam com HTTP 200; os assets locais, CSS e JavaScript também responderam com HTTP 200. O HTML pré-renderizado continha a headline principal.

A calculadora foi aberta no navegador, iniciou em R$ 80.000 e, ao alterar o campo para R$ 85.000, recalculou as categorias para R$ 35.700, R$ 10.200, R$ 8.500, R$ 9.350 e R$ 21.250. Um item de FAQ foi aberto e depois fechado, confirmando o accordion. O CTA da oferta navegou para `https://pay.hotmart.com/U107190056A`, onde o checkout oficial carregou sem iniciar qualquer compra.

As screenshots pós-correção em desktop (1280×720) e mobile (390×844), nas rotas `/` e `/metodo-casarmais`, foram revisadas. Hero, logo, copy, CTA, enquadramento e layout mobile permaneceram sem regressões perceptíveis. A alteração ficou restrita aos caminhos de build e ao teste de contrato.

## CTAs adicionais

Após a inclusão dos novos CTAs, o navegador identificou cinco pontos de conversão “Quero o Método CASAR+” direcionados ao checkout Hotmart. Os três novos pontos são os eventos `offer_price`, `faq_payment` e `final_clarity`, posicionados respectivamente após o preço da oferta, após o item “Como funciona o pagamento?” e após a frase final de clareza. As revisões de desktop e mobile não mostraram cortes ou sobreposições.

## Contato oficial

O contato foi validado nos dois locais solicitados: logo após o bloco de garantia/oferta e no rodapé. Ambos exibem `contato@casamento-inteligente.com` como link clicável. O clique no primeiro link acionou o protocolo de e-mail e a inspeção do DOM confirmou dois destinos idênticos: `mailto:contato@casamento-inteligente.com`. A abertura do aplicativo de e-mail em si depende da configuração de cliente de e-mail do dispositivo. As revisões desktop e mobile não apresentaram quebras de texto ou sobreposição.

## Identificadores de CTA para GTM

Os nove CTAs reais de compra foram verificados no DOM com `data-cta-location` distintos: `header`, `hero`, `metodo`, `ferramentas`, `objecoes`, `oferta_preco`, `oferta_conteudo`, `faq_pagamento` e `final`. Todos mantiveram o texto “Quero o Método CASAR+” e o destino `https://pay.hotmart.com/U107190056A`; os cinco elementos de navegação permanecem como links e os quatro CTAs que já usavam `openCheckout` permanecem como botões. As revisões desktop e mobile não mostraram alteração visual.

O CTA âncora do cabeçalho foi acionado após a instrumentação e abriu corretamente `https://pay.hotmart.com/U107190056A` no checkout Hotmart, sem alteração no comportamento de navegação.

As capturas desktop e mobile após a instrumentação confirmaram que os atributos adicionados não alteraram texto, dimensão, posição, cor, espaçamento ou layout dos CTAs.

O CTA em formato de botão `oferta_preco` também foi acionado após a instrumentação. O handler original `openCheckout("offer_price")` permaneceu associado ao botão; o acionamento programático identificou o CTA e iniciou o fluxo de navegação, com a sessão do navegador temporariamente indisponível durante a transição externa. Ao restabelecer a sessão, a landing continuou respondendo normalmente. O teste de contrato confirma que o mesmo handler e URL oficial foram preservados.

## Calculadora expandida

A distribuição foi atualizada para onze categorias e os percentuais totalizam 100% do orçamento informado. Para o padrão de R$ 80.000,00, a soma das parcelas foi validada como R$ 80.000,00. A tela da calculadora foi revisada no navegador antes da abertura detalhada das linhas.

Após abrir o simulador, o navegador exibiu as onze categorias solicitadas com os valores de referência: Espaço R$ 16.000; Alimentação e Bebidas R$ 22.400; Fotografia e Filmagem R$ 8.000; Música R$ 6.400; Decoração R$ 8.000; Vestuário R$ 4.800; Alianças R$ 2.400; Convites e Papelaria R$ 1.600; Lembrancinhas R$ 1.600; Lua de Mel R$ 7.200; e Site do Casamento R$ 1.600. A leitura visual permaneceu íntegra em viewport desktop.

O valor de entrada foi alterado de R$ 80.000 para R$ 100.000 no navegador. Todas as linhas recalcularam proporcionalmente, incluindo Espaço para R$ 20.000, Alimentação e Bebidas para R$ 28.000 e Lua de Mel para R$ 9.000, confirmando a atualização dinâmica da distribuição.

Uma captura dedicada da seção em largura de 390 px confirmou que a calculadora aberta mantém as onze categorias e seus valores visíveis, em uma coluna de leitura clara, sem overflow horizontal, truncamento ou colisão entre os rótulos e os montantes.

## Sitemap canônico

O sitemap público em `https://casamento-inteligente.com/sitemap.xml` foi confirmado após o deploy com um único elemento `loc`: `https://casamento-inteligente.com/`. A versão publicada não contém referências a `manus.space`.
