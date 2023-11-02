import Link from "next/link";

function notFound() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-3xl">صفحه‌ای که دنبال آن بودید پیدا نشد!</h4>
        <Link
          href="/"
          className="bg-black py-2 px-4 my-8 text-[14px] md:py-3 md:px-5 rounded-md md:text-md text-white hover:bg-primary transition-all">
          صفحه اصلی
        </Link>
      </div>
    </section>
  );
}

export default notFound;
