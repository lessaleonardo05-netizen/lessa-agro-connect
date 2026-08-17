import lojaAsset from "@/assets/loja-lessa.jpg.asset.json";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function About() {
  return (
    <section id="sobre" className="section-py bg-background">
      <div className="container-page">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={lojaAsset.url}
                alt="Fachada da loja Lessa Agropecuária em Iguaba Grande — RJ"
                width={1175}
                height={1338}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover sm:aspect-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Sobre nós
            </span>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-primary-deep sm:text-3xl md:text-4xl">
              Conheça a Lessa Agropecuária
            </h2>
            <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:mt-6 sm:space-y-5 sm:text-base">
              <p>
                A Lessa Agropecuária nasceu com o propósito de oferecer produtos
                de qualidade, variedade e um atendimento próximo para quem cuida
                de animais, pets e da vida no campo.
              </p>
              <p>
                Mais do que vender produtos, buscamos entender as necessidades de
                cada cliente e oferecer soluções práticas para o seu dia a dia.
              </p>
            </div>
            <WhatsAppButton
              className="mt-7 w-full sm:mt-9 sm:w-auto"
              message="Olá! Vim pelo site da Lessa Agropecuária e gostaria de falar com a equipe."
            >
              Falar com a nossa equipe
            </WhatsAppButton>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
