import DashboardPage from "@/components/template/DashboardPage.jsx";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/Users";

async function DashBoard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({email: session.user.email});
  console.log(user);
  return (
    <DashboardPage
      createdAt={user?.createdAt}
      email={user?.email}
      nickname={user?.nickname}
    />
  );
}

export default DashBoard;
