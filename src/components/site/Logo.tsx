import { company } from "@/data/site";
import { cn } from "@/lib/utils";

/** Marca da Lessa Agropecuária: folha + inicial, sem imagens externas. */
export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-xl",
          inverted ? "bg-primary-foreground/12" : "bg-primary",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M20 4c0 8.5-4.7 12.6-10.4 12.6H6.6C6.6 9.2 11.6 4.8 20 4Z"
            fill={inverted ? "currentColor" : "var(--primary-foreground)"}
            opacity={inverted ? 0.95 : 0.95}
          />
          <path
            d="M5 21c.6-4.6 2.7-8.3 6.4-11"
            stroke={inverted ? "currentColor" : "var(--primary-foreground)"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
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
