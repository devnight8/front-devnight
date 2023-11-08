import DashboardPage from "@/components/template/DashboardPage.jsx";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/Users";

async function DashBoard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({email: session.user.email});
  return <DashboardPage createdAt={user.createdAt} email={user.email} />;
}

export default DashBoard;
