import logoBookMark from "../assets/images/logo-bookmark.svg";
import ButtonLogin from "../components/Buttons/ButtonLogin";

import Menu from "../assets/images/icon-hamburger.svg";

const Header = ({showMenu}) => {

  return (
    <div className="flex items-center justify-between py-8 px-[5rem]">
      <div className="flex items-center gap-3">
        <img className="w-[120px]" src={logoBookMark} alt="bookmark" />
      </div>
      <nav>
        <ul className="flex items-center gap-14 max-md:hidden">
          <li>
            <a href="#features" className="hover:text-Red">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-Red">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-Red">
              Contact
            </a>
          </li>
          <ButtonLogin />
        </ul>
      </nav>
      <img onClick={showMenu} src={Menu} className="cursor-pointer md:hidden" />
    </div>
  );
};

export default Header;
