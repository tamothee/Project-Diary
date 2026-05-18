export default function Loading() {
  return (
    <div className="relative flex h-[30vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-brand-light-border bg-brand-light-surface/80 px-5 py-2.5 text-sm font-medium text-brand-light-subtle shadow-sm backdrop-blur dark:border-brand-dark-border dark:bg-brand-dark-surface/80 dark:text-brand-dark-subtle">
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-teal dark:bg-brand-cyan" />
        Loading...
      </div>
    </div>
  );
}