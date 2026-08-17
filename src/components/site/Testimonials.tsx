import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-py bg-surface">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Avaliações
          </span>
          <h2 className="mt-3 text-[1.75rem] leading-tight text-primary-deep sm:text-3xl md:text-4xl">
            Quem compra, recomenda.
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground md:mt-4 md:text-base">
            O que os clientes dizem sobre o atendimento e os produtos da loja.
          </p>
        </Reveal>

        <ul className="snap-row mt-8 md:mt-12 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0 md:[margin-inline:0]">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 80} className="md:flex-none">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-7">
                <Quote className="size-6 text-accent sm:size-7" aria-hidden="true" />
                <div
                  className="mt-3 flex gap-0.5 sm:mt-4"
                  aria-label={`${item.rating} de 5 estrelas`}
                >
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-star text-star"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-secondary-foreground sm:mt-4 sm:text-base">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4 sm:mt-6">
                  <img
                    src={item.avatar}
                    alt={`Foto de ${item.author}`}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="size-11 shrink-0 rounded-full object-cover"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-primary-deep">
                      {item.author}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
