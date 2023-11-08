

function DashboardPage({createdAt,nickname}) {
console.log(nickname)
  return (
    <div className="container flex ">
      <div className="flex items-center justify-center text-right flex-col w-full">
       
        <div className="bg-black/10 flex flex-col text-right w-full p-4 my-3">
        <span className="w-full text-right  mb-3"> {nickname} سلام  خوش اومدی</span>
          <span>تاریخ شروع همراهیت با ما: {new Date(createdAt).toLocaleDateString("fa-IR")}</span>
         
        </div>
        <div className="bg-black/10 w-full text-center p-4 my-3">
          برای آموزش برنامه نویسی خوب جایی اومدی 
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
