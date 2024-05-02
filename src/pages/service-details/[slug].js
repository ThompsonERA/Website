import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../../components/common/Footer";
import DynamicPageHeader from "../../../components/common/DynamicPageHeader";
import SEO from "../../../components/seo";
import ServiceData from "../../../components/data/services.json";

const ServiceDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [request, setRequest] = useState(false);
  const [openSection, setOpenSection] = useState("");

  useEffect(() => {
    if (slug) {
      setRequest(true);
    }
  }, [slug]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  let content = null;

  if (!request) {
    content = (
      <div className="container">
        <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
      </div>
    );
  } else {
    const course = ServiceData.services.find(
      (service) => service.id.toString() === slug
    );

    if (!course) {
      content = (
        <div className="container">
          <h2 className="text-center pt-10 alert alert-danger mt-50">
            Course not found
          </h2>
        </div>
      );
    } else {
      content = (
        <div  className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6">
              <div className="service-item" style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={course.ImageURL}
                  alt={course.service}
                  style={{
                    borderRadius: "20px",
                    marginBottom: "20px",
                    height: "60vh",
                    width: "100%",
                    transition: "transform .5s ease",
                    objectFit: "cover",
                    zIndex: 1, 
                  }}
                  className="zoom-effect"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="text-center">
                <div style={{ marginTop: "1rem" }} className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 style={{ color: "#74ACAC" }}>{course.service}</h2>
                  </div>
                  <div>
                    <h5 style={{ fontSize: "20px", color: "#1B251E" }}> {course.price}</h5>
                  </div>
                </div>
                {course.includedServices && (
                  <div className="mb-4">
                    <p style={{ fontSize: "18px", textAlign: "left", marginTop: "4rem", color: "#1B251E" }}>{course.includedServices}</p>
                  </div>
                )}
                {course.category === "childCare" || course.category === "moveIn" ? (
                  <div className="mb-4">
                    <p style={{ fontSize: "18px", textAlign: "left", marginTop: "4rem", color: "#1B251E" }}>{course.description}</p>
                  </div>
                ) : (
                  <div className="accordion mt-4" style={{ width: "100%", margin: "auto" }}>
                    <h6 style={{ color: "#74ACAC" }}> {course.other}</h6>
                    {Object.entries(course.details).map(([section, tasks]) => (
                      <div className="accordion-item" key={section}>
                        <h2 className="accordion-header" id={`heading-${section}`}>
                          <button
                            className={`accordion-button ${openSection === section ? "" : "collapsed"}`}
                            type="button"
                            onClick={() => toggleSection(section)}
                          >
                            {section}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${section}`}
                          className={`accordion-collapse collapse ${openSection === section ? "show" : ""}`}
                          aria-labelledby={`heading-${section}`}
                        >
                          <div className="accordion-body">
                            <ul style={{ listStyleType: "none" }}>
                              {tasks &&
                                tasks.tasks &&
                                tasks.tasks.map((task, index) => (
                                  <li key={index}>{task}</li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <SEO pageTitle="Service Details" />
      <DynamicPageHeader />
      { content}
      <Footer style={{ marginTop: "9rem" }} />
    </>
  );
};

export default ServiceDetails;
