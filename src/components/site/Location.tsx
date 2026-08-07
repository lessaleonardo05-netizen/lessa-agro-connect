import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { company, mapsEmbedUrl, mapsDirectionsUrl } from "@/data/site";
import { Reveal } from "./Reveal";

export function Location() {
  const { address, hours, phoneDisplay } = company;

  return (
    <section id="contato" className="section-py bg-surface">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Localização
          </span>
          <h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">
            Visite nossa loja
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Estamos prontos para atender você pessoalmente e ajudar na escolha
            dos produtos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex min-w-0 items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-primary-deep">Endereço</h3>
                  <address className="mt-1.5 text-sm not-italic leading-relaxed text-muted-foreground">
                    {address.street}
                    <br />
                    {address.city} — {address.state}
                    <br />
                    CEP {address.zip}
                  </address>
                </div>
              </div>

              <div className="mt-7 flex min-w-0 items-start gap-4 border-t border-border pt-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Clock className="size-5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-primary-deep">
                    Horário de funcionamento
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {hours.map((item) => (
                      <li
                        key={item.days}
                        className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-sm text-muted-foreground"
                      >
                        <span className="truncate">{item.days}</span>
                        <span className="font-semibold text-secondary-foreground">
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 flex min-w-0 items-start gap-4 border-t border-border pt-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-primary-deep">
                    Telefone / WhatsApp
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{phoneDisplay}</p>
                </div>
              </div>
            </div>

            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-[0.9375rem] font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-lift sm:w-auto"
            >
              <Navigation className="size-4" />
              Como chegar
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-2xl border border-border bg-card">
              <iframe
                title="Mapa da localização da Lessa Agropecuária"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
