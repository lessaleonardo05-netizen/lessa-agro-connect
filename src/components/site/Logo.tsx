import { company } from "@/data/site";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-lessa.png";

/** Marca da Lessa Agropecuária: cão + gato na cor da identidade visual. */
export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="size-10 shrink-0 rounded-xl object-cover"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate text-[1.0625rem] font-extrabold tracking-tight",
            inverted ? "text-primary-foreground" : "text-primary-deep",
          )}
        >
          {company.shortName}
        </span>
        <span
          className={cn(
            "truncate text-[0.6875rem] font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Agropecuária
        </span>
      </span>
    </span>
  );
}
