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
      </main>
    </div>
  );
};

export default Page;
