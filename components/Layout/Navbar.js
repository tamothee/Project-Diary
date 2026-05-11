import Link from "next/link";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/Projects" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-end gap-3 text-sm sm:gap-4">
      {navItems.map((item) => (
        <Link key={item.title} href={item.href} passHref>
          <a className="rounded-full px-3 py-2 text-slate-800 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white">
            {item.title}
          </a>
        </Link>
      ))}

      <a
        href="https://github.com/tamothee"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-300 px-3 py-2 text-slate-800 transition hover:bg-slate-100 hover:text-slate-950 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/timothy-leong-ming-liang/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-300 px-3 py-2 text-slate-800 transition hover:bg-slate-100 hover:text-slate-950 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        LinkedIn
      </a>
    </nav>
  );
}