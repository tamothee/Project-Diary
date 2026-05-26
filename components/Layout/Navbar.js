import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/Projects" },
];

const externalItems = [
  { title: "GitHub", href: "https://github.com/tamothee" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/timothy-leong-ming-liang/",
  },
];

export default function Navbar() {
  const router = useRouter();

  function isActive(href) {
    if (href === "/") {
      return router.pathname === "/";
    }

    return router.pathname.startsWith(href);
  }

  return (
    <nav className="flex min-w-0 flex-wrap items-center justify-end gap-1 sm:flex-nowrap sm:gap-3">
      {navItems.map((item) => {
        const active = isActive(item.href);

        return (
          <Link key={item.title} href={item.href} passHref>
            <a
              className={
                active
                  ? "rounded-full bg-brand-teal/10 px-3 py-2 text-xs font-semibold text-brand-teal ring-1 ring-brand-teal/20 transition dark:bg-brand-cyan/10 dark:text-brand-cyan dark:ring-brand-cyan/20 sm:px-4 sm:text-sm"
                  : "nav-link"
              }
            >
              {item.title}
            </a>
          </Link>
        );
      })}

      {externalItems.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-brand-light-border px-3 py-2 text-xs font-medium text-brand-light-subtle transition hover:border-brand-teal hover:bg-brand-light-muted hover:text-brand-teal dark:border-brand-dark-border dark:text-brand-dark-subtle dark:hover:border-brand-cyan dark:hover:bg-brand-dark-muted dark:hover:text-brand-cyan sm:px-4 sm:text-sm"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}