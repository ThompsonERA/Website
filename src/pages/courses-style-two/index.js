import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Header from "../../../components/Home/Header";
import CoursesStyleTwo from "../../../components/coursesStyleTwo/coursesStyleTwoArea";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/seo";
import Services from "../../../components/Services/Services";

const CoursesTwoStyle = () => {
  return (
    <>
      <SEO pageTitle="Course Style Two" />
      <Header />
      <BreadCrumb title="Our Services"/>
      {/* <CoursesStyleTwo /> */}
      <Services/>
      <Footer white_bg="white-bg" />
    </>
  );
};

export default CoursesTwoStyle;
