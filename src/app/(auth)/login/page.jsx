import LoginPage from '@/components/template/LoginPage'
import { authOptions } from '@/src/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation';

async function login() {
  const session = await getServerSession(authOptions);
  if(session){
    redirect("/")
  }
  return (
    <LoginPage/>
  )
}

export default login