import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CardItem } from "@/lib/site-data";

type Props = {
  itens: CardItem[];
  ariaLabel: string;
  tema?: "claro" | "escuro";
};

export function Carousel({ itens, ariaLabel, tema = "claro" }: Props) {
  const escuro = tema === "escuro";
  const trackRef = useRef<HTMLDivElement>(null);
  const [inicio, setInicio] = useState(true);
  const [fim, setFim] = useState(false);

  const sincronizar = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setInicio(el.scrollLeft <= 4);
    setFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sincronizar();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sincronizar, { passive: true });
    window.addEventListener("resize", sincronizar);
    return () => {
      el.removeEventListener("scroll", sincronizar);
      window.removeEventListener("resize", sincronizar);
    };
  }, [sincronizar]);

  const mover = (direcao: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const passo = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: passo * direcao, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={trackRef} className="snap-track" role="group" aria-label={ariaLabel}>
        {itens.map((item) => (
          <article
            key={item.titulo}
            className="group w-[76vw] max-w-[320px] sm:w-[300px] lg:w-[326px]"
          >
            <div className="relative overflow-hidden rounded-xl bg-secondary">
              <img
                src={item.imagem}
                alt={item.titulo}
                loading="lazy"
                className="h-[380px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[420px]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent" />
              <h3 className="absolute bottom-4 left-5 right-5 text-xl text-primary-foreground">
                {item.titulo}
              </h3>
            </div>
            <p
              className={`mt-4 max-w-[30ch] text-sm leading-relaxed ${
                escuro ? "text-primary-foreground/65" : "text-muted-foreground"
              }`}
            >
              {item.descricao}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => mover(-1)}
          disabled={inicio}
          aria-label="Ver itens anteriores"
          className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-transparent disabled:hover:text-foreground"
        >
          <ChevronLeft className="size-5" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => mover(1)}
          disabled={fim}
          aria-label="Ver próximos itens"
          className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-transparent disabled:hover:text-foreground"
        >
          <ChevronRight className="size-5" strokeWidth={1.5} />
        </button>
        <span className="ml-2 text-xs tracking-wide text-muted-foreground">
          Arraste para ver mais
        </span>
      </div>
    </div>
  );
}
