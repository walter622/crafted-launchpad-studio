import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Hammer,
  MapPin,
  Plus,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
} from "lucide-react";

import logo from "@/assets/pau-brasil-logo.png.asset.json";
import logoBranco from "@/assets/pau-brasil-logo-branco.png.asset.json";
import hero from "@/assets/hero.asset.json";
import mesa from "@/assets/mesa.asset.json";
import cobertura from "@/assets/coberturaservicos.asset.json";
import { Carousel } from "@/components/site/Carousel";
import { estruturas, faq, moveis, PHONE_DISPLAY, whatsappLink } from "@/lib/site-data";

const TITULO = "Pau Brasil — Móveis Rústicos e Projetos em Madeira Maciça | Mairinque SP";
const DESCRICAO =
  "Há mais de 30 anos criando móveis rústicos nobres, pergolados, decks e quiosques sob medida. Showroom em Mairinque (SP), frota e equipe de instalação próprias.";
const OG_IMAGE = `https://id-preview--1efbcc4f-b067-4fce-88d2-60ed83147eb4.lovable.app${hero.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: LandingPage,
});

const CTA_HERO = whatsappLink(
  "Olá! Vi o site da Pau Brasil e gostaria de falar com um consultor.",
);
const CTA_MOVEIS = whatsappLink(
  "Olá! Gostaria de receber fotos e medidas dos móveis rústicos disponíveis.",
);
const CTA_ESTRUTURAS = whatsappLink(
  "Olá! Gostaria de solicitar um orçamento para um projeto em madeira sob medida.",
);
const CTA_SHOWROOM = whatsappLink(
  "Olá! Gostaria de saber mais sobre o showroom de Mairinque.",
);
const CTA_FINAL = whatsappLink(
  "Olá! Quero transformar meu espaço de lazer. Podem me ajudar?",
);
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Pau+Brasil+Rodovia+Presidente+Castello+Branco+Km+65+Mairinque+SP";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.46 1.06 2.87 1.2 3.07.15.2 2.06 3.28 5.06 4.47 2.99 1.19 2.99.79 3.53.74.54-.05 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.4 2.18 11.82c0 1.73.46 3.42 1.32 4.9L2 22l5.42-1.42a9.9 9.9 0 0 0 4.62 1.17h.01c5.43 0 9.85-4.4 9.85-9.82C21.9 6.4 17.47 2 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.15-1.13l-.3-.18-3.08.8.83-2.99-.19-.31a8.1 8.1 0 0 1-1.25-4.35c0-4.5 3.68-8.16 8.2-8.16 2.19 0 4.25.85 5.8 2.39a8.09 8.09 0 0 1 2.4 5.78c0 4.5-3.68 8.15-8.2 8.15Z" />
    </svg>
  );
}

function BotaoWhats({
  href,
  children,
  variante = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variante?: "solid" | "light";
}) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-4 text-[15px] font-semibold tracking-tight transition-all duration-300";
  const estilo =
    variante === "solid"
      ? "bg-primary text-primary-foreground shadow-lift hover:bg-primary-deep"
      : "bg-accent text-accent-foreground hover:brightness-105";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${estilo}`}>
      <WhatsAppIcon className="size-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Cabecalho />
      <main>
        <Hero />
        <Autoridade />
        <Moveis />
        <Estruturas />
        <QuemSomos />
        <Diferenciais />
        <Faq />
        <Fechamento />
      </main>
      <Rodape />
      <BarraMobile />
    </div>
  );
}

/* ---------------------------------------------------------------- cabeçalho */

function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <a href="#top" className="flex items-center">
          <img src={logo.url} alt="Pau Brasil" className="h-9 w-auto lg:h-10" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
          <a href="#moveis" className="transition-colors hover:text-primary">
            Móveis
          </a>
          <a href="#estruturas" className="transition-colors hover:text-primary">
            Projetos
          </a>
          <a href="#quem-somos" className="transition-colors hover:text-primary">
            Quem somos
          </a>
          <a href="#faq" className="transition-colors hover:text-primary">
            Dúvidas
          </a>
        </nav>
        <div className="hidden lg:block">
          <a
            href={CTA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            <WhatsAppIcon className="size-4" />
            Falar com um consultor
          </a>
        </div>
        <a
          href={CTA_HERO}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="flex size-10 items-center justify-center bg-primary text-primary-foreground lg:hidden"
        >
          <WhatsAppIcon className="size-5" />
        </a>
      </div>
    </header>
  );
}

