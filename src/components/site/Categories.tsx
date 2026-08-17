import { Dog, Cat, Bird, Sprout, Pill, Brush } from "lucide-react";
import { categories, type Category } from "@/data/site";
import { Reveal } from "./Reveal";

const icons: Record<Category["icon"], typeof Dog> = {
  dog: Dog,
  cat: Cat,
  bird: Bird,
  sprout: Sprout,
  pill: Pill,
  broom: Brush,
};

export function Categories() {
  return (
    <section id="categorias" className="section-py bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Categorias
          </span>
          <h2 className="mt-3 text-[1.75rem] leading-tight text-primary-deep sm:text-3xl md:text-4xl">
            Encontre o que você precisa
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground md:mt-4 md:text-base">
            Reunimos em um só lugar as principais linhas de produtos para pets,
            criação e propriedade.
          </p>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:mt-12 lg:grid-cols-3">
          {categories.map((category, i) => {
            const Icon = icons[category.icon];
            return (
              <Reveal as="li" key={category.id} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-6 md:p-7">
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:size-12">
                    <Icon className="size-5 sm:size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-primary-deep sm:mt-5 sm:text-lg">
                    {category.name}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                    {category.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
