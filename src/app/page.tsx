import Image from "next/image";
import { Section } from "@/components/Section";
import { StitchBand, StitchMark } from "@/components/StitchBand";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

// Los proyectos de ejemplo solo se ven en desarrollo, nunca en el sitio publicado.
const visibleProjects = projects.filter(
  (p) => !p.placeholder || process.env.NODE_ENV !== "production",
);

const featuredProjects = visibleProjects.filter(
  (p) => p.featured || p.placeholder,
);
const otherProjects = visibleProjects.filter(
  (p) => !p.featured && !p.placeholder,
);

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  ...(visibleProjects.length > 0
    ? [{ href: "#proyectos", label: "Proyectos" }]
    : []),
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

const extraLinks = [
  { href: profile.links.linkedin, label: "LinkedIn" },
  { href: profile.links.github, label: "GitHub" },
  { href: profile.links.whatsapp, label: "WhatsApp" },
  { href: profile.links.cv, label: "Descargar CV" },
].filter((l) => l.href);

const textLink =
  "font-bold text-cenote underline decoration-2 underline-offset-4 hover:decoration-4";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-10 bg-tinta px-4 py-2 text-izamal focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>

      <header className="bg-izamal text-tinta">
        <nav
          aria-label="Principal"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-5 sm:px-8"
        >
          <a href="#" className="font-display text-lg font-bold">
            {profile.shortName}
          </a>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
          <h1 className="font-display text-[clamp(3.25rem,11vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.035em]">
            {profile.heroLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-[34ch] text-xl leading-snug sm:text-2xl">
            {profile.headline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-md bg-tinta px-5 py-3 font-bold text-izamal transition-opacity hover:opacity-90"
            >
              Escríbeme
            </a>
            <a
              href={visibleProjects.length > 0 ? "#proyectos" : "#experiencia"}
              className="rounded-md border-2 border-tinta px-5 py-2.5 font-bold transition-colors hover:bg-tinta/10"
            >
              {visibleProjects.length > 0 ? "Ver proyectos" : "Ver experiencia"}
            </a>
          </div>
        </div>

        <StitchBand />
      </header>

      <main id="contenido">
        <Section id="sobre-mi" title="Sobre mí">
          <div className="grid gap-10 lg:grid-cols-[1fr_15rem]">
            <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside
              className={
                profile.photo
                  ? "order-first flex flex-wrap items-start gap-x-8 gap-y-8 lg:order-0 lg:block"
                  : ""
              }
            >
              {profile.photo && (
                <div className="relative aspect-4/5 w-36 shrink-0 overflow-hidden rounded-md shadow-[8px_8px_0_0_var(--color-izamal)] sm:w-44 lg:mb-10 lg:w-full lg:shadow-[10px_10px_0_0_var(--color-izamal)]">
                  <Image
                    src={profile.photo}
                    alt={profile.photoAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 240px, 176px"
                    className="object-cover"
                  />
                </div>
              )}
              <dl className="space-y-4 border-l-2 border-line pl-5">
                {profile.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="font-bold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Section>

        <Section id="experiencia" title="Experiencia">
          <ol className="space-y-12 border-l-2 border-line">
            {experience.map((job) => (
              <li key={job.company} className="relative pl-8">
                <StitchMark className="absolute -left-1.75 top-2 bg-bg" />
                <p className="text-sm text-muted">{job.period}</p>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                  {job.role}
                </h3>
                <p className="text-muted">
                  {job.company}, {job.location}
                </p>
                <p className="mt-4 max-w-[65ch] leading-relaxed">
                  {job.summary}
                </p>
                <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 leading-relaxed marker:text-rosa">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {job.tech && (
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-bold text-ink">Tecnologías: </span>
                    {job.tech.join(", ")}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Section>

        {visibleProjects.length > 0 && (
          <Section id="proyectos" title="Proyectos">
            <ul className="divide-y divide-line border-y border-line">
              {featuredProjects.map((project, i) => (
                <li
                  key={`${project.title}-${i}`}
                  className={`grid gap-3 py-8 md:grid-cols-[1fr_auto] md:gap-8 ${
                    project.placeholder
                      ? "my-3 rounded-md border-2 border-dashed border-line px-5"
                      : ""
                  }`}
                >
                  <div>
                    {project.placeholder && (
                      <p className="mb-2 text-sm text-rosa">
                        Ejemplo visible solo en desarrollo. Edítalo en
                        src/data/portfolio.ts
                      </p>
                    )}
                    {project.personal && (
                      <p className="mb-2 inline-block rounded-sm bg-izamal px-2 py-0.5 text-sm font-bold text-tinta">
                        Proyecto personal
                      </p>
                    )}
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] leading-relaxed">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm text-muted">
                      {project.tech.join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-5 md:flex-col md:gap-2 md:text-right">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                      >
                        Ver demo
                        <span className="sr-only"> de {project.title}</span>
                      </a>
                    )}
                    {project.repos?.map((repo) => (
                      <a
                        key={repo.href}
                        href={repo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                      >
                        {repo.label}
                        <span className="sr-only"> de {project.title}</span>
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {otherProjects.length > 0 && (
              <div className="mt-14">
                <h3 className="font-display text-xl font-bold">
                  Otros proyectos
                </h3>
                <ul className="mt-5 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {otherProjects.map((project) => (
                    <li key={project.title}>
                      <a
                        href={project.demo || project.repos?.[0]?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                      >
                        {project.title}
                      </a>
                      <p className="mt-1 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {project.tech.join(", ")}
                        {project.demo &&
                          project.repos?.map((repo) => (
                            <span key={repo.href}>
                              {", "}
                              <a
                                href={repo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cenote underline underline-offset-2"
                              >
                                {repo.label.toLowerCase()}
                                <span className="sr-only">
                                  {" "}
                                  de {project.title}
                                </span>
                              </a>
                            </span>
                          ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Section>
        )}

        <Section id="habilidades" title="Habilidades">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="font-display text-xl font-bold">
                  {group.group}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm bg-surface px-2.5 py-1 text-[0.95rem] ring-1 ring-line"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="formacion" title="Formación">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-bold">Estudios</h3>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li key={item.title}>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-muted">
                      {[item.place, item.period].filter(Boolean).join(", ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">
                Certificaciones
              </h3>
              <ul className="mt-4 space-y-4">
                {certifications.map((item) => (
                  <li key={item.title}>
                    <p className="font-bold">{item.title}</p>
                    {(item.place || item.period) && (
                      <p className="text-muted">
                        {[item.place, item.period].filter(Boolean).join(", ")}
                      </p>
                    )}
                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${textLink} mt-1 inline-block text-sm`}
                      >
                        Ver certificado
                        <span className="sr-only"> de {item.title}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contacto" title="Contacto">
          <p className="max-w-[50ch] text-lg leading-relaxed">
            {profile.lookingFor} Si tienes una vacante o un proyecto en mente,
            escríbeme y con gusto platicamos.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block break-all font-display text-[clamp(1.4rem,4.5vw,2.75rem)] font-bold tracking-tight underline decoration-izamal decoration-4 underline-offset-8 hover:decoration-cenote"
          >
            {profile.email}
          </a>
          {(extraLinks.length > 0 || profile.phone) && (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {profile.phone && (
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className={textLink}
                  >
                    {profile.phone}
                  </a>
                </li>
              )}
              {extraLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted sm:px-8">
          © {new Date().getFullYear()} {profile.name}. {profile.location}.
        </div>
      </footer>
    </>
  );
}
