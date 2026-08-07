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
          <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
            Mais do que uma agropecuária. Um atendimento de confiança.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = icons[benefit.icon];
            return (
              <Reveal as="li" key={benefit.title} delay={i * 80}>
                <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                  <Icon className="size-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/70">
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
