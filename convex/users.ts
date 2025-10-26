import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    // create random user

    const user = await ctx.db.insert("users", {
      name: Math.random().toString(36).substring(7),
      email: Math.random().toString(36).substring(7),
      image: "https://cdn.dungpv.id.vn/images/pro-img-1.png",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return user;
  },
});
