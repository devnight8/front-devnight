import Card from "./Card";

function LatestCoursesCard({data}) {
  const productSlice = data?.slice(0,4)
  return (
    <section className="bg-gradient-to-l from-[#373737] to-[#2c384900] px-4 my-24 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 justify-evenly md:gap-2 relative -top-10">
        {productSlice?.map((item) => (
          <Card key={item.id} name={item.name} catagory={item.category.name} price={item.price} iamge={item.image} createdAt={item.created_at} />
        ))}
      </div>
    </section>
  );
}

export default LatestCoursesCard;
