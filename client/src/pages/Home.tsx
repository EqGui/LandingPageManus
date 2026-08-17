/* Página: conversão editorial para o Método CASAR+ — a hierarquia conduz da dor à decisão, com marfim, sálvia e dourado como linguagem de confiança. */
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  FileText,
  HandCoins,
  HeartHandshake,
  Landmark,
  LockKeyhole,
  Minus,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";

const logoUrl = "/manus-storage/logo-casamento-inteligente_9ffa292e.png";
const heroUrl = "/manus-storage/casar-hero-editorial_05185287.jpg";
const planningUrl = "/manus-storage/casar-planning-table_fc5f54e7.jpg";
const receptionUrl = "/manus-storage/casar-reception-detail_d3e56c34.jpg";
const botanicalUrl = "/manus-storage/casar-botanical-symbol_8637a981.png";

const methodSteps = [
  { letter: "C", title: "Controle do orçamento", text: "Organize limites, prioridades e decisões antes de começar a contratar.", Icon: WalletCards },
  { letter: "A", title: "Análise de fornecedores", text: "Leia propostas pelo que está incluso — e pelo que ficou de fora.", Icon: Search },
  { letter: "S", title: "Seleção inteligente", text: "Compare escopo, qualidade, prazo e condições sem decidir só pelo preço.", Icon: ClipboardCheck },
  { letter: "A", title: "Aprendizado de negociação", text: "Leve perguntas e critérios para buscar condições melhores com respeito.", Icon: HandCoins },
  { letter: "R", title: "Redução de desperdícios", text: "Identifique custos que não protegem a experiência que vocês querem criar.", Icon: Target },
];

const learningBlocks = [
  ["Orçamento com prioridade", "Defina o que merece investimento e o que pode ser simplificado sem perder significado."],
  ["Pesquisa que economiza tempo", "Saiba quais perguntas fazer e como coletar propostas que realmente possam ser comparadas."],
  ["Propostas sob a mesma lente", "Observe escopo, taxas, entregas, prazos, multas e reajustes antes de decidir."],
  ["Negociação com método", "Prepare conversas para buscar ajustes de valor, condições, benefícios ou escopo."],
  ["Contrato e acompanhamento", "Conheça pontos que merecem atenção e registre o que foi combinado até o pagamento final."],
];

const materials = [
  { label: "Curso completo", title: "Método CASAR+", copy: "O caminho em aulas para aplicar cada decisão com uma ordem clara.", Icon: BookOpen, tone: "olive" },
  { label: "Ferramenta", title: "Planner Financeiro", copy: "Visibilidade para orçamento, prioridades e pagamentos do casamento.", Icon: WalletCards, tone: "sand" },
  { label: "Ferramenta", title: "Radar CI", copy: "Critérios para avaliar fornecedores e não se perder entre propostas.", Icon: Search, tone: "paper" },
  { label: "Material de apoio", title: "Guia de negociação", copy: "Perguntas e pontos de preparação para chegar mais seguro à conversa.", Icon: HandCoins, tone: "gold" },
  { label: "Material de apoio", title: "Checklists e calculadora", copy: "Apoio para organizar escolhas e visualizar uma distribuição de orçamento.", Icon: Calculator, tone: "sage" },
];

const objections = [
  ["“Mas eu já contratei alguns fornecedores.”", "Ainda há decisões futuras, pagamentos, ajustes de escopo e contratos que podem ser vistos com mais critério."],
  ["“Meu casamento não tem um orçamento alto.”", "A estratégia não depende de um orçamento mínimo. Ela ajuda a usar melhor aquilo que faz sentido para vocês."],
  ["“Meu casamento é pequeno ou grande. Isso serve para mim?”", "Sim. O método não define o tamanho da celebração; ele ajuda o casal a avaliar orçamento, fornecedores e prioridades de acordo com a realidade que escolheu."],
  ["“Eu não sei negociar.”", "O método parte justamente desse ponto: preparação, perguntas e critérios antes de qualquer conversa."],
  ["“Eu já tenho assessoria.”", "Uma assessoria pode ser complementar. O método ajuda o casal a entender escolhas e participar delas com mais clareza."],
  ["“Meu casamento é daqui a poucos meses.”", "Quanto mais perto da data, mais importante é saber onde concentrar atenção e reduzir decisões feitas sob pressão."],
];

const faqs = [
  ["Para quem é o Método CASAR+?", "Para casais que estão planejando um casamento e querem organizar orçamento, comparar fornecedores e negociar com mais segurança."],
  ["Como funciona o Método CASAR+?", "O método organiza o planejamento em cinco frentes: controle do orçamento, análise de fornecedores, comparação, negociação e redução de desperdícios."],
  ["Funciona para qualquer orçamento?", "O método se adapta à realidade de cada casal. O resultado financeiro varia conforme orçamento, região, fornecedores, momento da contratação e decisões tomadas."],
  ["Funciona se eu já tiver contratado fornecedores?", "Sim. Você pode aplicar o método nas próximas contratações, na revisão de propostas, em ajustes, pagamentos e escolhas que ainda estão por vir."],
  ["Preciso ter experiência com negociação?", "Não. O conteúdo foi construído para começar pela preparação e avançar por critérios simples e aplicáveis."],
  ["O método substitui uma assessoria?", "Não. Ele é uma ferramenta de decisão para o casal. Pode complementar uma assessoria, mas não substitui o trabalho profissional de planejamento ou execução."],
  ["Posso fazer junto com meu noivo ou minha noiva?", "Sim. O método foi pensado para apoiar conversas e decisões compartilhadas do casal."],
  ["Quando devo começar?", "Idealmente antes de contratar os principais fornecedores. Ainda assim, é útil em qualquer momento para organizar o que falta decidir."],
  ["Como recebo o acesso?", "O acesso e as instruções de entrada serão enviados pela plataforma de pagamento após a confirmação da compra."],
  ["Quanto tempo tenho de acesso?", "A condição de acesso será informada de forma clara no checkout oficial antes do pagamento."],
  ["Existe garantia?", "Você tem sete dias para conhecer o método e solicitar reembolso conforme as condições apresentadas pela plataforma de pagamento."],
  ["Como funciona o pagamento?", "As opções disponíveis serão exibidas no checkout oficial. A página não apresenta condições que não tenham sido configuradas na plataforma."],
];

