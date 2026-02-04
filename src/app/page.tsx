import Link from "next/link";
import { Code } from "bright";

import { Header } from "@/components/Header";
import { Demo1, demo1code } from "@/components/Demo1";
import { Demo2, demo2code1, demo2code2 } from "@/components/Demo2";

Code.theme = "github-dark";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <p className="text-lg font-semibold">
            Basic styling with Tailwind classes
          </p>
          <div className="h-4" />
          <Demo1 />
        </div>
        <div>
          <Code
            lang="jsx"
            className="m-0! text-sm rounded-2xl!"
            title="basic-styling.jsx"
          >
            {demo1code}
          </Code>
        </div>
      </div>

      <div className="h-8" />
      <div className="h-px bg-slate-200" />
      <div className="h-8" />

      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-slate-900 p-2 rounded-2xl">
          <Code
            lang="jsx"
            className="m-0! text-sm "
            title="reusable-styles-usage.jsx"
          >
            {demo2code1}
          </Code>
          {/* <div className="h-2" /> */}
          <Code
            lang="jsx"
            className="m-0! text-sm "
            title="reusable-styles-implementation.jsx"
          >
            {demo2code2}
          </Code>
        </div>
        <div>
          <p className="text-lg font-semibold">Reusable custom styles</p>
          <div className="h-4" />
          <Demo2 />
        </div>
      </div>
      <footer>
        <div className="h-16" />
        <p className="text-center text-slate-700">
          &copy; 2025 react-activity-tabs. Built by{" "}
          <Link href="https://www.viciana.me">Josep Viciana</Link>
        </p>
        <div className="h-16" />
      </footer>
    </div>
  );
}
