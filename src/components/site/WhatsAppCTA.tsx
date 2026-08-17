import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function WhatsAppCTA() {
  return (
    <section className="section-py bg-background">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-5 py-10 text-center sm:px-6 sm:py-14 md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-primary-foreground/10 blur-2xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[1.6rem] leading-tight text-primary-foreground sm:text-3xl md:text-[2.5rem] md:leading-tight">
                Precisa de ajuda para encontrar o produto certo?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-primary-foreground/80 sm:mt-5 sm:text-base md:text-lg">
                Fale com nossa equipe pelo WhatsApp. Tire suas dúvidas, consulte
                produtos e receba atendimento de forma rápida e fácil.
              </p>
              <WhatsAppButton variant="solid" size="lg" className="mt-7 w-full sm:mt-9 sm:w-auto">
                Falar com a Lessa no WhatsApp
              </WhatsAppButton>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
