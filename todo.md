- [x] Atualizar a faixa superior para “Casamento Inteligente - Método CASAR+: Aprenda a negociar com fornecedores”.
- [x] Trocar o bônus “Guia de negociação” por “Guia Casamento Sem Golpes” e adaptar o subtítulo.
- [x] Remover os bônus de checklists e calculadora.
- [x] Iniciar o orçamento total estimado da calculadora em R$ 80.000,00.
- [x] Reorganizar a tabela de fornecedores A/B para caber sem arrastar no mobile e posicionar a conclusão centralizada abaixo.
- [x] Substituir a foto dos criadores pelo novo arquivo enviado.
- [x] Retirar o texto “Objeções comuns” e destacar 10x de R$ 49,70, reduzindo visualmente R$ 497,00.
- [x] Validar conteúdo, imagem, CTAs, preço e responsividade.
- [x] Salvar checkpoint e publicar a atualização.

# Revisão do editor visual — nova rodada

- [x] Revisar estilos inline de espaçamento adicionados pelo editor visual e manter somente os ajustes intencionais nos contêineres de seção.
- [x] Corrigir o texto “Pagamento seguropelo checkout...” para preservar o espaço e revisar comentários de exclusão.
- [x] Verificar JSX duplicado ou inválido e preservar layout, preço, tabela e responsividade.
- [x] Rodar build, testes e screenshots desktop/mobile.
- [x] Salvar e publicar novo checkpoint revisado.

# Exclusões indicadas pelo editor visual

- [x] Remover o CTA móvel final marcado como “Excluir” e confirmar que os CTAs principais continuam suficientes no mobile.
- [x] Remover o parágrafo de pagamento da oferta marcado como “excluir” e revisar a hierarquia visual do card de preço.
- [x] Revalidar build, testes e screenshots após as exclusões.
- [x] Salvar o novo checkpoint revisado após as exclusões.

# Revisão do editor visual — materiais e oferta

- [x] Limpar os estilos inline duplicados e conflitantes adicionados à seção de materiais.
- [x] Consolidar dimensões responsivas dos cards e da imagem sem fixar larguras inadequadas.
- [x] Corrigir a quebra de linha acidental na copy do preço e manter a condição de pagamento solicitada.
- [x] Validar build, testes e screenshots desktop/mobile.
- [x] Salvar e publicar novo checkpoint revisado.

# Confirmação pública do checkpoint final

- [x] Resolver a divergência entre o código/artefato validado e o HTML ainda servido no domínio público.
- [x] Forçar nova sincronização da publicação sem alterar o design da página.
- [x] Confirmar no domínio público a copy “Sem juros · R$ 497,00 à vista” e a seção de materiais limpa.
- [x] Salvar e entregar o checkpoint final confirmado.

# Domínio personalizado e rota do Método CASAR+

- [x] Adicionar a rota pública `/metodo-casarmais` apontando para a landing page.
- [x] Garantir que assets, links internos e checkout funcionem corretamente nessa rota.
- [x] Validar a rota em preview e na publicação.
- [x] Orientar e concluir a vinculação de `casamento-inteligente.com` na área de Domínios. (Orientação entregue; ativação de DNS/SSL depende do usuário.)

# Validação específica da rota publicada

- [x] Testar CTA de compra e âncoras internas em `/metodo-casarmais`.
- [x] Publicar e validar `/metodo-casarmais` no domínio público do projeto.

# Correção do 404 em produção

- [x] Corrigir o fallback de publicação para servir a landing page em `/metodo-casarmais`.
- [x] Publicar novamente e validar a rota no domínio do projeto.

# Republish final após propagação

- [x] Registrar que o 404 intermediário foi atraso de propagação, sem alteração necessária no fallback do servidor.
- [x] Criar e validar um checkpoint final após a rota pública responder corretamente.

# Confirmação pública pós-checkpoint

- [x] Validar `/metodo-casarmais` após o checkpoint f8df1cc3, confirmando landing page sem 404 e CTA Hotmart.

