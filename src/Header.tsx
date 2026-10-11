import "./header.scss";
// import { Link } from 'react-router-dom';
// import logo from '/logo.jpg';
type Props = {
  openMenu: () => void;
};
export default function Header({ openMenu }: Props) {

  return (
    <>
      <nav>
        <div className="navBar">
          <div className="navBar__logo">
            <a href="#">
              <img src="/logo.jpg" alt="Logo" />
            </a>
          </div>

          <div className="menu">
            <ul className="menu__list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Albania</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="navBar__btns">
            <ul className="btnList">
              <li>
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">IT</a>
              </li>
              <li>
                <a href="#">
                  {/* <img src="/simple-cart.svg" /> */}
                    <i className="fa-brands fa-opencart"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="togglebtn" onClick={openMenu}>
            <img src="/toggle-column-svgrepo-com.png" />
          </div>
        </div>
      </nav>
    </>
  );
}
