import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import ContactArea from "../../../components/Contact/ContactArea";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact" />
      <Header />
      <BreadCrumb title="Contact" subtitle="Contact" />
      <ContactArea />
      <Footer white_bg="white-bg" />{" "}
    </>
  );
};

export default Contact;
