

function DashboardPage({createdAt ,email}) {

  return (
    <div className="container flex ">
      <div className="flex items-center justify-center text-right flex-col w-full">
        <span className="w-full text-right px-1">  سلام  خوش اومدی</span>
        <div className="bg-black/10 flex flex-col  text-right w-full p-4 my-3">
          <span>تاریخ شروع همراهیت با ما: {new Date(createdAt).toLocaleDateString("fa-IR")}</span>
          <span className="mt-2">ایمیل شما : {email} </span>
        </div>
        <div className="bg-black/10 w-full text-center p-4 my-3">
          برای آموزش برنامه نویسی خوب جایی اومدی 
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
