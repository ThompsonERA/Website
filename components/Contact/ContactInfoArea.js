import Link from "next/link";

const ContactInfoArea = () => {
  return (
    <>
      <section className="contact__area grey-bg-2 pt-120 pb-90 p-relative fix">
        <div className="contact__shape"></div>
        <div className="container">
              <div className="contact__item text-center mb-30 transition-3 white-bg">
                <div className="contact__icon d-flex justify-content-center align-items-end">
                  <svg viewBox="0 0 24 24">
                    <circle className="st0" cx="12" cy="12" r="10" />
                    <path className="st0" d="M8,14c0,0,1.5,2,4,2s4-2,4-2" />
                    <line className="st0" x1="9" y1="9" x2="9" y2="9" />
                    <line className="st0" x1="15" y1="9" x2="15" y2="9" />
                  </svg>
                </div>
                <div className="contact__content">
                  <h3 className="contact__title">Happy with our Service?</h3>
                  <p>
                    Please leave a review and tell others of your experience
                    with our services.
                  </p>
                  <Link href="/contact">
                    <a className="tp-btn tp-btn-border">Leave a Review</a>
                  </Link>
                </div>
              </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfoArea;
