export const Header = () => {
  return (
    <div>
      <div className="h-16" />
      <div>
        <div className="flex justify-center text-center items-center capitalize font-semibold text-2xl gap-2">
          <span className="bg-slate-300 text-slate-700 rounded-t-2xl px-6 py-2">
            react
          </span>
          <span className="sr-only">-</span>
          <span className="bg-slate-300 text-slate-700 rounded-t-2xl px-6 py-2">
            activity
          </span>
          <span className="sr-only">-</span>
          <span className="bg-slate-600 text-slate-100 rounded-t-2xl px-6 py-2">
            tabs
          </span>
        </div>
      </div>
      <div className="h-16" />

      <div className="text-center">
        React tabs component that doesn't loose your state
      </div>
      <div className="h-16" />
    </div>
  );
};
