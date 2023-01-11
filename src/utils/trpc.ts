import { createTRPCReact } from "@trpc/react-query"
import { AppRouter } from "../server/route/app.router";

export const trpc = createTRPCReact<AppRouter>();
