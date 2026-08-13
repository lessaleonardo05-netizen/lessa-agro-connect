import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-racao-quatree-duo.jpg.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";

const trustItems = [
  "Atendimento próximo",
  "Produtos selecionados",
  "Qualidade e confiança",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-surface pt-[4.5rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 size-[28rem] rounded-full bg-accent/60 blur-3xl"
      />
      <div className="container-page relative">
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Agropecuária e pet
            </span>

            <h1 className="mt-6 text-[2.125rem] leading-[1.1] text-primary-deep sm:text-5xl lg:text-[3.4rem]">
              Tudo para cuidar do seu pet, sua criação e sua propriedade.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Na Lessa Agropecuária você encontra rações, produtos para animais,
              itens para sua propriedade e atendimento próximo para ajudar você a
              escolher o que realmente precisa.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg">Falar com a Lessa no WhatsApp</WhatsAppButton>
              <a
                href="#produtos"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3.5 text-[0.9375rem] font-semibold text-primary transition-all duration-300 hover:border-primary/45 hover:bg-secondary md:px-7 md:py-4 md:text-base"
              >
                Conhecer nossos produtos
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="overflow-hidden rounded-3xl bg-card shadow-lift">
              <img
                src={heroImage.url}
                width={1152}
                height={928}
                alt="Sacos de ração Quatree Supreme Natural 1 kg para cães e para gatos adultos, disponíveis na Lessa Agropecuária"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="text-sm font-semibold text-primary-deep">
                Não sabe qual produto escolher?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Nossa equipe ajuda você a decidir pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
