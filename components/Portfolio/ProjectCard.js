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
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-md dark:bg-gray-900 ${
        featured
          ? "border-gray-300 dark:border-gray-600"
          : "border-gray-200 dark:border-gray-800"
      }`}
    >
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        {summary && (
          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {summary}
          </p>
        )}

        {description && (
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {description}
          </p>
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
        <Link href={href}>
          <a className="mt-6 inline-flex text-sm font-medium text-gray-900 underline underline-offset-4 transition hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
            View project
          </a>
        </Link>
      )}
    </article>
  );
}