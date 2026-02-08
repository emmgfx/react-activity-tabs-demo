import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <div className="h-8 md:h-16" />
      <div>
        <Link
          href="/"
          className="mx-auto flex w-fit items-center justify-center gap-2 text-center text-lg font-semibold capitalize md:text-2xl"
        >
          <span className="rounded-t-2xl bg-slate-300 px-3 py-1 text-slate-700 md:px-6 md:py-2">
            react
          </span>
          <span className="sr-only">-</span>
          <span className="rounded-t-2xl bg-slate-300 px-3 py-1 text-slate-700 md:px-6 md:py-2">
            activity
          </span>
          <span className="sr-only">-</span>
          <span className="rounded-t-2xl bg-slate-600 px-3 py-1 text-slate-100 md:px-6 md:py-2">
            tabs
          </span>
        </Link>
      </div>
      <div className="h-8 md:h-16" />

      <div className="text-center text-balance">
        React tabs component that doesn't loose your state
      </div>
      <div className="h-8 md:h-16" />
    </div>
  );
};
