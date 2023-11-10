

function DashboardPage({createdAt,nickname}) {
console.log(nickname)
  return (
    <div className="container flex ">
      <div className="flex items-center justify-center text-right flex-col w-full">
       
        <div className="bg-black/10 flex flex-col text-right w-full p-4 my-3">
        <span className="w-full text-right  mb-3"> {nickname} عزیز سلام  خوش اومدی</span>
      
         <div className="flex items-center">
            <span className="ml-2 text-white/60 font-light">تاریخ شروع همراهیت با ما: </span>
            <span> {new Date(createdAt).toLocaleDateString("fa-IR")}</span>
         </div>
        </div>
        <div className="bg-black/10 w-full text-right p-4 my-3">
          برای آموزش برنامه نویسی خوب جایی اومدی 👌
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
