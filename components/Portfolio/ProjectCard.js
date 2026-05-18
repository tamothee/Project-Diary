import Link from "next/link";
import TechBadge from "./TechBadge";

export default function ProjectCard({
  title,
  description,
  summary,
  tags = [],
  href,
  featured = false,
}) {
  const cardContent = (
    <article
      className={`group flex h-full flex-col section-card ${
        featured ? "ring-1 ring-brand-teal/30 dark:ring-brand-cyan/30" : ""
      }`}
    >
      <div className="flex-1">
        {featured && (
          <p className="mb-3 inline-flex rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold text-brand-teal dark:bg-brand-cyan/10 dark:text-brand-cyan">
            Featured
          </p>
        )}

        <h3 className="text-xl font-bold text-brand-light-text transition group-hover:text-brand-teal dark:text-brand-dark-text dark:group-hover:text-brand-cyan">
          {title}
        </h3>

        {summary && (
          <p className="mt-2 text-sm font-semibold text-brand-light-subtle dark:text-brand-dark-subtle">
            {summary}
          </p>
        )}

        {description && (
          <p className="mt-3 text-sm leading-6 muted-text">{description}</p>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TechBadge key={tag}>{tag}</TechBadge>
            ))}
          </div>
        )}
      </div>

      {href && (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition group-hover:text-teal-600 dark:text-brand-cyan dark:group-hover:text-cyan-300">
          View project
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      )}
    </article>
  );

  if (!href) {
    return cardContent;
  }

  return (
    <Link href={href} passHref>
      <a className="group block h-full rounded-2xl transition hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-brand-light-bg dark:focus:ring-brand-cyan dark:focus:ring-offset-brand-dark-bg">
        {cardContent}
      </a>
    </Link>
  );
}