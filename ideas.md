# Direção de Design — Casamento Inteligente

## Três caminhos explorados

| Tema | Introdução breve | Probabilidade |
| --- | --- | --- |
| **Editorial Botânico** | Uma página que parece uma revista de celebração cuidadosamente diagramada, equilibrando afeto e método com dourado discreto, verdes naturais e espaço em branco. | 0,07 |
| **Livro-Caixa de Promessas** | Uma linguagem de caderno financeiro sofisticado, com colunas, selos e notas de margem que tornam planejamento e economia visualmente desejáveis. | 0,04 |
| **Recepção ao Entardecer** | Uma direção calorosa e sensorial, inspirada em mesas de casamento ao pôr do sol, com profundidade, materiais táteis e fotografias românticas. | 0,08 |

## Abordagem escolhida: Editorial Botânico

### Movimento de design

**Romantismo editorial contemporâneo**, com referências de papelaria de casamento italiana, páginas de revista e botânica de herbário. O resultado deve transmitir o cuidado de uma celebração refinada, sem perder a objetividade de um método de planejamento financeiro.

### Princípios centrais

1. **Elegância orientada por clareza:** informação comercial sempre vem antes do ornamento; textos, preços e chamadas permanecem imediatos e legíveis.
2. **Assimetria editorial:** grandes blocos de respiro convivem com cartões, selos e anotações laterais; evitar uma sequência previsível de caixas centralizadas.
3. **Rigor suave:** bordas finas, sombras extremamente discretas e detalhes dourados conduzem o olhar sem transformar a página em uma vitrine excessiva.
4. **Romance com propósito:** cada elemento remete a uma celebração, mas reforça a promessa de decisão, segurança e melhor custo-benefício.

### Filosofia de cor

O **marfim quente** cria uma base serena, semelhante a papel de algodão. O **verde oliva profundo** sustenta confiança, maturidade e planejamento. O **dourado champanhe** aparece apenas como assinatura de valor — em linhas, selos, números e pequenos pontos de atenção — para indicar conquista sem ostentação. O contraste principal será de verde oliva sobre marfim; textos sobre fotografia sempre receberão uma camada escura para preservar a leitura.

### Paradigma de layout

Uma sequência de **páginas editoriais em movimento**: o herói abre em duas colunas com uma fotografia em uma moldura orgânica; a seguir, a página alterna narrativas em coluna, faixas de argumentos, cartões assimétricos de etapas e uma oferta final com o preço como peça central. Em telas pequenas, a hierarquia se transforma em uma leitura linear, sem sacrificar espaçamento, contraste ou contexto das chamadas.

### Elementos de assinatura

1. **Arcos botânicos** e molduras finas que ecoam o aro circular do logo.
2. **Selos dourados** para preço, garantia e bônus, remetendo a papelaria premium.
3. **Notas de margem em serif itálica**, como pequenos conselhos de uma curadoria editorial.

### Filosofia de interação

As interações devem confirmar decisão e cuidado. CTAs rolam até a oferta com precisão; FAQ abre de maneira serena; cartões levantam levemente no hover, mostrando que existem detalhes a explorar. Não haverá distrações competitivas com a compra.

### Animação

Elementos entram em sequência curta e discreta por opacidade e deslocamento vertical de até 16 px, usando `cubic-bezier(0.23, 1, 0.32, 1)`. Botões têm resposta tátil de escala sutil no clique. Ornamentos podem fazer uma deriva quase imperceptível, apenas quando a preferência de movimento do visitante permitir. Todo o conteúdo deve permanecer plenamente acessível com animações reduzidas.

### Sistema tipográfico

**DM Serif Display** será utilizada nos títulos, números de preço e frases emocionais, criando presença de convite editorial. **Manrope** será aplicada ao texto corrido, navegação e informações objetivas, garantindo leitura nítida no celular. Títulos têm contraste de escala alto; destaques em itálico são reservados às anotações e promessas-chave.

### Essência da marca

**Um método para casais que desejam celebrar com beleza enquanto decidem, negociam e investem com inteligência.** Personalidade: **serena, criteriosa e acolhedora**.

### Voz da marca

A voz é próxima, sofisticada e direta. Headline e CTA convidam à ação com calma e segurança; microcopy remove atrito sem usar pressa artificial ou promessas absolutas.

> “O seu casamento merece escolhas à altura dos seus planos.”

> “Transforme orçamento em liberdade para celebrar.”

### Wordmark e logo

O logo fornecido é o elemento de marca principal: um monograma circular com verde oliva, dourado e folhas. Ele aparece com presença no topo e no rodapé, em tamanho suficiente para ser reconhecido; sua geometria inspira os arcos e selos da interface. Não será substituído por uma marca tipográfica genérica.

### Cor de assinatura

**Dourado Casar+ — #B88A3B.** Um dourado terroso e calmo, usado com parcimônia para assinar valor, refinamento e decisão.

## Style Decisions

- **Regra de prova social:** enquanto não houver relatos reais autorizados, a página não exibirá cartões que imitem depoimentos. A seção assume uma nota editorial de transparência e será substituída apenas por histórias verificadas.
- **Regra de ritmo editorial:** cada grande bloco mantém pelo menos um recurso de composição — numerais amplos, selo de monograma, nota de margem, arco botânico ou relação assimétrica entre conteúdo e imagem.
- **Regra de motivo de assinatura:** cartões arredondados são secundários. A identidade prioritária combina papel marfim, campos tipográficos em verde oliva, arcos botânicos finos e Dourado Casar+ `#B88A3B` reservado a valor, numerais, selos e decisões-chave.

## Validação visual

A navegação, a leitura do herói, a hierarquia de oferta e o FAQ foram revisados em viewport móvel de 375 px. A página mantém um fluxo vertical legível, CTAs com área de toque adequada, imagens sem quebra visível e contraste preservado entre os campos verde oliva, marfim e dourado.
