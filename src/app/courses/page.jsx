import CoursesPage from "@/components/template/CoursesPage";

async function Courses() {
    const res = await fetch("https://json.xstack.ir/api/v1/products");
    const data = await res.json();
  return (
    <>
      <CoursesPage data={data.data} />
    </>
  );
}

export default Courses;
