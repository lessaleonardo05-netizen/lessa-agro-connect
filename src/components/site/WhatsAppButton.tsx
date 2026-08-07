import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/data/site";

/** Ícone oficial do WhatsApp (traço único, leve). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.34 5.11 4.55.71.29 1.27.46 1.71.59.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5A9.44 9.44 0 0 1 18.73 5.5a9.35 9.35 0 0 1 2.76 6.66 9.44 9.44 0 0 1-9.44 9.34ZM12.06 1a11.24 11.24 0 0 0-9.75 16.84L.75 23.5l5.79-1.52A11.24 11.24 0 1 0 12.06 1Z" />
    </svg>
  );
}

type Props = {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:bg-primary-soft hover:shadow-lift hover:-translate-y-0.5",
  solid:
    "bg-primary-foreground text-primary shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-primary/25 bg-card text-primary hover:border-primary/50 hover:bg-secondary",
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-[0.9375rem] md:px-7 md:py-4 md:text-base",
};

export function WhatsAppButton({
  children,
  message,
  variant = "primary",
  size = "md",
  className,
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <WhatsAppIcon className="size-[1.15em] shrink-0" />
      <span>{children}</span>
    </a>
  );
}
