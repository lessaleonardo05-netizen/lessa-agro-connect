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
          <h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">
            Produtos em destaque
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Alguns exemplos do que você encontra na loja. Consulte
            disponibilidade e opções pelo WhatsApp.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Reveal as="li" key={product.id} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.alt}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-primary-deep">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <WhatsAppButton
                    variant="outline"
                    className="mt-6 w-full"
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
