import { User } from "@/models/user.models";
import dbConnect from "@/utils/dbConnect";
import { type NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Username, email and password are required",
        },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User with given email or username already exists",
        },
        { status: 409 }
      );
    }

    const hashedPass = await bcrypt.hash(password, 10)

    const user = await User.create({ username, email, password: hashedPass });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Error creating user" },
        { status: 500 }
      );
    }


    //FIXME: insted of returning the user redirect to login page
    return NextResponse.json(
      { success: true, message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
