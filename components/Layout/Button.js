import Link from "next/link";

export default function Button({ href, external, children, className = "", onClick, ...props }) {
  const sharedClasses =
  "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2";

  if (href) {
    if (external) {
      return (
        <a href={href} className={`${sharedClasses} ${className}`} target="_blank" rel="noreferrer" onClick={onClick} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a className={`${sharedClasses} ${className}`} onClick={onClick} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={`${sharedClasses} ${className}`} type="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}