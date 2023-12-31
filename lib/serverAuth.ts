import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
// import { getSession } from "next-auth/react";

import prismadb from '@/lib/prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";


const serverAuth = async(req: NextApiRequest, res:NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);
    // console.log("session",session?.user?.email);
    
    
    if (!session?.user?.email){
        throw new Error("User is not signed in")
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });

    if (!currentUser){
        throw new Error("Not Signed In");
    }

    return {currentUser};
 }

 export default serverAuth;