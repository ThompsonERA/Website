import Link from "next/link";

const ContactFooter = () => {
  return (
    <>
      <footer>
        <div className="footer__area footer__black ">
          <div className="footer__top black-bg-5 pt-95 pb-45">
            <div className="container">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="footer__widget footer-col-1 mb-30">
                    <div className="footer__logo">
                      <div className="logo">
                        <Link href="/">
                          <a>
                            <img src="/assets/img/logo/r&n-2.png" alt="" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__widget-info">

                        <div className="footer__social">
                          <h4>Follow Us</h4>

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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="footer__widget mb-30">
                    <h3 className="footer__widget-title">Explore</h3>
                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <Link href="/contact">
                            <a className="link-btn">Contact us </a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link href="/">
                            <a className="link-btn">Success story </a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link href="/about">
                            <a className="link-btn">About us </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="footer__widget mb-30">
                    <h3 className="footer__widget-title">Links</h3>
                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <Link href="/contact">
                            <a className="link-btn">Gallery</a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link href="/">
                            <a className="link-btn">Terms of service</a>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link href="/about">
                            <a className="link-btn">Membership</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="footer__widget footer-col-4 mb-30">
                    <h3 className="footer__widget-title">Newsletter</h3>

                    <div className="footer__subscribe">
                      <p>
                        Receive promotional offers or join our loyalty
                        membership!
                      </p>
                      <form action="#">
                        <div className="footer__subscribe-input">
                          <input type="text" placeholder="Email" />
                          <button type="submit" className="tp-btn-subscribe">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom black-bg-5">
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="footer__copyright text-center">
                      <p>© 2024 Ruth and Naomi Co LLC. All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