/* --------------------------------------------------------------------- hero */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={hero.url}
        alt="Quiosque com cobertura de palha e deck em madeira maciça executado pela Pau Brasil"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1240px] px-5 py-24 lg:px-10 lg:py-36">
        <div className="max-w-[42rem]">
          <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-7 bg-accent" />
            Tradição desde os anos 90 · Mairinque · SP
          </p>

          <h1 className="mt-7 text-[2.4rem] leading-[1.06] text-primary-foreground sm:text-[3.1rem] lg:text-[3.9rem]">
            O luxo e a nobreza da{" "}
            <span className="italic text-accent">madeira maciça</span> para transformar a sua
            casa.
          </h1>

          <p className="mt-7 max-w-[38rem] text-[1.0625rem] leading-relaxed text-primary-foreground/80">
            Há mais de 30 anos criando móveis rústicos nobres, pergolados e decks sob medida.
            Beleza eterna, acabamento artesanal e máxima durabilidade para a sua área de lazer.
          </p>

          <ul className="mt-9 flex flex-col gap-3 border-l border-primary-foreground/20 pl-5 text-sm text-primary-foreground/85 sm:gap-4">
            {[
              { Icone: Sparkles, texto: "Acabamento artesanal premium" },
              { Icone: Truck, texto: "Frota e equipe de instalação própria" },
              { Icone: Store, texto: "Showroom em Mairinque (Castelo Branco)" },
            ].map(({ Icone, texto }) => (
              <li key={texto} className="flex items-center gap-3">
                <Icone className="size-[18px] shrink-0 text-accent" strokeWidth={1.5} />
                {texto}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <BotaoWhats href={CTA_HERO}>Falar com um consultor no WhatsApp</BotaoWhats>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- autoridade */

const numeros = [
  {
    valor: "+30",
    unidade: "anos",
    texto: "De tradição e liderança no mercado de madeira nobre.",
    Icone: Award,
  },
  {
    valor: "+35.000",
    unidade: "lares",
    texto: "Projetos transformados em todo o estado de São Paulo.",
    Icone: Hammer,
  },
  {
    valor: "100%",
    unidade: "próprio",
    texto: "Transporte, entrega e montagem técnica sem intermediários.",
    Icone: ShieldCheck,
  },
];

function Autoridade() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {numeros.map(({ valor, unidade, texto, Icone }) => (
            <div key={valor} className="flex gap-5 py-10 md:px-8 md:py-12 md:first:pl-0 md:last:pr-0">
              <Icone className="mt-1 size-6 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-display text-[2rem] leading-none text-primary-deep">
                  {valor}{" "}
                  <span className="text-base font-normal tracking-wide text-muted-foreground">
                    {unidade}
                  </span>
                </p>
                <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
                  {texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- móveis */

function Moveis() {
  return (
    <section id="moveis" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[34rem]">
            <p className="eyebrow">Pronta-entrega</p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] sm:text-[2.5rem]">
              Móveis em madeira maciça nobre a pronta-entrega.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[15px] leading-relaxed text-muted-foreground">
            Peças imponentes e exclusivas que combinam a rusticidade chique com o conforto que a
            sua família merece.
          </p>
        </div>

        <div className="mt-14">
          <Carousel itens={moveis} ariaLabel="Móveis rústicos a pronta-entrega" />
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[34rem] text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Também no showroom:</span> sofás em couro
            legítimo com estrutura em madeira maciça, cristaleiras e móveis para espaço gourmet.
          </p>
          <BotaoWhats href={CTA_MOVEIS} variante="light">
            Receber fotos e medidas
          </BotaoWhats>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- estruturas */

function Estruturas() {
  return (
    <section id="estruturas" className="grain-dark py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[36rem]">
            <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-7 bg-accent" />
              Arquitetura de exteriores
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] text-primary-foreground sm:text-[2.5rem]">
              Projetos e estruturas em madeira sob medida.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[15px] leading-relaxed text-primary-foreground/70">
            Do projeto à execução final: valorize o seu imóvel com estruturas de altíssimo padrão.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {estruturas.map((item) => (
            <article key={item.titulo} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="mt-5 text-lg text-primary-foreground">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                {item.descricao}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-primary-foreground/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[32rem] text-sm leading-relaxed text-primary-foreground/70">
            Medição técnica, projeto e instalação executados pela nossa própria equipe em todo o
            estado de São Paulo.
          </p>
          <BotaoWhats href={CTA_ESTRUTURAS} variante="light">
            Solicitar orçamento do projeto
          </BotaoWhats>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- quem somos */

const pilares = [
  {
    Icone: Award,
    titulo: "Tradição de mais de 30 anos",
    texto: "Uma história construída peça por peça, com nome e reputação no interior de São Paulo.",
  },
  {
    Icone: Hammer,
    titulo: "Madeira maciça selecionada",
    texto: "Respeito à matéria-prima nobre e alta resistência para gerações.",
  },
  {
    Icone: Ruler,
    titulo: "Arquitetura e decoração",
    texto: "Do móvel a pronta-entrega às grandes estruturas sob medida.",
  },
  {
    Icone: ShieldCheck,
    titulo: "Compromisso de ponta a ponta",
    texto: "Atendimento humanizado e garantia de entrega perfeita na sua casa.",
  },
];

function QuemSomos() {
  return (
    <section id="quem-somos" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-10">
        <div className="relative">
          <img
            src={mesa.url}
            alt="Mesa de jantar em madeira maciça nobre no showroom da Pau Brasil"
            loading="lazy"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
          <img
            src={cobertura.url}
            alt="Cobertura em madeira executada pela equipe da Pau Brasil"
            loading="lazy"
            className="absolute -bottom-10 -right-10 hidden h-[210px] w-[180px] border-[6px] border-background object-cover lg:block"
          />
        </div>

        <div>
          <p className="eyebrow">Quem é a Pau Brasil</p>
          <h2 className="mt-5 text-[2rem] leading-[1.12] sm:text-[2.5rem]">
            Três décadas dedicadas à madeira nobre brasileira.
          </h2>
          <p className="mt-6 max-w-[38rem] text-[15px] leading-relaxed text-muted-foreground">
            Do móvel escolhido no showroom à grande estrutura executada na sua casa, cada etapa
            passa pelas mãos da nossa equipe. É esse controle completo que garante o acabamento
            artesanal e a durabilidade que nos trouxeram até aqui.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {pilares.map(({ Icone, titulo, texto }) => (
              <div key={titulo}>
                <Icone className="size-6 text-wine" strokeWidth={1.5} />
                <h3 className="mt-4 text-base">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </div>
            ))}
          </div>

          <div className="mt-11">
            <BotaoWhats href={CTA_SHOWROOM}>Conhecer nosso showroom</BotaoWhats>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- diferenciais */

const diferenciais = [
  {
    numero: "01",
    titulo: "Madeira nobre com proteção especial",
    texto:
      "Selecionamos madeiras de altíssima densidade com tratamentos específicos para resistir ao tempo, sol e umidade.",
  },
  {
    numero: "02",
    titulo: "Design com personalidade única",
    texto:
      "Cada móvel e projeto preserva os veios e a identidade natural da madeira. Nenhuma peça é igual à outra.",
  },
  {
    numero: "03",
    titulo: "Atendimento e montagem própria",
    texto:
      "Do primeiro contato no WhatsApp até a instalação na sua casa, você lida diretamente com nossa equipe especializada.",
  },
];

function Diferenciais() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <div className="max-w-[40rem]">
          <p className="eyebrow">Por que escolher a Pau Brasil</p>
          <h2 className="mt-5 text-[2rem] leading-[1.12] sm:text-[2.5rem]">
            A diferença está na nobreza da madeira e no cuidado artesanal.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Entenda por que nossas peças duram gerações e valorizam o seu imóvel.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {diferenciais.map(({ numero, titulo, texto }) => (
            <div key={numero} className="bg-secondary p-8 md:p-10">
              <span className="font-display text-[2.75rem] leading-none text-accent">
                {numero}
              </span>
              <h3 className="mt-6 text-xl leading-snug">{titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- faq */

function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="mt-5 text-[2rem] leading-[1.12] sm:text-[2.4rem]">
            Perguntas frequentes
          </h2>
          <p className="mt-6 max-w-[24rem] text-[15px] leading-relaxed text-muted-foreground">
            Não encontrou a sua dúvida? Nossos consultores respondem no WhatsApp em poucos
            minutos.
          </p>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {faq.map((item) => (
            <details key={item.pergunta} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-medium leading-snug text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <Plus
                  className="mt-1 size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="mt-4 max-w-[46rem] pr-10 text-[15px] leading-relaxed text-muted-foreground">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- fechamento */

function Fechamento() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={hero.url}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="relative mx-auto max-w-[1240px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="max-w-[44rem]">
          <h2 className="text-[2rem] leading-[1.12] text-primary-foreground sm:text-[2.6rem]">
            Pronto para transformar o seu espaço de lazer?
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-relaxed text-primary-foreground/75">
            Fale agora com a nossa equipe de consultores ou venha tomar um café em nosso showroom
            físico.
          </p>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center">
            <BotaoWhats href={CTA_FINAL} variante="light">
              Falar com consultor no WhatsApp
            </BotaoWhats>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/75 transition-colors hover:text-accent"
            >
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.5} />
              <span>
                <span className="block font-medium text-primary-foreground">
                  Unidade Mairinque
                </span>
                Rod. Pres. Castello Branco, Km 65 (sentido interior)
                <br />
                A 2 min do Catarina Fashion Outlet
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- rodapé */

function Rodape() {
  return (
    <footer className="bg-primary-deep pb-24 pt-14 text-primary-foreground/70 lg:pb-14">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <img src={logoBranco.url} alt="Pau Brasil" className="h-9 w-auto" />
        <div className="flex flex-col gap-2 text-sm lg:items-end">
          <a
            href={CTA_FINAL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            WhatsApp {PHONE_DISPLAY}
          </a>
          <p>Móveis rústicos e projetos em madeira maciça · Mairinque, São Paulo</p>
        </div>
      </div>
    </footer>
  );
}

function BarraMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-deep/40 bg-primary p-3 lg:hidden">
      <a
        href={CTA_FINAL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-3 bg-accent px-5 py-3.5 text-[15px] font-semibold text-accent-foreground"
      >
        <WhatsAppIcon className="size-5" />
        Falar com um consultor
      </a>
    </div>
  );
}
