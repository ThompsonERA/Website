import Link from "next/link";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon_img: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M16.72 10.43C14.68 8.39 14.5 4.66 14.5 4H13v2H9V4H7c0-1.1.9-2 2-2h7v1c0 .08.04 4.63 1.78 6.37l-1.06 1.06M17 2v2h1V2h-1m-2 10c-2-2-2-5-2-5H9v2c0 1 0 1-1 2s-1 2-1 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-8z" />
        </svg>
      ),
      title: "Non-Toxic Products",
      par: "Customer safety is our priority with every product in our inventory",
    },
    {
      id: 2,
      icon_img: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
        </svg>
      ),
      title: "Quick and Responsive",
      par: "Swift Solutions, Stellar Service: Your Satisfaction, Our Priority!",
    },
    {
      id: 3,
      icon_img: (
        <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
          <path
            fill="none"
            d="M112 112 H176 A16 16 0 0 1 192 128 V192 A16 16 0 0 1 176 208 H112 A16 16 0 0 1 96 192 V128 A16 16 0 0 1 112 112 z"
          />
          <path d="M468 112h-52v304a32 32 0 0032 32 32 32 0 0032-32V124a12 12 0 00-12-12z" />
          <path d="M431.15 477.75A64.11 64.11 0 01384 416V44a12 12 0 00-12-12H44a12 12 0 00-12 12v380a56 56 0 0056 56h342.85a1.14 1.14 0 00.3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z" />
        </svg>
      ),
      title: "Customer peace of mind ",
      par: "Employee background checks are essential for ensuring the suitability of our employees.",
    },
  ];
  return (
    <>
      <section className="features__area pb-160">
        <div className="container">
          <div className="features__inner p-relative z-index-1 white-bg">
            {" "}
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#4ea3b1",
                fontWeight:"400"
              }}
            >
              Proudly Serving the Temple and Belton area since 2019
            </h2>
            <div className="row">
              {featuresData.map((feature) => {
                return (
                  <div
                    key={feature.id}
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                  >
                    <div className="features__item  d-sm-flex align-items-start white-bg mb-30">
                      <div className="features__icon mr-25">
                        {feature.icon_img}
                      </div>
                      <div className="features__content">
                        <h3 className="features__title">
                          <Link href="/about">
                            <a>{feature.title}</a>
                          </Link>
                        </h3>
                        <p>{feature.par}</p>

                        <Link href="/contact">
                          <a className="link-btn">
                            Get a Free Estimate{" "}
                            <i className="fa-regular fa-arrow-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
