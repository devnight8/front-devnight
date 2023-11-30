"use client";

import {useState} from "react";
import TextInput from "../module/TextInput";
import RadioInput from "../module/RadioInput";

function AddCoursePage() {
  const [courseData, setCourseData] = useState({
    title: "",
    desc: "",
    price: "",
    image: "",
    teacher: "",
    category: "",
    createdAt: new Date(),
    isLiked: false,
  });

  const submitHandler = () => {
    setCourseData({
        title: "",
        desc: "",
        price: "",
        image: "",
        teacher: "",
        category: "",
        createdAt: new Date(),
        isLiked: false,
      })
  };

  return (
    <div className="bg-black/10 p-4 rounded">
      <h2>ثبت دوره جدید</h2>
      <TextInput
        title="عنوان دوره"
        name="title"
        courseData={courseData}
        setCourseData={setCourseData}
      />

      <TextInput
        title="توضیحات دوره"
        name="desc"
        courseData={courseData}
        setCourseData={setCourseData}
        textarea={true}
      />

      <TextInput
        title="هزینه دوره(تومان)"
        name="price"
        courseData={courseData}
        setCourseData={setCourseData}
      />
      <TextInput
        title="استاد دوره"
        name="teacher"
        courseData={courseData}
        setCourseData={setCourseData}
      />
      <h2>دسته بندی</h2>
      <RadioInput
        courseData={courseData}
        setCourseData={setCourseData}
      />

      <button
        className="bg-blue-700 hover:bg-blue-800 transition-all  px-5 rounded text-sm py-2"
        onClick={submitHandler}>
        ثبت دوره
      </button>
    </div>
  );
}

export default AddCoursePage;
