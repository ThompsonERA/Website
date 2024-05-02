import React, { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "../common/Pagination";
import servicesData from "../data/services.json";

const Services = () => {
  const [allServicesItems, setAllServicesItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicePerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("grid");

  useEffect(() => {
    const servicesArray = servicesData.services.map((service) => ({
      _id: service.id.toString(),
      ...service,
    }));
    setAllServicesItems(servicesArray);
  }, []);

  const filterServicesByCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredServices = allServicesItems.filter((service) => {
    if (selectedCategory === "all") {
      return true;
    } else {
      return service.category === selectedCategory;
    }
  });

  const indexOfLastService = currentPage * servicePerPage;
  const indexOfFirstService = indexOfLastService - servicePerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredServices.length / servicePerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Define handleTabChange function to update activeTab state
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="service__area pt-115 pb-90 grey-bg-3">
        <div className="container">
          <div className="service__tab-inner white-bg mb-50">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="course__tab-wrapper d-flex align-items-center">
                  <div className="course__tab-btn">
                    <ul className="nav nav-tabs" id="courseTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === "grid" ? "active" : ""}`} id="grid-tab" onClick={() => handleTabChange("grid")}>
                          <svg className="grid" viewBox="0 0 24 24">
                            <rect x="3" y="3" className="st0" width="7" height="7" />
                            <rect x="14" y="3" className="st0" width="7" height="7" />
                            <rect x="14" y="14" className="st0" width="7" height="7" />
                            <rect x="3" y="14" className="st0" width="7" height="7" />
                          </svg>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        {/* <button className={`nav-link ${activeTab === "list" ? "active" : ""}`} id="list-tab" onClick={() => handleTabChange("list")}>
                          <svg className="list" viewBox="0 0 512 512">
                          <svg className="list" viewBox="0 0 512 512">
                            <g id="Layer_2_1_">
                              <path className="st0" d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z" />
                              <circle className="st0" cx="64" cy="100" r="31" />
                              <path className="st0" d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z" />
                              <circle className="st0" cx="64" cy="256" r="31" />
                              <path className="st0" d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z" />
                              <circle className="st0" cx="64" cy="412" r="31" />
                            </g>
                          </svg>
                          </svg>
                        </button> */}
                      </li>
                    </ul>
                  </div>
                  <div className="course__view">
                    <h4>{`1 - ${currentServices.length} of ${filteredServices.length}`}</h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="course__sort d-flex justify-content-sm-end">
                  <div className="course__sort-inner">
                    <select
                      onChange={(e) => filterServicesByCategory(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      <option value="service">Services</option>
                      <option value="childCare">Child Care</option>
                      <option value="moveIn">Move In</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__tab-conent">
                <div className="row">
                  {currentServices.map((service) => (
                    <div key={service._id} className="col-lg-4 col-md-6">
                      <div className="service__item transition-3 white-bg mb-30 fix">
                        <div className="service__thumb w-img fix">
                          <Link href={`/service-details/${service._id}`}>
                            <a>
                              <img
                                src={service.ImageURL}
                                alt="Service Image"
                                style={{ borderTop: "20px" }}
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="service__content">
                          <h3>{service.service}</h3>
                          <span>{service.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <li key={number} className="page-item" style={{ margin: '0 5px' }}>
                    <button
                      onClick={() => paginate(number)}
                      className="page-link"
                      style={{ backgroundColor: currentPage === number ? '#74ACAC' : 'transparent', color: currentPage === number ? '#ffffff' : '#000000' }}
                    >
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row">
            <Pagination
              servicePerPage={servicePerPage}
              totalServices={filteredServices.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
