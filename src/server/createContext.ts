import { NextApiRequest, NextApiResponse } from "next"
// import { verifyJwt } from "../utils/jwt"
import  { prisma } from "../utils/prisma"

interface ContextUser {
    id: string
    userId: string
    email: string
    name: string
    iat: number
    exp: number
}

function getUserFromCookie(req: NextApiRequest) {
    const token = req.cookies.token;

    if (token) {
        try {
            // const verified = verifyJwt<ContextUser>(token); // Todo write verifyJwt
            // return verified;
            return null
        } catch (error) {
            return null
        }
    }
}

export function createContext({req, res}: {req: NextApiRequest, res: NextApiResponse}) {
    const user = getUserFromCookie(req);
    return {req, res, user, prisma}; 
}

export type Context = ReturnType<typeof createContext>