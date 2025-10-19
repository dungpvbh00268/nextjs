import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const Page = () => {
  const users = use(
    fetch("https://cdn.dungpv.id.vn/databases/app.json").then((res) =>
      res.json()
    )
  );

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <pre>
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              {JSON.stringify(users, null, 2)}
            </code>
          </pre>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
          >
            <Image
              className="dark:invert"
              src="./vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Go Home
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/users"
          >
            Users
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Page;
