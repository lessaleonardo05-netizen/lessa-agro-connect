import { Handshake, BadgeCheck, Layers, ShieldCheck } from "lucide-react";
import { benefits } from "@/data/site";
import { Reveal } from "./Reveal";

const icons = {
  handshake: Handshake,
  badge: BadgeCheck,
  layers: Layers,
  shield: ShieldCheck,
};

export function Benefits() {
  return (
    <section id="diferenciais" className="section-py bg-primary-deep">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            Por que escolher a Lessa?
          </span>
          <h2 className="mt-3 text-[1.75rem] leading-tight text-primary-foreground sm:text-3xl md:text-4xl">
            Mais do que uma agropecuária. Um atendimento de confiança.
          </h2>
        </Reveal>

        <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-10 sm:gap-y-12 md:mt-14 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = icons[benefit.icon];
            return (
              <Reveal as="li" key={benefit.title} delay={i * 80}>
                <span className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 text-primary-foreground sm:size-12">
                  <Icon className="size-5 sm:size-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary-foreground sm:mt-5 sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-primary-foreground/70 sm:text-sm">
                  {benefit.description}
                </p>
              </Reveal>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
