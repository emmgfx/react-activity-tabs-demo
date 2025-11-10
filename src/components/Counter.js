"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-4">
      <div>Counter: {count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white font-semibold rounded-full py-2 px-4"
      >
        Increment
      </button>
    </div>
  );
};
