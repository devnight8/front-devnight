import React from "react";

function TextInput({title, name, courseData, setCourseData, textarea = false}) {
  const changeHander = (e) => {
    const {name, value} = e.target;
    setCourseData({...courseData, [name]: value});
  };
  return (
    <div className="my-3 py-2 ">
      <p className="mb-2 text-sm">{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={courseData[name]}
          onChange={changeHander}
          className="bg-transparent border w-full border-white/10 p-2 rounded focus:border-white/20 outline-none "
        />
      ) : (
        <input
          type="text"
          name={name}
          value={courseData[name]}
          onChange={changeHander}
          className="bg-transparent border w-full border-white/10 p-2 rounded focus:border-white/20 outline-none "
        />
      )}
    </div>
  );
}

export default TextInput;
