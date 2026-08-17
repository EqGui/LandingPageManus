# Diagnóstico de Renderização Pública — Casamento Inteligente

## Conclusão

>A URL pública entrega o conteúdo da landing page no **HTML inicial**, antes da execução de JavaScript. Não foi identificada uma falha de renderização inicial na versão publicada atual; portanto, nenhuma alteração de design, copy, estrutura ou funcionalidade é necessária neste diagnóstico.

## Arquitetura identificada

A aplicação usa **React com Vite**. Originalmente, essa combinação opera como uma SPA de renderização no cliente quando o ponto de entrada usa `createRoot` sobre uma raiz vazia. A versão atual corrige essa limitação com **geração estática no build**: o Vite gera o bundle do navegador, uma entrada de servidor renderiza a rota inicial e o conteúdo é inserido em `dist/public/index.html`. No navegador, o React hidrata esse HTML para preservar calculadora, FAQ, CTAs e demais interações.

## Teste HTTP direto na URL pública

Foram feitas duas requisições HTTP diretas a `https://casamentoinf-hupxqysm.manus.space/`, sem navegador gráfico ou execução de JavaScript. Uma utilizou um user-agent de navegador e outra o user-agent do Googlebot. As respostas foram idênticas, com **468.703 bytes** cada.

| Verificação no HTML recebido | Navegador | Googlebot |
| --- | --- | --- |
| Title | Presente | Presente |
| Meta description | Presente | Presente |
| H1 principal | Presente | Presente |
| H2 | 15 elementos | 15 elementos |
| Frase principal da landing | Presente | Presente |
| CTAs “Quero o Método CASAR+” | 6 ocorrências | 6 ocorrências |
| Oferta “Método CASAR+ completo” | Presente | Presente |
| FAQ | Presente | Presente |
| Canonical, Open Graph e Schema.org | Presentes | Presentes |

Os termos “Casamento Inteligente”, “Método CASAR+” e “Seu casamento pode custar menos sem parecer um casamento barato.” foram encontrados no HTML entregue aos dois agentes. Isso comprova que o conteúdo principal não depende exclusivamente da execução de JavaScript para ficar acessível.

## Situação de SEO e acessibilidade

O HTML publicado contém title, meta description, canonical, Open Graph, Twitter Card, Schema.org para WebSite, Organization, Course e FAQPage, além de `robots.txt` e `sitemap.xml`. A estrutura da página utiliza `header`, `nav`, `main`, `section`, `article` e `footer`; existe um link de salto para o conteúdo principal. A imagem hero recebe prioridade, enquanto imagens maiores abaixo da primeira dobra usam carregamento adiado.
