import User from "@/models/Users";
import {verifyPassword} from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {strategy: "jwt"},
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const {email, password} = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور پیش آمده است");
        }
        if (!email || !password)
          throw new Error("لطفا اطلاعات معتبر وارد کنید");

        const user = await User.findOne({email});
        if (!user) throw new Error("اول باید در سایت ثبت نام کنید");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("رمز عبور یا نام کاربری اشتباه است");

        return {email};
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
