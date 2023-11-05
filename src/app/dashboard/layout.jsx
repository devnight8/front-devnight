import DashboardSidbarLayout from '@/components/layout/DashboardSidbarLayout'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

async function LayoutDashBoard({children}) {
    const session = await getServerSession(authOptions);

    if(!session) redirect("login");
  return (
    <DashboardSidbarLayout session ={session}>{children}</DashboardSidbarLayout>
  )
}

export default LayoutDashBoard