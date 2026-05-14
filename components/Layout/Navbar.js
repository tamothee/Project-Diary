import Link from "next/link";

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
  return (
    <nav className="flex flex-wrap items-center justify-end gap-2 text-sm sm:gap-3">
      {navItems.map((item) => (
        <Link key={item.title} href={item.href} passHref>
          <a className="nav-link">{item.title}</a>
        </Link>
      ))}

      {externalItems.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-brand-light-border px-3 py-2 font-medium text-brand-light-subtle transition hover:border-brand-teal hover:bg-brand-light-muted hover:text-brand-teal dark:border-brand-dark-border dark:text-brand-dark-subtle dark:hover:border-brand-cyan dark:hover:bg-brand-dark-muted dark:hover:text-brand-cyan"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}