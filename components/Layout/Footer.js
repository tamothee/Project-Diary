export default function Footer() {
  return (
    <footer className="border-t border-brand-light-border bg-brand-light-surface/90 backdrop-blur dark:border-brand-dark-border dark:bg-brand-dark-surface/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row sm:px-6">
        <p className="muted-text">
          Designed by{" "}
          <span className="font-semibold text-brand-light-text dark:text-brand-dark-text">
            Timothy Leong
          </span>
        </p>

        <a
          href="mailto:timo9132@gmail.com"
          className="font-medium text-brand-light-subtle transition hover:text-brand-teal dark:text-brand-dark-subtle dark:hover:text-brand-cyan"
        >
          timo9132@gmail.com
        </a>
      </div>
    </footer>
  );
}