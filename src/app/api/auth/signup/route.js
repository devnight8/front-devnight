import connectDB from "@/utils/connectDB";
import {NextResponse} from "next/server";
import User from "@/models/Users";
import {hashPassword} from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {username, email, password, nickname} = body;
    if (!username || !email || !password || !nickname) {
      return NextResponse.json(
        {error: "لطفا اطلاعات معتبر وراد کنید"},
        {status: 422}
      );
    }

    const existingUser = await User.findOne({email: email});
    if (existingUser) {
      return NextResponse.json({
        error: "شما قبلا با این ایمیل ثبت نام کرده اید",
        status: 422,
      });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      nickname: nickname,
      username: username,
      email: email,
      password: hashedPassword,
    });
    return NextResponse.json(
      {message: "ثبت نام با موفقیت انجام شد "},
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {error: "مشکلی در سرور رخ داده است "},
      {status: 500}
    );
  }
}
