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
        className="pointer-events-none absolute -right-24 -top-20 size-72 rounded-full bg-accent/60 blur-3xl md:-right-32 md:-top-24 md:size-[28rem]"
      />
      <div className="container-page relative">
        <div className="grid items-center gap-9 pb-20 pt-10 sm:gap-12 sm:py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary sm:px-4 sm:text-xs">
              Agropecuária e pet
            </span>

            <h1 className="mt-5 text-[1.9rem] leading-[1.14] text-primary-deep sm:mt-6 sm:text-5xl lg:text-[3.4rem]">
              Tudo para cuidar do seu pet, sua criação e sua propriedade.
            </h1>

            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
              Na Lessa Agropecuária você encontra rações, produtos para animais,
              itens para sua propriedade e atendimento próximo para ajudar você a
              escolher o que realmente precisa.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                Falar no WhatsApp
              </WhatsAppButton>
              <a
                href="#produtos"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3.5 text-[0.9375rem] font-semibold text-primary transition-all duration-300 hover:border-primary/45 hover:bg-secondary sm:w-auto md:px-7 md:py-4 md:text-base"
              >
                Conhecer nossos produtos
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-border pt-5 sm:mt-10 sm:gap-x-6 sm:gap-y-3 sm:pt-6">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[0.8125rem] font-semibold text-secondary-foreground sm:text-sm"
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
                className="aspect-[4/3] h-full w-full object-cover sm:aspect-auto"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-7 left-3 right-3 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="text-sm font-semibold text-primary-deep">
                Não sabe qual produto escolher?
              </p>
              <p className="mt-1 text-[0.8125rem] text-muted-foreground sm:text-sm">
                Nossa equipe ajuda você a decidir pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
