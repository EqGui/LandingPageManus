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
