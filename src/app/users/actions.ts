"use server";

import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "~/lib/prisma";

export const create = async (user: User) => {
  try {
    const res = await prisma.user.create({ data: user });
    console.log("res___", res);
    revalidatePath("/users");
  } catch (error) {
    console.error("Error in create user", error);
  }
};
