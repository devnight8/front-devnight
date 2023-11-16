const data = [
  {
    id: 1,
    title: "فرانت اند",
  },
  {
    id: 2,
    title: "بک اند",
  },
];
function SortByCat() {
  return (
    <div className="mt-3">
      {data.map((item) => (
       <div className="flex items-center justify-start  gap-x-2">
        
        <input type="checkbox" value={item.title} id={item.id} />
        <label htmlFor={item.id}>{item.title}</label>
       </div>
      ))}
    </div>
  );
}

export default SortByCat;
