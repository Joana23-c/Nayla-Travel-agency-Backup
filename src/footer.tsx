import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer">
          <div className="footer__aboutus">
            <a href="#" className="footer__logo">
              <img src="/logo.jpg" alt="Logo" />
            </a>
            <p className="footer__title">About Us</p>
            <p className="cont">
              At Nayla Travel, we believe every journey should be unforgettable.
              We create carefully curated travel experiences, helping you
              discover beautiful destinations, explore new cultures, and make
              memories that last a lifetime.
            </p>
          </div>

          <div className="footer__nav">
            <p className="footer__title">Menu</p>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/">Home</a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Destinations
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Albania
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  How it works
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <p className="footer__title">Contact</p>
            <ul className="footer__contact-list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  <i className="fa-solid fa-location-dot"></i>Yrshek, Tiranë
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  <i className="fa-solid fa-phone"></i>+355 68 667 1040
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  <i className="fa-regular fa-envelope-open"></i>
                  naylastravelagency@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
