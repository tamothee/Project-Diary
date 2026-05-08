export default function Section({ title, subtitle, children, className = "" }) {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
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