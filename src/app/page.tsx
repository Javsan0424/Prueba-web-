import Image from "next/image";
import Link from "next/link";
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className = "min-h-screen flex items-center justify-center">
          <Rectangle color="green"/>
          <Link  href="/page2" className="text-blue-500 hover:underline">
            Go to page 2
          </Link>
        </div>

        <ol>
          <a href="/page2" className="text-blue-500 hover:underline"> Page 2</a>
          <br />
          <a href="/Homework" className="text-blue-500 hover:underline"> Matrix Homework 13/02/2025</a>
        </ol>

        
      </main>
    </div>
  );
}
