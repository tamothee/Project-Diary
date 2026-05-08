export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/90 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-gray-900 dark:text-gray-400 sm:flex-row sm:px-6">
        <p className="text-gray-500 dark:text-gray-400">Designed by Timothy Leong</p>
        <a href="mailto:timo9132@gmail.com" className="text-gray-500 dark:text-gray-400 transition hover:text-white dark:text-gray-100 dark:hover:text-gray-300">
          timo9132@gmail.com
        </a>
      </div>
    </footer>
  );
}
