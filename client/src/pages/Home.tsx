/* Página: Editorial Botânico — narrativa assimétrica, serena e criteriosa; verde oliva para confiança, dourado para valor e marfim para respiro. */
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  FileCheck2,
  HandCoins,
  HeartHandshake,
  Landmark,
  Leaf,
  LockKeyhole,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const logoUrl = "/manus-storage/logo-casamento-inteligente_9ffa292e.png";
const heroUrl = "/manus-storage/casar-hero-editorial_05185287.jpg";
const planningUrl = "/manus-storage/casar-planning-table_fc5f54e7.jpg";
const receptionUrl = "/manus-storage/casar-reception-detail_d3e56c34.jpg";
const botanicalUrl = "/manus-storage/casar-botanical-symbol_8637a981.png";

const modules = [
  {
    number: "01",
    title: "Planejamento Inteligente",
    description: "Defina um orçamento consciente, separe prioridades e identifique onde a estratégia faz mais diferença.",
    Icon: Landmark,
  },
  {
    number: "02",
    title: "Pesquisa Estratégica",
    description: "Encontre fornecedores, peça orçamentos e transforme propostas em uma comparação objetiva.",
    Icon: Search,
  },
  {
    number: "03",
    title: "Negociação de Alto Impacto",
    description: "Conduza conversas para buscar melhores valores, benefícios, upgrades e condições comerciais.",
    Icon: HandCoins,
  },
  {
    number: "04",
    title: "Fechamento Seguro",
    description: "Aprenda os pontos que merecem atenção no contrato antes de formalizar uma contratação.",
    Icon: FileCheck2,
  },
  {
    number: "05",
    title: "Controle e Economia Final",
    description: "Acompanhe pagamentos, mudanças e decisões para proteger o que conquistaram na negociação.",
    Icon: CircleCheck,
  },
];

const bonuses = [
  {
    tag: "Bônus 01",
    title: "Planner Financeiro CASAR+",
    description: "Organize cada escolha com visão de orçamento, prioridades e acompanhamento de pagamentos.",
    Icon: Landmark,
  },
  {
    tag: "Bônus 02",
    title: "Radar CI de Fornecedores",
    description: "Um instrumento prático para observar propostas, comparar critérios e registrar decisões.",
    Icon: Search,
  },
  {
    tag: "Bônus 03",
    title: "Guia Casamento Sem Golpes",
    description: "Pontos de atenção para reconhecer riscos, confirmar entregas e contratar com mais cautela.",
    Icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "O Método CASAR+ é indicado para quem ainda está no início?",
    answer: "Sim. O método começa pela organização do orçamento e das prioridades, por isso pode ser aplicado desde os primeiros passos. Quem já iniciou as cotações também encontra ferramentas para estruturar melhor as próximas decisões.",
  },
  {
    question: "A economia de até 40% é garantida?",
    answer: "Não. A economia depende do orçamento, da região, dos fornecedores, do prazo e das decisões do casal. O curso ensina um processo para identificar oportunidades, comparar propostas e negociar com mais preparo — não promete um resultado igual para todos.",
  },
  {
    question: "Preciso entender de finanças ou negociação?",
    answer: "Não. As aulas foram organizadas para transformar decisões complexas em etapas claras, com materiais de apoio para aplicar no ritmo de cada casal.",
  },
  {
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "A regra de acesso deve seguir a configuração da plataforma em que o curso será hospedado. Antes da compra, confirme essa informação diretamente no checkout oficial.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "A página prevê sete dias para você conhecer o método e solicitar reembolso, seguindo as condições publicadas na plataforma de pagamento utilizada no checkout oficial.",
  },
];