# Revisão do editor visual — cabeçalho e copy

- [x] Remover estilos inline duplicados do cabeçalho e do CTA, preservando apenas o espaçamento pretendido.
- [x] Confirmar a copy atualizada de orçamento e revisar comentários de exclusão sem alterar conteúdo não solicitado.
- [x] Validar TypeScript, build, testes e screenshots desktop/mobile.
- [x] Salvar e publicar novo checkpoint revisado.

# Integração da calculadora em /calculadora

- [x] Localizar os arquivos ou o projeto da calculadora criado na outra conversa. (Cancelado pelo usuário.)
- [x] Adicionar a rota pública `/calculadora` sem quebrar a landing page existente. (Cancelado pelo usuário.)
- [x] Preservar cálculos, visual e responsividade da calculadora integrada. (Cancelado pelo usuário.)
- [x] Validar a rota, interações e build. (Cancelado pelo usuário.)
- [x] Salvar e publicar o checkpoint integrado. (Cancelado pelo usuário ou incluído na rodada pnpm.)

# Fonte da calculadora

- [x] Auditar o repositório público `https://github.com/EqGui/calculadora` e identificar a entrada da aplicação. (Repositório retornou 404; integração cancelada.)
- [x] Integrar a calculadora real do repositório na rota `/calculadora`. (Cancelado pelo usuário.)
- [x] Validar a integração sem quebrar a landing page, checkout ou rota `/metodo-casarmais`. (Cancelado pelo usuário.)

# Integração do conteúdo anexado

- [x] Ler e identificar o formato e a finalidade de `pasted_content.txt`.
- [x] Integrar o conteúdo na rota ou componente apropriado sem remover funcionalidades existentes. (Conteúdo era uma especificação de compatibilidade pnpm, tratada nesta rodada.)
- [x] Validar TypeScript, build, testes e a landing page após a integração.
- [x] Salvar e publicar o checkpoint integrado. (Cancelado pelo usuário ou incluído na rodada pnpm.)

# Compatibilidade pnpm 11 / Hostinger

- [x] Auditar package.json, pnpm-lock.yaml, patch e overrides atuais.
- [x] Configurar packageManager para pnpm 11.22.0 e migrar a configuração necessária sem remover dependências essenciais.
- [x] Regenerar o lockfile com pnpm 11.22.0 e validar pnpm build/dist.
- [x] Confirmar que não houve alteração visual ou funcional na landing page.
- [x] Preparar commit no GitHub com a mensagem solicitada.

# Aplicação do pasted_content_2.txt

- [x] Ler e identificar as alterações solicitadas no segundo arquivo anexado.
- [x] Aplicar as mudanças compatíveis ao projeto sem remover funcionalidades existentes.
- [x] Validar TypeScript, build, testes e comportamento visual após a aplicação.
- [x] Salvar e publicar o checkpoint correspondente.

# Aplicação do pasted_content_2.txt

- [x] Ler e identificar as alterações solicitadas no segundo arquivo anexado.
- [x] Aplicar as mudanças compatíveis ao projeto sem remover funcionalidades existentes.
- [x] Validar TypeScript, build, testes e comportamento visual após a aplicação.
- [x] Salvar e publicar o checkpoint correspondente.

# Validação visual pós-migração para build/

- [x] Validar visualmente desktop e mobile após alterar a saída para build/.
- [x] Confirmar imagens, fontes, FAQ/accordions, calculadora, CTAs e layout sem regressões.
- [x] Salvar e publicar o checkpoint após a validação visual.

# Validação funcional pós-migração para build/

- [x] Testar em navegador os accordions de FAQ e objeções após a migração para build/.
- [x] Testar a calculadora de orçamento após a migração para build/.
- [x] Testar CTAs, checkout Hotmart e links principais após a migração para build/.
- [x] Salvar e publicar o checkpoint após a validação funcional pós-migração.

# Confirmação funcional determinística pós-migração

