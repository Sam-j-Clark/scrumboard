import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "../../../server/createContext";
import { appRouter } from "../../../server/route/app.router";


/**
 * This function creates an access point for the tRPC server. 
 * It is path based so there is no need to change the location/file name. 
 */
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,
    onError({error}) {
        if (error.code === "INTERNAL_SERVER_ERROR") {
            // TODO report this as a bug.
            console.error("Something went wrong", error);
            return
        }
        console.warn(`Known error occured: ${error.message}`);
    }
})