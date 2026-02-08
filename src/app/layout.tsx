import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "react-activity-tabs",
    template: "react-activity-tabs - %s",
  },
  description:
    "React tabs component that doesn't loose your state, by using the Activity component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-50 text-slate-800">
      <body className={`p-2 antialiased`}>{children}</body>
    </html>
  );
}
