import { User } from "@/models/user.models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const {email, password} = await req.json();
    if(!email || !password){
        return NextResponse.json({success: false, message: "Email and password are required"}, {status: 400});
    }

    const user = await User.findOne({email});

    if(!user){
        return NextResponse.json({success: false, message: "Invalid email"}, {status: 401})
    }


    if(user.password != password){
        return NextResponse.json({success: false, message: "Invalid password"}, {status: 401})
    }



    return NextResponse.json(
        {success: true, message: "Login successful", user}, {status: 200}
    )


}
