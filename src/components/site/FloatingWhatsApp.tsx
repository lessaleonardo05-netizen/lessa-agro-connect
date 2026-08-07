import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Lessa Agropecuária no WhatsApp"
      className="animate-pop-in fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7 md:size-[3.75rem]"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
