import React from "react";
import Intro from "../module/Intro";
import TitleSections from "../module/TitleSections";
import LatestCourses from "../module/LatestCourses";

function HomePage() {
  return (
    <>
      <Intro />
      <TitleSections title="جدیدترین دوره ها" titleEn="Latest courses" />
      <LatestCourses />
      <TitleSections title="دوره های فرانت اند" titleEn="front end" />
      <LatestCourses />
      <TitleSections title="دوره های بک اند" titleEn="back end" />
      <LatestCourses />
    </>
  );
}

export default HomePage;
