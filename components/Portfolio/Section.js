export default function Section({
  title,
  subtitle,
  eyebrow,
  children,
  className = "",
  centered = false,
}) {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="content-shell">
        {(title || subtitle || eyebrow) && (
          <div
            className={`mb-8 max-w-3xl ${
              centered ? "mx-auto text-center" : ""
            }`}
          >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}

            {title && (
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text sm:text-4xl">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-4 text-base leading-7 muted-text">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}