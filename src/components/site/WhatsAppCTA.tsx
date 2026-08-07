import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function WhatsAppCTA() {
  return (
    <section className="section-py bg-background">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-primary-foreground/10 blur-2xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-primary-foreground md:text-[2.5rem] md:leading-tight">
                Precisa de ajuda para encontrar o produto certo?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                Fale com nossa equipe pelo WhatsApp. Tire suas dúvidas, consulte
                produtos e receba atendimento de forma rápida e fácil.
              </p>
              <WhatsAppButton variant="solid" size="lg" className="mt-9">
                Falar com a Lessa no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
