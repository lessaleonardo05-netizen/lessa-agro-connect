import sobreImage from "@/assets/sobre-loja.jpg";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function About() {
  return (
    <section id="sobre" className="section-py bg-background">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={sobreImage}
                alt="Equipe da Lessa Agropecuária atendendo um cliente no balcão da loja"
                width={1200}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Sobre nós
            </span>
            <h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">
              Conheça a Lessa Agropecuária
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
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
            <WhatsAppButton className="mt-9" message="Olá! Vim pelo site da Lessa Agropecuária e gostaria de falar com a equipe.">
              Falar com a nossa equipe
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
