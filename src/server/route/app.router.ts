import { z } from "zod";
import { createRouter, publicProcedure } from "../createRouter";
import { userRouter } from "./users.router";

export const appRouter = createRouter({
    users: userRouter
});

export type AppRouter = typeof appRouter; 