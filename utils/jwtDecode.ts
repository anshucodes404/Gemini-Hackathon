import jwt from "jsonwebtoken"

import { cookies } from "next/headers";

interface DecodedToken {
    _id: string;
    email: string;
    username: string;
}

export default async function jwtDecode(): Promise<DecodedToken | null>{
    const token = (await cookies()).get("token")?.value;

    if(!token){
        return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN as string) as DecodedToken;

    if(!decoded){
        console.error("No decoded data")
    }

    return decoded;
}