import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { createUserSchema } from "../../schema/user.schema";
import { createRouter, publicProcedure } from "../createRouter";
import { TRPCError } from "@trpc/server"


export const userRouter = createRouter({
    register: publicProcedure
        .input(createUserSchema)
        .mutation(async ({ctx, input}) => {
            const {email, name} = input;
            try {
                const user = await ctx.prisma.user.create({
                    data: {
                        email, 
                        name
                    }
                })
                return {user};
            } catch (error) {
                if (error instanceof PrismaClientKnownRequestError) {
                    if (error.code === 'P2002') { // Unique constraint
                        throw new TRPCError({
                            code: 'CONFLICT',
                            message: 'User already exists'
                        })
                    }
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: error.message
                    })
                }
                console.log(error)
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Something else went wrong"
                })
            }
        })
})