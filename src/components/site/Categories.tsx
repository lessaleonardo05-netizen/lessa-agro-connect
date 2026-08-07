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
          <h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">
            Encontre o que você precisa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Reunimos em um só lugar as principais linhas de produtos para pets,
            criação e propriedade.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const Icon = icons[category.icon];
            return (
              <Reveal as="li" key={category.id} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary-deep">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
