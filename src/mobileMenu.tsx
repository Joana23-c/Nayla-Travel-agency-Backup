import "./mobileMenu.scss";
type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};
export default function MobileMenu({ isOpen, closeMenu }: Props) {
    
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__container">


          <div className="mobile-menu__header">
            <a href="#" className="mobile-menu__logo">
              <img src="/logo.jpg" alt="Logo" />
            </a>
            <a href="#" className="mobile-menu__close"  onClick={closeMenu}>
              <i className="fa-solid fa-x"></i>
            </a>
          </div>


          <div className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <a href="/">Home</a>
              </li >

              <li  className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Destinations</a>
              </li>

              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Albania</a>
              </li>

              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">How it works</a>
              </li>

              <li  className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Contact</a>
              </li>
              <li  className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">
                  <i className="fa-brands fa-opencart"></i> Cart
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">EN</a>
              </li>

              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">IT</a>
              </li>



            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
