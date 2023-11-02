import SignUpPage from '@/components/template/SignUpPage'
import { authOptions } from '@/src/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation';

async function SignUp() {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")
  return (
   <SignUpPage/>
  )
}

export default SignUp