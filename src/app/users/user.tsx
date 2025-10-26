// "use client";
// import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { fetchQuery, fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { use } from "react";

const User = () => {
  //   const user = useQuery(api.users.get);
  //   const handleCreate = useMutation(api.users.create);

  const user = use(fetchQuery(api.users.get));

  console.log("user", user);

  return (
    <div>
      User: {user ? JSON.stringify(user) : "Loading..."}
      <form
        action={async () => {
          "use server";
          await fetchMutation(api.users.create);
          revalidatePath("/users");
        }}
      >
        <button
        // onClick={async () => {
        //   //   await handleCreate({
        //   //     /* args */
        //   //   });

        //   await fetchMutation(api.users.create);
        // }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default User;
