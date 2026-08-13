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
          <h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">
            Quem compra, recomenda.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            O que os clientes dizem sobre o atendimento e os produtos da loja.
          </p>

        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <Quote className="size-7 text-accent" aria-hidden="true" />
                <div
                  className="mt-4 flex gap-0.5"
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
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-secondary-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
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
