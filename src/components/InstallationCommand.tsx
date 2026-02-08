"use client";

import { useState } from "react";

const command = "npm i react-activity-tabs";

export const InstallationCommand = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto max-w-md rounded-full border border-white bg-slate-100 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-400 ring-offset-1">
      <code>{command}</code>
      <button
        onClick={copyToClipboard}
        className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-blue-500 px-3 py-2 text-white disabled:bg-emerald-500"
        disabled={copied}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