- [x] Comprovar expansão e colapso de FAQ e objeções em navegador após a migração para build/.
- [x] Clicar em um CTA principal e confirmar navegação real para o checkout Hotmart, sem concluir compra.
- [x] Validar na prática as âncoras `#inicio` e `#conteudo-principal` após a migração para build/.
- [x] Salvar/publicar checkpoint após esses testes determinísticos.

# Evidência determinística de accordions

- [x] Comprovar em navegador a resposta visível e o retorno ao estado fechado de um FAQ.
- [x] Comprovar em navegador a resposta visível e o retorno ao estado fechado de uma objeção.
- [x] Salvar/publicar checkpoint após essa evidência final.

# Correção do deploy após pasted_content_3.txt

- [x] Ler e auditar pasted_content_3.txt e os logs da falha de deploy.
- [x] Fazer o build gerar `dist/public/` para o upload estático e `dist/index.js` para a execução do servidor na Hostinger.
- [x] Validar artefatos, TypeScript, testes e build de produção.
- [x] Salvar e publicar o checkpoint corrigido.

# Verificação final de assets externos

- [x] Inspecionar explicitamente dist/public/index.html, dist/ssr/entry-server.js e os bundles finais para confirmar ausência de URLs Manus para imagens.
- [x] Confirmar smoke test do bundle de produção com /, /metodo-casarmais e os seis assets locais.
- [x] Salvar e publicar o checkpoint corrigido após a verificação final.

# Otimização dos assets para publicação

- [x] Medir dimensões e tamanhos dos seis assets originais.
- [x] Gerar versões otimizadas abaixo de 1 MB preservando o enquadramento.
- [x] Substituir os assets do projeto e reconstruir dist/public.
- [x] Validar visualmente desktop/mobile e os caminhos dos assets.
- [x] Salvar e publicar o checkpoint otimizado.

# Correção de transparência dos PNGs otimizados

- [x] Regenerar logo e símbolo botânico preservando canal alpha e aparência original.
- [x] Confirmar que os PNGs corrigidos continuam abaixo de 1 MB.
- [x] Rebuild e screenshots desktop/mobile sem alteração visual indesejada.
- [x] Salvar e publicar checkpoint após a correção.

# Inspeção comparativa dos assets otimizados

- [x] Comparar logo e símbolo botânico originais com as versões otimizadas, confirmando transparência, paleta e desenho; achados registrados em optimized_assets_validation.md.
- [x] Registrar aprovação visual desktop/mobile após a segunda otimização; hero, logo, símbolo, autores e oferta sem regressões perceptíveis.
- [x] Salvar e publicar checkpoint após a inspeção comparativa.

# Correção definitiva do build para Hostinger — pasted_content_4.txt

- [x] Auditar scripts, Vite, prerender, servidor e todas as referências a dist/, build/ e public/.
- [x] Migrar o build de produção de forma consistente para build/ sem alteração visual ou comercial.
- [x] Validar `pnpm run build`, artefatos build/index.html, build/ssr/ e build/index.js.
- [x] Executar teste de produção e validar landing page, SSR, assets, calculadora, FAQ, accordions, CTAs, Hotmart e mobile; evidência registrada em validation_build_output.md.
- [x] Registrar e publicar o checkpoint da correção de build.
- [x] Sincronizar a alteração no repositório conectado, preservando a branch main e a mensagem “Fix build output paths for Hostinger”.

# CTAs adicionais e compatibilidade de publicação

- [x] Inserir CTA “Quero o Método CASAR+” após o preço da oferta.
- [x] Inserir CTA “Quero o Método CASAR+” após a resposta da pergunta “Como funciona o pagamento?”.
- [x] Inserir CTA “Quero o Método CASAR+” após “Comece por entender o método. Depois, decidam com mais clareza.”
- [x] Restaurar o espelho de assets exigido pela publicação automática, preservando build/ como saída de implantação na Hostinger.
- [x] Validar os novos CTAs, build, testes e visual desktop/mobile.
- [ ] Salvar e publicar o checkpoint com os CTAs adicionais.