function emitConversionEvent(event: string, label: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("casarplus:conversion", { detail: { event, label } }));
  }
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openObjection, setOpenObjection] = useState<number | null>(0);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [budget, setBudget] = useState("30000");
  const totalBudget = Math.max(0, Number(budget.replace(/\D/g, "")) || 0);

  const budgetMap = useMemo(() => [
    ["Recepção e alimentação", 0.42],
    ["Foto e filmagem", 0.12],
    ["Trajes e beleza", 0.10],
    ["Decoração e flores", 0.11],
    ["Cerimônia e demais escolhas", 0.25],
  ] as const, []);

  useEffect(() => {
    emitConversionEvent("page_view", "landing_casarplus");
  }, []);

  function openCheckout(label: string) {
    emitConversionEvent("checkout_start", label);
    toast.info("O checkout ainda precisa ser conectado.", {
      description: "Ao enviar a URL de pagamento, todos os CTAs poderão encaminhar diretamente para a inscrição.",
    });
  }

  function revealCalculator() {
    setCalculatorOpen(true);
    emitConversionEvent("calculator_open", "simulador_orcamento");
  }

  return (
    <div className="overflow-hidden bg-[#f8f5ed] pb-20 text-[#283121] md:pb-0">
      {/* Pontos de integração: evento customizado casarplus:conversion para page_view, cta_click, calculator_open e checkout_start. O evento purchase deve ser enviado pelo checkout integrado. */}
      <a href="#conteudo-principal" className="sr-only absolute left-4 top-4 z-[60] rounded bg-[#283121] px-4 py-3 text-sm font-bold text-[#fff9eb] focus:not-sr-only">Pular para o conteúdo principal</a>
      <div className="bg-[#283121] px-4 py-2.5 text-center text-[0.65rem] font-extrabold tracking-[0.12em] text-[#f7e7bd] uppercase sm:text-xs">
        Método CASAR+ · De R$ 997 por <span className="text-[#e4bb6b]">R$ 497</span>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#dfd5c0]/90 bg-[#f8f5ed]/95 backdrop-blur-xl">
        <div className="container flex h-[4.7rem] items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2.5" aria-label="Casamento Inteligente, início">
            <img src={logoUrl} alt="Logo Casamento Inteligente" width={48} height={48} decoding="async" className="h-12 w-12 rounded-full border border-[#c79c53]/40 bg-white object-cover shadow-sm" />
            <span className="hidden leading-none sm:block"><span className="block font-display text-[1.08rem]">Casamento</span><span className="block text-[0.6rem] font-extrabold tracking-[0.18em] text-[#9a7134] uppercase">Inteligente</span></span>
          </a>
          <nav aria-label="Ação principal" className="flex"><a href="#oferta" data-analytics-event="cta_click" data-analytics-label="header" className="btn-primary whitespace-nowrap px-3 py-2.5 text-[0.68rem] sm:px-5 sm:text-xs">Quero o Método CASAR+ <ArrowRight className="h-3.5 w-3.5" /></a></nav>
        </div>
      </header>

      <main id="conteudo-principal">
      <section id="inicio" aria-labelledby="titulo-principal" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_92%_14%,rgba(184,138,59,.17),transparent_18rem),radial-gradient(circle_at_8%_85%,rgba(97,116,79,.10),transparent_25rem)]" />
        <div className="container grid min-h-[630px] items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div className="relative z-10 py-3 lg:py-12">
            <p className="section-kicker">Método de decisão, economia e negociação</p>
            <span className="casar-seal mt-4"><img src={botanicalUrl} alt="" className="h-4 w-4 object-contain" /> Curadoria CASAR+</span>
            <h1 id="titulo-principal" className="mt-6 max-w-[760px] font-display text-[3.1rem] leading-[.92] tracking-[-.045em] text-[#263020] sm:text-6xl lg:text-[4.55rem]">Seu casamento pode custar menos sem parecer um casamento barato.</h1>
            <p className="mt-7 max-w-xl text-[1rem] leading-7 text-[#536048] sm:text-[1.08rem]">Aprenda a planejar, comparar fornecedores e negociar melhor para economizar no orçamento do seu casamento — sem abrir mão da qualidade e do que importa para vocês.</p>
            <p className="mt-5 flex items-center gap-2 text-sm font-bold text-[#45543b]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7d3a6] text-[#816133]"><Sparkles className="h-3.5 w-3.5" /></span> Conheça o <strong>Método CASAR+</strong>, um processo para decidir com estratégia.</p>
            <div className="mt-8 flex">
              <a href="#oferta" data-analytics-event="cta_click" data-analytics-label="hero" className="btn-primary">Quero o Método CASAR+ <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-7 grid max-w-xl grid-cols-2 gap-x-4 gap-y-3 border-t border-[#d8cdaF] pt-5 text-xs font-bold text-[#617057] sm:grid-cols-4">
              {[[BadgeCheck, "Acesso imediato"], [BookOpen, "Conteúdo prático"], [ClipboardCheck, "Ferramentas aplicáveis"], [ShieldCheck, "Garantia de 7 dias"]].map(([Icon, text]) => {
                const FeatureIcon = Icon as typeof BadgeCheck;
                return <span key={text as string} className="flex items-center gap-2"><FeatureIcon className="h-4 w-4 shrink-0 text-[#b4863d]" />{text as string}</span>;
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] pb-9 lg:pb-0">
            <div className="absolute -right-6 -top-6 h-44 w-44 rounded-full border border-[#b98d4a]/40 sm:h-56 sm:w-56" />
            <div className="absolute -bottom-2 -left-6 h-28 w-28 rounded-full border border-[#687858]/30" />
            <div className="relative overflow-hidden rounded-t-[10rem] rounded-br-[1.8rem] rounded-bl-[1.8rem] border border-[#d8c79f]/80 bg-[#e9e4d7] p-2.5 shadow-[0_30px_65px_rgba(47,53,39,.16)]">
              <img src={heroUrl} alt="Casal avaliando detalhes do casamento com tranquilidade" width={1120} height={1010} fetchPriority="high" loading="eager" decoding="async" className="h-[415px] w-full rounded-t-[9.3rem] rounded-br-[1.3rem] rounded-bl-[1.3rem] object-cover sm:h-[505px]" />
              <div className="absolute inset-x-2.5 bottom-2.5 rounded-br-[1.25rem] rounded-bl-[1.25rem] bg-gradient-to-t from-[#1d261a]/78 via-[#1d261a]/8 to-transparent p-6 pt-28 text-[#fffdf5]"><p className="font-display text-xl italic">“O problema não é gastar. É gastar sem estratégia.”</p></div>
            </div>
            <div className="absolute -bottom-3 -left-2 w-[205px] rounded-[1rem] border border-[#d0bd91]/70 bg-[#fffdf7] p-4 shadow-[0_16px_35px_rgba(48,54,38,.12)] sm:-left-10">
              <p className="text-[0.6rem] font-extrabold tracking-[.15em] text-[#9a7237] uppercase">O que muda</p><p className="mt-2 font-display text-lg leading-5 text-[#35432d]">Decisão baseada em critérios, não em pressão.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="border-y border-[#d8cba9] bg-[#ede4d1] py-18 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28"><p className="section-kicker">O custo invisível da pressa</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">Você pode estar perdendo dinheiro sem perceber.</h2><p className="mt-6 text-base leading-7 text-[#58624e]">Organizar um casamento não é só escolher flores e fornecedores. É interpretar propostas, decidir prioridades e sustentar escolhas que cabem no futuro do casal.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Receber vários orçamentos e não saber qual proposta é realmente melhor.", "Escolher pelo menor preço e descobrir taxas ou custos extras depois.", "Aceitar um escopo sem comparar a entrega com outras opções.", "Não saber o que perguntar — muito menos como negociar.", "Assinar um contrato sem enxergar pontos importantes.", "Ver o orçamento crescer com decisões pequenas e desconectadas."].map((item, index) => <article key={item} className={`relative min-h-[144px] border p-5 ${index === 0 ? "bg-[#31402a] text-[#fff9eb] sm:col-span-2" : "bg-[#faf6eb] text-[#47543d]"}`}><span className={`font-display text-3xl ${index === 0 ? "text-[#e1bb70]" : "text-[#a67d3e]"}`}>0{index + 1}</span>{index === 0 && <img src={botanicalUrl} alt="" className="absolute right-5 top-5 h-12 w-12 object-contain opacity-70" />}<p className={`mt-5 max-w-md text-sm font-bold leading-6 ${index === 0 ? "text-[#ece8d5]" : "text-[#526047]"}`}>{item}</p></article>)}
            <div className="sm:col-span-2"><p className="border-l-2 border-[#b88a3b] py-3 pl-5 font-display text-2xl italic text-[#3c4931]">O problema não é o seu orçamento. É tomar decisões sem uma estratégia.</p></div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="relative overflow-hidden bg-[#f8f5ed] py-22 sm:py-28">
        <div className="absolute -right-20 top-12 h-72 w-72 rounded-full border border-[#b88a3b]/25" />
        <div className="container relative"><div className="grid gap-7 lg:grid-cols-[1fr_.72fr] lg:items-end"><div><p className="section-kicker">A metodologia própria do curso</p><h2 className="mt-6 max-w-3xl font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">CASAR+ transforma escolhas soltas em um processo de decisão.</h2></div><p className="max-w-md text-base leading-7 text-[#596450]">Você não precisa saber tudo sobre casamento. Precisa enxergar o que comparar, o que perguntar e em que momento agir.</p></div>
          <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><p className="editorial-tab">“O método organiza a conversa antes de organizar a planilha.”</p><span className="casar-seal shrink-0"><img src={botanicalUrl} alt="" className="h-4 w-4 object-contain" /> 5 decisões-chave</span></div>
          <div className="mt-8 grid gap-px overflow-hidden border border-[#d5c49e] bg-[#d5c49e] md:grid-cols-5">
            {methodSteps.map(({ letter, title, text, Icon }, index) => <article key={`${letter}-${title}`} className={`relative min-h-[270px] p-6 ${index === 0 ? "bg-[#2d3b27] text-[#fff9eb]" : "bg-[#fcf9f0] text-[#34402b]"}`}><div className="flex items-start justify-between"><span className={`font-display text-5xl ${index === 0 ? "text-[#e2b96d]" : "text-[#a97d39]"}`}>{letter}</span><Icon className={`h-5 w-5 ${index === 0 ? "text-[#e4c37c]" : "text-[#697557]"}`} /></div><h3 className="mt-12 font-display text-2xl leading-[1.02]">{title}</h3><p className={`mt-4 text-sm leading-6 ${index === 0 ? "text-[#e5e7d7]" : "text-[#64705c]"}`}>{text}</p></article>)}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#d7c9a8] pt-6 sm:flex-row sm:items-center"><p className="font-display text-xl italic text-[#536047]">O método não escolhe por vocês. Ele torna a escolha mais consciente.</p><a href="#oferta" className="btn-primary shrink-0">Quero o Método CASAR+ <ArrowRight className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section className="bg-[#293222] py-22 text-[#fff9eb] sm:py-28">
        <div className="container"><div className="grid gap-8 lg:grid-cols-[.74fr_1.26fr] lg:items-end"><div><p className="section-kicker !text-[#d8d1b6] before:!bg-[#d8b26b]">Economia não é um chute</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] sm:text-5xl">Veja como uma decisão mais inteligente pode nascer.</h2></div><p className="max-w-xl text-base leading-7 text-[#d7deca]">Não se trata de prometer um percentual. A economia pode surgir quando vocês analisam o que recebem, comparam alternativas e negociam um escopo coerente com as prioridades.</p></div>
          <div className="mt-8 flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7b875]/45 bg-[#35422d]"><img src={botanicalUrl} alt="" className="h-8 w-8 object-contain" /></span><p className="font-display text-lg italic text-[#d9d4bb]">Economia começa quando o casal enxerga o que está escolhendo.</p></div>
          <div className="mt-8 grid gap-3 md:grid-cols-7 md:items-stretch">
            {["Orçamento recebido", "Análise do escopo", "Custos desnecessários", "Comparação de propostas", "Estratégia de negociação", "Ajuste de condições", "Decisão mais inteligente"].map((step, index) => <div key={step} className="relative flex min-h-[132px] items-end border border-[#d4ba84]/30 bg-[#35422d] p-5"><span className="absolute left-5 top-4 font-display text-2xl text-[#d9b76f]">0{index + 1}</span><p className="text-sm font-bold leading-5 text-[#f6f0dc]">{step}</p>{index < 6 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#d4b269] p-1.5 text-[#293222] md:block" />}</div>)}
          </div>
          <p className="mt-7 text-xs leading-5 text-[#c4cfb6]">Resultados financeiros variam conforme orçamento, fornecedores, região, prazo de contratação e decisões tomadas. O Método CASAR+ ensina o processo — não promete economia garantida.</p>
        </div>
      </section>

      <section className="py-22 sm:py-28"><div className="container grid gap-12 lg:grid-cols-[.84fr_1.16fr] lg:items-start"><div className="relative mx-auto w-full max-w-[400px] lg:mx-0"><div className="absolute -left-7 top-12 h-48 w-48 rounded-full bg-[#d5c18f]/30 blur-3xl" /><div className="relative overflow-hidden rounded-t-[8rem] rounded-br-[1.5rem] rounded-bl-[1.5rem] border border-[#d5c9b0] p-2.5 shadow-[0_20px_48px_rgba(50,58,40,.10)]"><img src={planningUrl} alt="Casal avaliando documentos do planejamento do casamento" width={800} height={1000} loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-t-[7.5rem] rounded-br-[1rem] rounded-bl-[1rem] object-cover" /></div></div><div><p className="section-kicker">Clareza sobre o encaixe</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">Esse método é para você se...</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Está planejando seu casamento e quer organizar o orçamento.", "Recebeu propostas e não sabe qual escolher.", "Quer negociar com fornecedores sem improvisar.", "Quer evitar gastos desnecessários sem reduzir a qualidade.", "Quer ter segurança para participar das decisões.", "Quer comparar ‘maçãs com maçãs’ antes de contratar."].map(item => <p key={item} className="flex gap-3 border-b border-[#ddd3bd] pb-4 text-sm font-bold leading-6 text-[#4c5942]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b68940]" />{item}</p>)}</div><div className="mt-10 border-l-2 border-[#b88a3b] bg-[#f1e7d1] p-6"><p className="font-display text-2xl text-[#35432c]">Não é para você se...</p><p className="mt-3 text-sm leading-6 text-[#606a57]">quer apenas contratar o fornecedor mais barato, não deseja participar das decisões ou procura uma assessoria para fazer tudo por você.</p></div></div></div></section>

      <section className="border-y border-[#d9cdaF] bg-[#eee6d4] py-22 sm:py-28"><div className="container"><p className="section-kicker">O que você vai aprender</p><div className="mt-6 grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><h2 className="font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">O conteúdo não é uma lista de aulas. É um repertório para decidir melhor.</h2><p className="max-w-xl text-base leading-7 text-[#5c6653]">Cada etapa oferece uma forma mais objetiva de lidar com planejamento de casamento, orçamento para casamento, fornecedores e negociação.</p></div><div className="mt-12 divide-y divide-[#cfc09c] border-y border-[#cfc09c]">{learningBlocks.map(([title, text], index) => <article key={title} className="grid gap-4 py-6 sm:grid-cols-[70px_1fr_1.4fr] sm:items-center"><span className="font-display text-4xl text-[#ad803a]">0{index + 1}</span><h3 className="font-display text-2xl text-[#34422d]">{title}</h3><p className="text-sm leading-6 text-[#626d58]">{text}</p></article>)}</div></div></section>

      <section id="materiais" className="bg-[#fbf8f0] py-22 sm:py-28"><div className="container"><div className="grid gap-7 lg:grid-cols-[.86fr_1.14fr] lg:items-end"><div><p className="section-kicker">O que você recebe</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2d3827] sm:text-5xl">Você não recebe apenas aulas. Recebe ferramentas para colocar o método em prática.</h2></div><p className="max-w-lg text-base leading-7 text-[#596450]">O curso e os materiais foram organizados para acompanhar cada decisão, antes, durante e depois da contratação.</p></div><div className="mt-7 flex items-center justify-between gap-5"><p className="editorial-tab">Materiais para dar forma às conversas, não para criar mais uma lista de tarefas.</p><span className="casar-seal hidden sm:inline-flex"><img src={botanicalUrl} alt="" className="h-4 w-4 object-contain" /> Kit de aplicação</span></div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-6">{materials.map(({ label, title, copy, Icon, tone }, index) => <article key={title} className={`relative min-h-[275px] overflow-hidden border p-6 shadow-[0_15px_35px_rgba(50,58,40,.06)] ${tone === "olive" ? "bg-[#2e3d28] text-[#fff9eb]" : tone === "gold" ? "bg-[#dec58b] text-[#33402c]" : tone === "sage" ? "bg-[#dce2d1] text-[#33402c]" : tone === "sand" ? "bg-[#eadcc0] text-[#33402c]" : "bg-[#fffdf6] text-[#33402c]"} ${index === 0 ? "md:col-span-2 lg:col-span-2 lg:min-h-[335px]" : "lg:col-span-1"}`}>
              {index === 0 && <><img src={receptionUrl} alt="Detalhes de uma celebração com flores e tons de oliveira" width={1200} height={800} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity" /><div className="absolute inset-0 bg-gradient-to-tr from-[#24331e]/85 via-[#2e3d28]/76 to-[#2e3d28]/15" /></>}
              <div className="relative z-10"><p className={`text-[0.62rem] font-extrabold tracking-[.16em] uppercase ${tone === "olive" ? "text-[#dfbd78]" : "text-[#93703a]"}`}>{label}</p><div className={`mt-10 flex h-12 w-12 items-center justify-center rounded-full border ${tone === "olive" ? "border-[#d9b76f]/40 text-[#e4c477]" : "border-[#b88a3b]/45 text-[#8d6a35]"}`}><Icon className="h-5 w-5" /></div><h3 className="mt-8 font-display text-2xl leading-[1.02]">{title}</h3><p className={`mt-4 max-w-sm text-sm leading-6 ${tone === "olive" ? "text-[#dce4ce]" : "text-[#5d6854]"}`}>{copy}</p></div><span className="absolute bottom-5 right-5 z-10 font-display text-3xl opacity-20">0{index + 1}</span></article>)}</div></div></section>

      <section id="calculadora" className="relative overflow-hidden bg-[#2d3b27] py-22 text-[#fff9eb] sm:py-28"><div className="absolute -right-16 top-0 h-80 w-80 rounded-full border border-[#d7b875]/25" /><div className="container relative grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center"><div><p className="section-kicker !text-[#d9d4bb] before:!bg-[#d9b76f]">Ferramenta de valor imediato</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] sm:text-5xl">Antes de contratar, descubra quanto faz sentido investir.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#d7dec9]">A calculadora ajuda vocês a visualizar uma distribuição inicial do orçamento. É uma estimativa ilustrativa, não uma recomendação financeira ou um orçamento fechado.</p><button onClick={revealCalculator} data-analytics-event="calculator_open" className="btn-gold mt-8">Calcular meu orçamento <Calculator className="h-4 w-4" /></button></div>
        <div className="border border-[#d7b875]/35 bg-[#384832] p-5 shadow-[0_24px_55px_rgba(0,0,0,.16)] sm:p-7"><div className="flex items-center justify-between border-b border-[#d8bf88]/25 pb-4"><span className="text-[0.65rem] font-extrabold tracking-[.16em] text-[#e2c47e] uppercase">Simulador de distribuição</span><img src={botanicalUrl} alt="" className="h-10 w-10 object-contain" /></div>{calculatorOpen ? <div className="pt-6"><label className="text-xs font-bold text-[#dce4cc]" htmlFor="budget">Orçamento total estimado</label><div className="mt-2 flex items-center gap-3 border-b border-[#d8bf88]/45 pb-4"><span className="font-display text-2xl text-[#e5c77f]">R$</span><input id="budget" inputMode="numeric" value={budget} onChange={(event) => setBudget(event.target.value)} className="w-full bg-transparent font-display text-4xl text-[#fff9eb] outline-none" aria-describedby="budget-note" /></div><div className="mt-6 space-y-3">{budgetMap.map(([label, ratio]) => <div key={label} className="grid grid-cols-[1.3fr_.8fr] gap-4 border-b border-[#d8bf88]/15 pb-3 text-sm"><span className="text-[#dce3ce]">{label}</span><span className="text-right font-bold text-[#f4e8c9]">{formatCurrency(totalBudget * ratio)}</span></div>)}</div><p id="budget-note" className="mt-5 text-xs leading-5 text-[#c6d0b8]">Exemplo de distribuição. Ajuste as categorias à realidade, ao estilo e às prioridades do casal.</p></div> : <div className="flex min-h-[240px] flex-col justify-center"><Calculator className="h-10 w-10 text-[#e2bf78]" /><p className="mt-5 font-display text-3xl">Comece por uma estimativa simples.</p><p className="mt-3 max-w-md text-sm leading-6 text-[#d0dbc2]">Informe um orçamento e veja uma leitura inicial de distribuição para orientar a conversa do casal.</p></div>}</div></div></section>

      <section className="py-22 sm:py-28"><div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div><p className="section-kicker">Exemplo prático de comparação</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">O menor preço não é automaticamente a melhor proposta.</h2><p className="mt-6 max-w-xl text-base leading-7 text-[#5b6552]">O Método CASAR+ ajuda vocês a comparar “maçãs com maçãs”: não basta olhar o total, é preciso ver o que cada fornecedor está se comprometendo a entregar.</p><p className="mt-7 border-l-2 border-[#b88a3b] py-2 pl-5 text-sm font-bold leading-6 text-[#4a5840]">Exemplo ilustrativo para demonstrar a lógica de comparação. Não representa fornecedores ou propostas reais.</p></div><div className="overflow-hidden border border-[#d4c29c] bg-[#fffdf7] shadow-[0_20px_45px_rgba(50,58,40,.08)]"><div className="grid grid-cols-[1.25fr_.88fr_.88fr] bg-[#e9dfc9] text-xs font-extrabold text-[#59614d]"><span className="p-4">Critério</span><span className="border-l border-[#d0c09e] p-4 text-center">Fornecedor A<br /><strong className="font-display text-xl text-[#32402b]">R$ 8.500</strong></span><span className="border-l border-[#d0c09e] p-4 text-center">Fornecedor B<br /><strong className="font-display text-xl text-[#32402b]">R$ 7.900</strong></span></div>{[["Escopo", "8 horas", "6 horas"], ["Quantidade", "Completa", "Limitada"], ["Prazo", "Definido", "A confirmar"], ["Pagamento", "Parcelado", "Entrada maior"], ["Itens adicionais", "Descritos", "A consultar"], ["Multas e reajustes", "Detalhados", "A revisar"]].map(([field, a, b], index) => <div key={field} className={`grid grid-cols-[1.25fr_.88fr_.88fr] text-sm ${index % 2 === 0 ? "bg-[#fffdf7]" : "bg-[#f7f2e6]"}`}><span className="p-4 font-bold text-[#526047]">{field}</span><span className="border-l border-[#e4dcc8] p-4 text-center text-[#64705a]">{a}</span><span className="border-l border-[#e4dcc8] p-4 text-center text-[#64705a]">{b}</span></div>)}<div className="border-t border-[#d4c29c] bg-[#31402b] p-5 text-sm leading-6 text-[#eef0df]"><span className="font-extrabold text-[#e2bd72]">A pergunta não é “qual é o mais barato?”.</span> A pergunta é: “qual proposta faz sentido depois de comparar escopo, condições e riscos?”</div></div></div></section>

      <section className="bg-[#eee6d3] py-22 sm:py-28"><div className="container"><div className="grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="section-kicker">Antes e depois do método</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">Sair do “será que estou pagando caro?” para “sei o que comparar”.</h2></div><p className="max-w-xl text-base leading-7 text-[#5e6755]">A mudança não está em eliminar todas as dúvidas. Está em ter um processo para fazer perguntas melhores antes de decidir.</p></div><div className="mt-12 grid overflow-hidden border border-[#cfbf99] md:grid-cols-2"><div className="bg-[#fcf9ef] p-7 sm:p-9"><p className="text-[0.65rem] font-extrabold tracking-[.17em] text-[#9d753a] uppercase">Antes</p><div className="mt-7 space-y-4">{["Será que estou pagando caro?", "Qual fornecedor devo escolher?", "Não sei negociar.", "Tenho medo de assinar o contrato.", "Meu orçamento está aumentando."].map(text => <p key={text} className="flex gap-3 font-display text-xl text-[#5e6757]"><Minus className="mt-1 h-4 w-4 text-[#b88a3b]" />{text}</p>)}</div></div><div className="bg-[#31402b] p-7 text-[#fff9eb] sm:p-9"><p className="text-[0.65rem] font-extrabold tracking-[.17em] text-[#dfbb70] uppercase">Depois</p><div className="mt-7 space-y-4">{["Sei o que comparar.", "Entendo o meu orçamento.", "Tenho uma estratégia de negociação.", "Sei quais pontos analisar.", "Tenho mais controle sobre meu dinheiro."].map(text => <p key={text} className="flex gap-3 font-display text-xl"><Check className="mt-1 h-4 w-4 text-[#e1bd72]" />{text}</p>)}</div></div></div></div></section>

      <section id="criadores" className="relative overflow-hidden bg-[#fbf8f0] py-22 sm:py-28"><div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div className="relative mx-auto flex min-h-[310px] w-full max-w-[400px] items-center justify-center overflow-hidden border border-[#d4c4a0] bg-[#e9dfca] p-8"><div className="absolute -right-12 -top-10 h-52 w-52 rounded-full border border-[#b88a3b]/35" /><div className="relative text-center"><span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#b88a3b]/50 bg-[#fffaf0] shadow-[0_15px_30px_rgba(50,58,40,.1)]"><img src={logoUrl} alt="Casamento Inteligente" className="h-20 w-20 rounded-full object-cover" /></span><p className="mt-7 font-display text-3xl text-[#33412c]">Guilherme<br />& Mariana</p><p className="mt-3 text-[0.65rem] font-extrabold tracking-[.18em] text-[#97703a] uppercase">Criadores do Casamento Inteligente</p></div></div><div><p className="section-kicker">Quem criou o método</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">A experiência de planejar também pode ensinar um jeito mais consciente de decidir.</h2><div className="mt-6 space-y-4 text-base leading-7 text-[#5b6651]"><p>Somos Guilherme e Mariana e também estamos vivendo a experiência de planejar um casamento. Ao longo desse processo, percebemos como decisões aparentemente pequenas podem criar diferenças relevantes no orçamento.</p><p>O Casamento Inteligente nasceu para organizar essas escolhas e ajudar outros casais a olhar para fornecedores, propostas e negociações com mais clareza, proximidade e transparência.</p></div><div className="mt-7 flex items-center gap-3 border-t border-[#d9ceb7] pt-6 text-sm font-bold text-[#4f5d44]"><UsersRound className="h-5 w-5 text-[#b58840]" /> Criado a partir de uma experiência real de planejamento.</div></div></div></section>

      <section className="relative overflow-hidden bg-[#e8dfca] py-18"><div className="container grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center"><div><p className="section-kicker">Uma decisão com perspectiva</p><h2 className="mt-5 font-display text-3xl leading-[1] text-[#2e3b28] sm:text-4xl">Você está investindo em conhecimento para decidir sobre um casamento que pode envolver dezenas de milhares de reais.</h2></div><div className="border-l-2 border-[#b88a3b] pl-6 text-base leading-7 text-[#5a6550]">Uma única escolha melhor pode ter impacto no orçamento. Isso não é uma promessa de retorno: é o motivo para tratar cada proposta com atenção, comparação e contexto.</div></div></section>

      <section id="objecoes" className="bg-[#fbf8f0] py-22 sm:py-28"><div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><p className="section-kicker">Objeções comuns</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">Talvez você esteja pensando...</h2><p className="mt-6 text-base leading-7 text-[#5d6754]">Ter dúvidas antes de investir em um método é esperado. Veja como ele se encaixa em diferentes momentos de planejamento.</p></div><div className="divide-y divide-[#d9cfb9] border-y border-[#d9cfb9]">{objections.map(([question, answer], index) => <div key={question}><button onClick={() => setOpenObjection(openObjection === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left"><span className="font-display text-xl text-[#3d4b34]">{question}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c5ad78] text-[#836432] transition ${openObjection === index ? "rotate-180 bg-[#ead8a9]" : ""}`}><ChevronDown className="h-4 w-4" /></span></button>{openObjection === index && <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-[#65705b]">{answer}</p>}</div>)}</div></div></section>

      <section id="oferta" className="relative isolate overflow-hidden bg-[#283121] py-22 sm:py-28"><div className="absolute -left-24 top-1/2 -z-10 h-[33rem] w-[33rem] -translate-y-1/2 rounded-full border border-[#d7b66f]/18" /><div className="absolute -right-24 -top-10 -z-10 h-80 w-80 rounded-full bg-[#d7b66f]/8 blur-3xl" /><div className="container"><div className="mx-auto max-w-3xl text-center"><p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d8b96e]/40 bg-[#394830] px-4 py-2 text-[0.65rem] font-extrabold tracking-[.16em] text-[#e7ca8a] uppercase"><LockKeyhole className="h-3.5 w-3.5" /> Condição de lançamento</p><h2 className="mt-7 font-display text-4xl leading-[.96] tracking-[-.035em] text-[#fff9e8] sm:text-6xl">Tenha o Método CASAR+ para tomar decisões mais inteligentes durante o planejamento do seu casamento.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#d8deca]">Planejamento, comparação, negociação e ferramentas para colocar o método em prática no ritmo de vocês.</p></div>
        <div className="offer-livret relative mx-auto mt-12 max-w-xl overflow-hidden border border-[#d8b76d]/55 bg-[#fffdf7] shadow-[0_28px_65px_rgba(0,0,0,.22)]"><img src={botanicalUrl} alt="" className="absolute -right-8 bottom-16 h-48 w-48 object-contain opacity-[.09]" /><div className="relative z-10 flex items-center justify-between border-b border-[#e7dcc4] bg-[#f6eedc] px-6 py-4"><span className="flex items-center gap-2 text-[0.65rem] font-extrabold tracking-[.16em] text-[#796035] uppercase"><img src={logoUrl} alt="" className="h-6 w-6 rounded-full object-cover" /> Método CASAR+ completo</span><HeartHandshake className="h-5 w-5 text-[#a77a34]" /></div><div className="relative z-10 p-7 sm:p-9"><p className="font-display text-lg italic text-[#586048]">Uma escolha para cuidar do casamento e do futuro que vem depois dele.</p><div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2"><span className="text-sm font-bold text-[#808274]">De <span className="line-through">R$ 997,00</span></span><span className="rounded-full bg-[#e5d0a3] px-3 py-1 text-[0.61rem] font-extrabold tracking-wide text-[#675027] uppercase">Por R$ 497,00</span></div><div className="mt-2 flex items-end gap-2 text-[#2c3625]"><span className="mb-2 text-xl font-bold">R$</span><span className="font-display text-7xl leading-none tracking-[-.05em]">497</span><span className="mb-2 text-xl font-bold">,00</span></div><p className="mt-3 text-sm leading-6 text-[#66705d]">As condições de pagamento disponíveis serão apresentadas no checkout oficial.</p><div className="gold-rule my-7" /><ul className="space-y-3 text-sm font-semibold text-[#4d5941]">{["Curso completo Método CASAR+", "Planner Financeiro CASAR+", "Radar CI para fornecedores", "Guia de negociação, checklists e calculadora", "Acesso imediato e garantia de 7 dias"].map(item => <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#b48842]" />{item}</li>)}</ul><button onClick={() => openCheckout("offer_card")} data-analytics-event="checkout_start" className="btn-primary mt-8 w-full py-4 text-sm">Quero o Método CASAR+ <ArrowRight className="h-4 w-4" /></button><p className="mt-4 text-center text-[0.66rem] font-bold text-[#858473]">Pagamento seguro · Garantia de 7 dias · Acesso conforme checkout</p></div></div>
      </div></section>

      <section id="duvidas" className="bg-[#f8f5ed] py-22 sm:py-28"><div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><p className="section-kicker">Perguntas frequentes</p><h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.035em] text-[#2c3726] sm:text-5xl">Tudo o que vocês precisam saber antes de começar.</h2><p className="mt-6 text-base leading-7 text-[#5c6654]">Transparência também faz parte de um planejamento inteligente.</p></div><div className="divide-y divide-[#d9cfb9] border-y border-[#d9cfb9]">{faqs.map(([question, answer], index) => <div key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left" aria-expanded={openFaq === index}><span className="text-sm font-extrabold leading-6 text-[#3b4932] sm:text-[0.95rem]">{question}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c5ad78] text-[#836432] transition ${openFaq === index ? "rotate-180 bg-[#ead8a9]" : ""}`}><ChevronDown className="h-4 w-4" /></span></button>{openFaq === index && <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-[#65705b]">{answer}</p>}</div>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#eae0cc] py-20"><div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div><p className="section-kicker">O próximo passo é de vocês</p><h2 className="mt-6 max-w-3xl font-display text-4xl leading-[.97] tracking-[-.035em] text-[#2b3825] sm:text-5xl">Seu casamento merece ser inesquecível. Seu orçamento também merece ser respeitado.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-[#5c6653]">Você não precisa escolher entre ter um casamento bonito e cuidar do seu dinheiro. Com estratégia, informação e boas decisões, é possível planejar de forma muito mais inteligente.</p></div><div className="border border-[#cbb98f] bg-[#fffaf0] p-7 shadow-[0_18px_42px_rgba(50,58,40,.09)] sm:p-9"><CircleAlert className="h-6 w-6 text-[#b48742]" /><p className="mt-5 font-display text-3xl leading-8 text-[#33402b]">Comece por entender o método. Depois, decidam com mais clareza.</p><button onClick={() => openCheckout("final_cta")} data-analytics-event="checkout_start" className="btn-primary mt-7 w-full">Quero o Método CASAR+ <ArrowRight className="h-4 w-4" /></button></div></div></section>

      </main>
      <footer className="bg-[#20271b] py-10 text-[#d9ddcc]"><div className="container flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><img src={logoUrl} alt="Casamento Inteligente" width={48} height={48} loading="lazy" decoding="async" className="h-12 w-12 rounded-full object-cover" /><div><p className="font-display text-lg text-[#fff9e8]">Casamento Inteligente</p><p className="text-[0.63rem] font-extrabold tracking-[.18em] text-[#d1ae67] uppercase">Método CASAR+</p></div></div><div className="max-w-md text-xs leading-5 text-[#bfc7b0] sm:text-right">Planejamento de casamento, orçamento, fornecedores e negociação com mais clareza para o casal.</div></div></footer>

      <a href="#oferta" data-analytics-event="cta_click" data-analytics-label="mobile_sticky" className="fixed bottom-3 left-3 right-3 z-50 flex items-center justify-center gap-2 rounded-full bg-[#b8893f] px-5 py-4 text-sm font-extrabold text-[#283121] shadow-[0_16px_35px_rgba(0,0,0,.22)] md:hidden">Quero o Método CASAR+ <ArrowRight className="h-4 w-4" /></a>
    </div>
  );
}
