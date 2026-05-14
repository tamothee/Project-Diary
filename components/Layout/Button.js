import Link from "next/link";

export default function Button({
  href,
  external,
  children,
  className = "",
  variant = "primary",
  onClick,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-teal text-white shadow-sm hover:bg-teal-500 focus:ring-brand-teal focus:ring-offset-brand-light-bg dark:bg-brand-cyan dark:text-brand-dark-bg dark:hover:bg-cyan-300 dark:focus:ring-brand-cyan dark:focus:ring-offset-brand-dark-bg",

    secondary:
      "border border-brand-light-border text-brand-light-text hover:border-brand-teal hover:text-brand-teal focus:ring-brand-teal focus:ring-offset-brand-light-bg dark:border-brand-dark-border dark:text-brand-dark-text dark:hover:border-brand-cyan dark:hover:text-brand-cyan dark:focus:ring-brand-cyan dark:focus:ring-offset-brand-dark-bg",

    ghost:
      "text-brand-light-subtle hover:bg-brand-light-muted hover:text-brand-teal focus:ring-brand-teal focus:ring-offset-brand-light-bg dark:text-brand-dark-subtle dark:hover:bg-brand-dark-muted dark:hover:text-brand-cyan dark:focus:ring-brand-cyan dark:focus:ring-offset-brand-dark-bg",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a className={buttonClasses} onClick={onClick} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}