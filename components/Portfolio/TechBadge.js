export default function TechBadge({ children, variant = "default" }) {
  const variants = {
    default:
      "border-brand-light-border bg-brand-light-muted text-brand-light-subtle dark:border-brand-dark-border dark:bg-brand-dark-muted dark:text-brand-dark-subtle",

    accent:
      "border-brand-teal/30 bg-brand-teal/10 text-brand-teal dark:border-brand-cyan/30 dark:bg-brand-cyan/10 dark:text-brand-cyan",

    warm:
      "border-brand-amber/30 bg-brand-amber/10 text-brand-amber",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}