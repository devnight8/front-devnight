import HomePage from "@/components/template/HomePage";

export default async function Home() {
  const res = await fetch("https://json.xstack.ir/api/v1/products");
  const data = await res.json();
  return (
    <section>
      <HomePage data={data.data} />
    </section>
  );
}
