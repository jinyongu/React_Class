import "./styles.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

function LeftIcons() {
  return (
    <div className="left-icon">
      <div className="menu-icon">
        <RxHamburgerMenu />
      </div>
      <div className="youtube-icons">
        <FaYoutube className="youtube-icon" />
        <a href="https://www.youtube.com" className="youtube-link">
          YouTube
        </a>
      </div>
    </div>
  );
}

export default LeftIcons;
