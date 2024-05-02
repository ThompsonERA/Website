import Link from "next/link";

const Footer = ({ white_bg = "" }) => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div className="container">
            <div className="row">
              <div className="footer__social" style={{ textAlign: "center" }}>
                <Link href="/">
                  <a>
                    <img
                      src="/assets/img/logo/logo-4.png"
                      alt=""
                      style={{ height: "100px", justifyContent: "center", borderRadius: "60%" }}
                    />
                  </a>
                </Link>
                <h3>Follow Us</h3>

                <ul>
                  <li>
                    <a href="https://www.facebook.com/RUTH416/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@nxt2godlyness">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ruthnnaomico?fbclid=IwAR3P2qOj_wnGVR3O4pyyoOGTkhq7Ly8qH__nRDjnUOQuYGYxn6xL9V22mHc">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                <div className="footer__widget footer-col-1 mb-10">
                  <div
                    className="footer__logo"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`footer__bottom grey-bg-4 ${white_bg && white_bg}`}>
          <div className="container">
            <div className="row">
              <div className="footer__copyright text-center">
                <p>© 2024 Ruth and Naomi Co LLC. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
