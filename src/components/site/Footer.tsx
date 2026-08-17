import { Instagram, Facebook, MapPin, Clock } from "lucide-react";
import { company, navLinks, whatsappLink } from "@/data/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppButton";

export function Footer() {
  const { address, hours, social, phoneDisplay, tagline } = company;

  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 md:gap-10 md:py-16">
          <div className="col-span-2 md:col-span-1">

            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {social.instagram ? (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Lessa Agropecuária"
                  className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Instagram className="size-[1.15rem]" />
                </a>
              ) : null}
              {social.facebook ? (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Lessa Agropecuária"
                  className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Facebook className="size-[1.15rem]" />
                </a>
              ) : null}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground/60">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground/60">
              Contato
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-primary-foreground"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  WhatsApp {phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {address.street}, {address.city} — {address.state}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0" />
                <span>
                  {hours[0]?.days}: {hours[0]?.time}
                  <br />
                  {hours[1]?.days}: {hours[1]?.time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-6 pb-24 md:pb-6">
          <p className="text-center text-xs text-primary-foreground/60">
            © 2026 {company.name}. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
