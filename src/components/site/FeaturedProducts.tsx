import { featuredProducts } from "@/data/site";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function FeaturedProducts() {
  return (
    <section id="produtos" className="section-py bg-surface">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Nossos produtos
          </span>
          <h2 className="mt-3 text-[1.75rem] leading-tight text-primary-deep sm:text-3xl md:text-4xl">
            Produtos em destaque
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground md:mt-4 md:text-base">
            Alguns exemplos do que você encontra na loja. Consulte
            disponibilidade e opções pelo WhatsApp.
          </p>
        </Reveal>

        <ul className="snap-row mt-8 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:p-0 sm:[margin-inline:0] lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Reveal as="li" key={product.id} delay={i * 70} className="sm:flex-none">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="overflow-hidden bg-card p-3 sm:p-4">
                  <img
                    src={product.image}
                    alt={product.alt}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary sm:text-xs">
                    {product.category}
                  </span>
                  <h3 className="mt-1.5 text-base font-bold text-primary-deep sm:mt-2 sm:text-lg">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                    {product.description}
                  </p>
                  <WhatsAppButton
                    variant="outline"
                    className="mt-4 w-full sm:mt-6"
                    message={`Olá! Vim pelo site da Lessa Agropecuária e gostaria de consultar: ${product.name}.`}
                  >
                    Consultar
                  </WhatsAppButton>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
