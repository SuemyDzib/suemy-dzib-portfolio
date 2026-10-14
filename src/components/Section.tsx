import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className="scroll-mt-4 border-t border-line first:border-t-0"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[13rem_1fr] md:gap-12">
        <h2
          id={`${id}-titulo`}
          className="font-display text-3xl font-bold tracking-tight"
        >
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
