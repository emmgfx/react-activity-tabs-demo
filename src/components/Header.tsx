import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <div className="h-8 md:h-16" />
      <div>
        <Link
          href="/"
          className="flex mx-auto w-fit justify-center text-center items-center capitalize font-semibold text-lg md:text-2xl gap-2"
        >
          <span className="bg-slate-300 text-slate-700 rounded-t-2xl px-3 py-1 md:px-6 md:py-2">
            react
          </span>
          <span className="sr-only">-</span>
          <span className="bg-slate-300 text-slate-700 rounded-t-2xl px-3 py-1 md:px-6 md:py-2">
            activity
          </span>
          <span className="sr-only">-</span>
          <span className="bg-slate-600 text-slate-100 rounded-t-2xl px-3 py-1 md:px-6 md:py-2">
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
