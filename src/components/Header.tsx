import { FaCaretDown } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
const Header = () => {
  return (
    <div id="header">
      <div className="cut">
        <div className="logo">
          <div className="letter">
            <h2>B</h2>
          </div>
          <div className="letter">
            <h2>B</h2>
          </div>
          <div className="letter">
            <h2>C</h2>
          </div>
        </div>
        <div className="signin">
          <VscAccount />
          <h4>Sign in</h4>
        </div>
        <div className="box">
          <h4>News</h4>
        </div>
        <div className="box">
          <h4>Sport</h4>
        </div>
        <div className="box">
          <h4>Weather</h4>
        </div>
        <div className="box">
          <h4>Shop</h4>
        </div>
        <div className="box">
          <h4>Earth</h4>
        </div>
        <div className="box">
          <h4>Travel</h4>
        </div>
        <div className="box">
          <h4>Capital</h4>
        </div>
        <div className="box">
          <h4>Culture</h4>
        </div>
        <div id="more">
          <h4>More</h4>
          <FaCaretDown />
        </div>
        <div id="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};
export default Header;
