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
    </>
  );
}

export default HomePage;
