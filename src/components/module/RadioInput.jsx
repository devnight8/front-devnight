import React from "react";

function RadioInput({courseData, setCourseData}) {
  const {category} = courseData;
  const changeHandler = (e) => {
    const {name, value} = e.target;
    setCourseData({...courseData, [name]: value});
  };
  return (
    <div className="my-4 flex gap-x-3">
      <div className="flex items-center">
        <label htmlFor="frontEnd" className="ml-2">
          فرانت اند
        </label>
        <input
          type="radio"
          id="frontEnd"
          value="frontEnd"
          name="category"
          checked={category === "frontEnd"}
          onChange={changeHandler}
          className="w-4 h-4 peer-checked draft:text-sky-500"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="backEnd" className="ml-2">
       بک اند
        </label>
        <input
          type="radio"
          id="backEnd"
          value="backEnd"
          name="category"
          checked={category === "backEnd"}
          onChange={changeHandler}
          className="w-4 h-4 peer-checked draft:text-sky-500"
        />
      </div>
    </div>
  );
}

export default RadioInput;
