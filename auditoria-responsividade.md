
## Segunda rodada

As versões de 768 px e 1280 px preservaram a hierarquia editorial, a alternância de fundos, a tabela de comparação, a calculadora e o card de oferta. O problema concreto identificado no código foi o CTA do header em 320 px, cuja largura calculada ultrapassava a viewport embora o body ocultasse o overflow. O ajuste aplicado tornou esse CTA fluido e permitiu quebra controlada em telas estreitas, mantendo o comportamento de uma linha a partir do breakpoint sm.

## Medição automatizada

Em 320, 360, 375, 390, 414, 768, 1024 e 1280 px, o documento não apresentou overflow horizontal. O único item textual detectado como excedendo sua caixa é o link “Pular para o conteúdo principal”, que usa `sr-only` por acessibilidade e fica visualmente oculto até receber foco; portanto, não é um corte de conteúdo. O CTA de header foi ajustado para largura fluida e confirmado visualmente em 320 px.

## Achado crítico no mobile

Na captura final de 375 px, a linha “Conheça o Método CASAR+, um processo para decidir com estratégia” quebra de forma incorreta em colunas porque o parágrafo usa `display: flex` e mistura nós de texto diretos com o ícone e o elemento `strong`. A correção necessária é envolver toda a copy em um único elemento textual flexível, preservando o ícone e a aparência.

## Validação após correção

Em 375 px, a linha do hero agora mantém o ícone separado e a mensagem inteira dentro de um único bloco de texto, sem a quebra em colunas observada anteriormente. Em 320 px, o CTA do header permanece completamente dentro da viewport e o CTA móvel deixou de cobrir o texto da primeira dobra ao participar do fluxo sticky. A captura desktop em 1280 px preservou a composição ampla e a hierarquia original.
