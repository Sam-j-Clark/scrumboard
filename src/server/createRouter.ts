import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';
import { Context } from './createContext';
 

// You can use any variable name you like.
// We use t to keep things simple.
const trpc = initTRPC.context<Context>().create({
    transformer: SuperJSON
});
 

export const createRouter = trpc.router;
export const createMiddleware = trpc.middleware;
export const publicProcedure = trpc.procedure;