function CheckoutNotice() {
  toast.info("O link do checkout ainda precisa ser conectado.", {
    description: "Quando você enviar a URL de pagamento, este CTA poderá levar diretamente à inscrição.",
  });
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#f7f3e9] text-[#293123]">
      <div className="border-b border-[#cdbf9a]/35 bg-[#283021] px-4 py-2.5 text-center text-[0.67rem] font-extrabold tracking-[0.12em] text-[#f7e7bd] uppercase sm:text-xs">
        Condição de lançamento: de R$ 997 por <span className="text-[#e1bd72]">R$ 497</span>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e2dac7]/80 bg-[#f7f3e9]/93 backdrop-blur-xl">
        <div className="container flex h-[4.85rem] items-center justify-between gap-4">
          <a href="#inicio" className="group flex items-center gap-2.5" aria-label="Casamento Inteligente, início">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#c89c52]/45 bg-[#fffdf8] shadow-sm">
              <img src={logoUrl} alt="Logo Casamento Inteligente" className="h-full w-full object-cover" />
            </span>
            <span className="hidden leading-none sm:block">
              <span className="block font-display text-[1.05rem] text-[#293123]">Casamento</span>
              <span className="block text-[0.6rem] font-extrabold tracking-[0.18em] text-[#9b7336] uppercase">Inteligente</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            <a className="text-xs font-bold text-[#516047] transition hover:text-[#a87932]" href="#metodo">O método</a>
            <a className="text-xs font-bold text-[#516047] transition hover:text-[#a87932]" href="#bonus">Bônus</a>
            <a className="text-xs font-bold text-[#516047] transition hover:text-[#a87932]" href="#duvidas">Dúvidas</a>
          </nav>

          <div className="flex items-center gap-2">
            <img src={botanicalUrl} alt="" className="hidden h-9 w-9 object-contain md:block" />
            <a href="#oferta" className="btn-primary hidden px-5 py-2.5 text-xs sm:inline-flex">Quero o método <ArrowRight className="h-3.5 w-3.5" /></a>
            <button onClick={() => setMobileMenu((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#68705d]/30 text-[#34402a] lg:hidden" aria-label="Abrir menu" aria-expanded={mobileMenu}>
              {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="border-t border-[#e2dac7] bg-[#fffdf7] px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-4 text-sm font-bold text-[#425038]">
              <a onClick={() => setMobileMenu(false)} href="#metodo">O método</a>
              <a onClick={() => setMobileMenu(false)} href="#bonus">Bônus</a>
              <a onClick={() => setMobileMenu(false)} href="#duvidas">Dúvidas</a>
              <a onClick={() => setMobileMenu(false)} href="#oferta" className="btn-primary mt-1">Quero a condição de lançamento <ArrowRight className="h-4 w-4" /></a>
            </nav>
          </div>
        )}
      </header>

      <section id="inicio" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_12%,rgba(184,138,59,.18),transparent_16rem),radial-gradient(circle_at_12%_78%,rgba(81,97,61,.13),transparent_25rem)]" />
        <div className="container grid min-h-[660px] items-center gap-10 py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-18">
          <div className="relative z-10 pt-2 lg:py-16">
            <div className="rise-in section-kicker mb-6">Método CASAR+ para noivos conscientes</div>
            <h1 className="rise-in rise-delay-1 max-w-[720px] font-display text-[3.18rem] leading-[.93] tracking-[-0.04em] text-[#283021] sm:text-6xl lg:text-[4.55rem]">
              Um casamento lindo não precisa custar a sua tranquilidade.
            </h1>
            <p className="rise-in rise-delay-2 mt-7 max-w-xl text-base leading-7 text-[#515c46] sm:text-[1.06rem]">
              Planeje, pesquise e negocie com estratégia para tomar decisões mais seguras com fornecedores — e buscar economizar <strong className="font-extrabold text-[#33402a]">até 40%</strong>, sem abrir mão do que faz sentido para vocês.
            </p>
            <div className="rise-in rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#oferta" className="btn-primary">Quero planejar com inteligência <ArrowRight className="h-4 w-4" /></a>
              <a href="#metodo" className="btn-ghost">Conhecer o método</a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-[#69735d]">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#b88a3b]" /> Aulas + ferramentas práticas</span>
              <span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-[#b88a3b]" /> Compra protegida no checkout</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[580px] pb-10 pt-2 lg:pb-0">
            <div className="absolute -right-12 -top-7 h-40 w-40 rounded-full border border-[#bc914b]/50 sm:h-56 sm:w-56" />
            <div className="absolute -bottom-6 -left-10 h-32 w-32 rounded-full border border-[#566148]/35" />
            <div className="relative overflow-hidden rounded-t-[11rem] rounded-br-[2rem] rounded-bl-[2rem] border border-[#d8c79f]/80 bg-[#dfe1d3] p-2 shadow-[0_30px_70px_rgba(45,52,36,.17)] sm:p-3">
              <img src={heroUrl} alt="Casal planejando o casamento em um ambiente elegante" className="h-[430px] w-full rounded-t-[10rem] rounded-br-[1.45rem] rounded-bl-[1.45rem] object-cover sm:h-[530px]" />
              <div className="absolute inset-x-3 bottom-3 rounded-br-[1.25rem] rounded-bl-[1.25rem] bg-gradient-to-t from-[#20271b]/80 via-[#20271b]/12 to-transparent p-6 pt-24 text-[#fffbf0]">
                <p className="font-display text-xl italic">“Escolhas melhores hoje. Mais leveza amanhã.”</p>
              </div>
            </div>
            <div className="absolute -bottom-1 -left-3 w-[190px] rounded-[1rem] border border-[#d0bd91]/60 bg-[#fffdf7] p-4 shadow-[0_16px_35px_rgba(48,54,38,.12)] sm:-left-12 sm:w-[215px]">
              <div className="mb-2 flex items-center gap-2 text-[0.6rem] font-extrabold tracking-[0.16em] text-[#8e6c35] uppercase"><Sparkles className="h-3.5 w-3.5" /> Comece pelo essencial</div>
              <p className="font-display text-lg leading-5 text-[#33402a]">Menos incerteza.<br />Mais critério.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c29855]/55 to-transparent" />
      </section>

      <section className="bg-[#283021] py-7 text-[#f7efdc]">
        <div className="container grid gap-6 md:grid-cols-3 md:gap-10">
          {["Pare de aceitar o primeiro orçamento como se fosse definitivo.", "Conheça o custo real antes de se apaixonar pela proposta.", "Negocie com respeito, clareza e uma estratégia preparada."].map((line, index) => (
            <div key={line} className="flex items-start gap-4 border-[#d5ba7f]/20 md:border-l md:pl-7">
              <span className="font-display text-2xl text-[#d5ad62]">0{index + 1}</span>
              <p className="pt-1 text-sm leading-5 text-[#e3e0ce]">{line}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-22 sm:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
            <div className="absolute -left-4 -top-5 h-24 w-24 rounded-full bg-[#d9bd82]/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d4c8ad]/60 bg-[#ece6d7] p-2.5 shadow-[0_22px_50px_rgba(47,53,39,.09)]">
              <img src={planningUrl} alt="Casal organizando propostas e planejamento financeiro" className="aspect-[4/5] w-full rounded-[1.25rem] object-cover" />
            </div>
            <div className="absolute -right-7 bottom-7 rounded-full border border-[#ccb477]/60 bg-[#fffdf7] p-3 shadow-lg sm:-right-10 sm:p-4">
              <img src={botanicalUrl} alt="" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
            </div>
          </div>
          <div>
            <p className="section-kicker">Quando organizar virou sobrecarga</p>
            <h2 className="mt-6 max-w-[720px] font-display text-4xl leading-[.98] tracking-[-.03em] text-[#2c3625] sm:text-5xl">O problema não é querer um casamento especial. É decidir no escuro.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#586150]">A agenda cheia, as propostas difíceis de comparar e o receio de parecer “chato” ao negociar fazem muitos casais avançarem sem critério. E pequenas escolhas desconectadas podem virar uma pressão desnecessária no início da vida a dois.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Orçamentos que não conversam entre si", "Prioridades comprometidas por impulso", "Condições importantes deixadas para depois", "Contratos assinados sem revisar o essencial"].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-[#d8cfb7] bg-[#fbf8ef]/80 p-4 text-sm font-bold leading-5 text-[#435039]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e6d4aa] text-[#765828]"><X className="h-3 w-3" /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="relative overflow-hidden bg-[#e9e1cf] py-22 sm:py-28">
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full border border-[#b68e4b]/25" />
        <div className="container relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="section-kicker">A rota para decisões mais seguras</p>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[.97] tracking-[-.03em] text-[#2d3827] sm:text-5xl">Método CASAR+: cinco etapas para transformar intenção em estratégia.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#596151] lg:pb-1">Você não precisa se tornar especialista em casamento. Precisa de um caminho que organize cada decisão relevante, na hora certa.</p>
          </div>
          <div className="mt-13 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {modules.map(({ number, title, description, Icon }, index) => (
              <article key={title} className={`group relative min-h-[285px] rounded-[1.35rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "md:col-span-2 lg:col-span-2 lg:min-h-[310px] border-[#32402b] bg-[#32402b] text-[#fff9ea] shadow-[0_12px_30px_rgba(47,58,38,.16)]" : "border-[#d2c59f] bg-[#f8f4e8] text-[#34402c]"} ${index === 1 ? "lg:mt-7" : ""} ${index === 3 ? "lg:-mt-5" : ""} ${index === 4 ? "lg:mt-4" : ""}`}>
                <div className="flex items-start justify-between">
                  <span className={`font-display text-3xl ${index === 0 ? "text-[#e0b669]" : "text-[#9b7439]"}`}>{number}</span>
                  <Icon className={`h-5 w-5 ${index === 0 ? "text-[#dfbe77]" : "text-[#596449]"}`} />
                </div>
                <h3 className={`mt-12 font-display leading-[1.05] ${index === 0 ? "text-[2rem] sm:text-[2.25rem]" : "text-[1.65rem]"}`}>{title}</h3>
                <p className={`mt-4 max-w-md text-sm leading-6 ${index === 0 ? "text-[#e1e4d2]" : "text-[#65705b]"}`}>{description}</p>
                {index === 0 && <p className="absolute bottom-6 right-6 max-w-[10rem] text-right font-display text-sm italic leading-4 text-[#d9bd78]">Comece pelo que protege os seus planos.</p>}
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-col justify-between gap-4 border-t border-[#c5b78e] pt-7 sm:flex-row sm:items-center">
            <p className="font-display text-xl italic text-[#4e5942]">Não é sobre fazer tudo mais barato. É sobre fazer escolhas mais inteligentes.</p>
            <a href="#oferta" className="btn-primary shrink-0">Ver a condição de lançamento <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf8ef] py-22 sm:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div>
            <p className="section-kicker">O que muda no seu planejamento</p>
            <h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.03em] text-[#2d3827] sm:text-5xl">Mais tranquilidade para escolher. Mais repertório para conversar.</h2>
            <div className="mt-9 space-y-5">
              {["Tenha um orçamento que reflita as prioridades reais do casal.", "Compare propostas sem depender apenas de impressão ou indicação.", "Saiba o que perguntar antes de concordar com uma condição.", "Registre o que foi negociado para reduzir ruídos no fechamento.", "Proteja a economia conquistada até o último pagamento."].map((benefit) => (
                <div key={benefit} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e3d0a4] text-[#715529]"><Check className="h-4 w-4 stroke-[3]" /></span>
                  <p className="text-[0.95rem] font-semibold leading-6 text-[#526048]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-12 top-2 h-56 w-56 rounded-full border border-[#b88a3b]/35 sm:-right-20" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d4c8ad]/70 p-2.5 shadow-[0_22px_50px_rgba(47,53,39,.1)]">
              <img src={receptionUrl} alt="Detalhes de uma mesa de casamento elegante com ramos de oliveira" className="h-[380px] w-full rounded-[1.28rem] object-cover sm:h-[480px]" />
              <div className="absolute inset-2.5 rounded-[1.28rem] bg-gradient-to-t from-[#253020]/70 via-transparent to-transparent" />
              <div className="absolute bottom-9 left-8 right-8 text-[#fffdf7]">
                <Leaf className="mb-4 h-5 w-5 text-[#e4bf70]" />
                <p className="font-display text-3xl leading-8">Celebre o que importa — com escolhas que vocês entendem e sustentam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bonus" className="bg-[#293222] py-22 text-[#fff9e9] sm:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker !text-[#d7c99f] before:!bg-[#d7ae63]">Materiais que acompanham a sua decisão</p>
              <h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.03em] text-[#fff8e7] sm:text-5xl">Além das aulas, vocês recebem ferramentas para aplicar o método.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#d6dbc7]">Os bônus foram pensados para sair da intenção e colocar cada etapa em prática: organizar, avaliar, comparar e cuidar do que fica combinado.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {bonuses.map(({ tag, title, description, Icon }) => (
              <article key={title} className="group rounded-[1.45rem] border border-[#c9b07c]/30 bg-[#36412d] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#3e4c34]">
                <div className="flex items-center justify-between">
                  <span className="text-[0.64rem] font-extrabold tracking-[.18em] text-[#d6b36b] uppercase">{tag}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6b36b]/30 text-[#e5c985]"><Icon className="h-4.5 w-4.5" /></span>
                </div>
                <h3 className="mt-10 font-display text-[1.85rem] leading-[1.05] text-[#fff8e8]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#d7ddc8]">{description}</p>
                <div className="mt-7 flex items-center gap-2 text-xs font-extrabold text-[#edcf8f]"><Check className="h-4 w-4" /> Incluso sem custo adicional</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-22 sm:py-28">
        <div className="container grid gap-9 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="section-kicker">Confiança se constrói com clareza</p>
            <h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.03em] text-[#2d3827] sm:text-5xl">Uma escolha importante pede histórias verdadeiras.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#596151]">A prova social desta página terá o mesmo cuidado que o método ensina: só entram relatos reais, identificados e autorizados por quem viveu a experiência.</p>
          </div>
          <div className="editorial-note paper-grain min-h-[320px] p-7 sm:p-10">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[0.64rem] font-extrabold tracking-[.19em] text-[#9a7338] uppercase">Nota de transparência</p>
                  <p className="mt-5 max-w-lg font-display text-3xl leading-[1.03] text-[#33402a] sm:text-4xl">“A confiança do casal vem antes da conversão.”</p>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#bd9551]/55 bg-[#fffaf0]/80 shadow-sm"><img src={logoUrl} alt="" className="h-11 w-11 rounded-full object-cover" /></span>
              </div>
              <div className="mt-10 grid gap-6 border-t border-[#c6b281]/55 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-md text-sm leading-6 text-[#59624c]">Assim que houver experiências reais autorizadas, elas serão apresentadas aqui com contexto, sem números inflados e sem identidades inventadas.</p>
                <span className="font-display text-lg italic text-[#8e6932]">Compromisso CASAR+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8cba8] bg-[#ebe2ce] py-16">
        <div className="container grid gap-9 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
          <div className="mx-auto flex h-[105px] w-[105px] items-center justify-center rounded-full border border-[#bc914b]/65 bg-[#f9f4e7] shadow-[inset_0_0_0_6px_rgba(184,138,59,.08)] md:mx-0">
            <ShieldCheck className="h-11 w-11 text-[#4d5c40]" />
          </div>
          <div>
            <p className="section-kicker">Decida com calma</p>
            <h2 className="mt-4 font-display text-3xl text-[#2f3a27] sm:text-4xl">Sete dias para conhecer o método com tranquilidade.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#596151]">Você pode explorar o conteúdo e decidir se ele faz sentido para o momento de vocês. Caso não faça, o pedido de reembolso segue a política informada no checkout da plataforma de pagamento.</p>
          </div>
        </div>
      </section>

      <section id="duvidas" className="bg-[#fbf8ef] py-22 sm:py-28">
        <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2 className="mt-6 font-display text-4xl leading-[.98] tracking-[-.03em] text-[#2d3827] sm:text-5xl">O que vocês precisam saber antes de começar.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#596151]">Transparência também faz parte de um bom planejamento. Aqui estão as respostas mais importantes.</p>
          </div>
          <div className="divide-y divide-[#d8ceba] border-y border-[#d8ceba]">
            {faqs.map((faq, index) => {
              const expanded = openFaq === index;
              return (
                <div key={faq.question}>
                  <button onClick={() => setOpenFaq(expanded ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left" aria-expanded={expanded}>
                    <span className="text-sm font-extrabold leading-6 text-[#36422d] sm:text-[0.95rem]">{faq.question}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c8b37c] text-[#806132] transition ${expanded ? "rotate-180 bg-[#e9d6a9]" : ""}`}><ChevronDown className="h-4 w-4" /></span>
                  </button>
                  {expanded && <p className="max-w-2xl pb-6 pr-12 text-sm leading-6 text-[#66715d]">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="oferta" className="relative isolate overflow-hidden bg-[#283021] py-22 sm:py-28">
        <div className="absolute -left-28 top-1/2 -z-10 h-[33rem] w-[33rem] -translate-y-1/2 rounded-full border border-[#d3a95d]/18" />
        <div className="absolute -right-16 top-6 -z-10 h-64 w-64 rounded-full bg-[#dbb76f]/8 blur-3xl" />
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d8b96e]/40 bg-[#3a452f] px-4 py-2 text-[0.65rem] font-extrabold tracking-[.16em] text-[#edcf91] uppercase"><Clock3 className="h-3.5 w-3.5" /> Condição especial de lançamento</div>
            <h2 className="mt-7 font-display text-4xl leading-[.96] tracking-[-.03em] text-[#fff9e8] sm:text-6xl">Prepare o casamento que vocês imaginam sem perder de vista a vida que querem construir.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#d9dece]">Acesse as aulas, aplique o Método CASAR+ e receba os três materiais complementares para conduzir escolhas com mais clareza.</p>
          </div>
          <div className="offer-livret mx-auto mt-12 max-w-xl overflow-hidden rounded-[1.8rem] border border-[#d7b56b]/45 bg-[#fffdf7] shadow-[0_28px_65px_rgba(0,0,0,.22)]">
            <div className="flex items-center justify-between border-b border-[#e6dcc4] bg-[#f6eedc] px-6 py-4">
              <span className="flex items-center gap-2 text-[0.65rem] font-extrabold tracking-[.16em] text-[#796035] uppercase"><img src={logoUrl} alt="" className="h-6 w-6 rounded-full object-cover" /> Método CASAR+ completo</span>
              <HeartHandshake className="h-5 w-5 text-[#a77a34]" />
            </div>
            <div className="p-7 sm:p-9">
              <p className="mb-5 font-display text-lg italic text-[#586048]">Um convite para negociar escolhas que façam sentido para vocês.</p>
              <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="text-sm font-bold text-[#808274]">De <span className="line-through">R$ 997,00</span></span>
                <span className="rounded-full bg-[#e5d0a3] px-3 py-1 text-[0.61rem] font-extrabold tracking-wide text-[#675027] uppercase">Lançamento</span>
              </div>
              <div className="mt-2 flex items-end gap-2 text-[#2c3625]"><span className="mb-2 text-xl font-bold">R$</span><span className="font-display text-7xl leading-none tracking-[-.05em]">497</span><span className="mb-2 text-xl font-bold">,00</span></div>
              <p className="mt-3 text-sm leading-6 text-[#66705d]">Pagamento e condições finais serão exibidos de forma clara no checkout oficial.</p>
              <div className="gold-rule my-7" />
              <ul className="space-y-3 text-sm font-semibold text-[#4d5941]">
                {["Cinco etapas do Método CASAR+", "Planner Financeiro CASAR+", "Radar CI de Fornecedores", "Guia Casamento Sem Golpes", "Sete dias para conhecer o método"].map((item) => <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#b48842]" /> {item}</li>)}
              </ul>
              <button onClick={CheckoutNotice} className="btn-primary mt-8 w-full bg-[#283021] py-4 text-sm">Quero garantir a condição de lançamento <ArrowRight className="h-4 w-4" /></button>
              <p className="mt-4 text-center text-[0.66rem] font-bold text-[#858473]">Checkout seguro · Acesso conforme regras da plataforma escolhida</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#20271b] py-10 text-[#d9ddcc]">
        <div className="container flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Casamento Inteligente" className="h-12 w-12 rounded-full object-cover" />
            <div><p className="font-display text-lg text-[#fff9e8]">Casamento Inteligente</p><p className="text-[0.63rem] font-extrabold tracking-[.18em] text-[#d1ae67] uppercase">Método CASAR+</p></div>
          </div>
          <div className="max-w-md text-xs leading-5 text-[#bfc7b0] sm:text-right">Escolhas estratégicas para um casamento bonito, seguro e alinhado ao futuro do casal.</div>
        </div>
      </footer>
    </main>
  );
}
