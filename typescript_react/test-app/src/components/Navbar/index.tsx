import "./styles.css";

import SearchBar from "./../SearchBar/index";
import LeftIcons from "../LeftIcons";
import RightIcons from "../RightIcons";

function Navbar() {
  return (
    <div className="navbar">
      <LeftIcons />
      <SearchBar />
      <RightIcons />
    </div>
  );
}

export default Navbar;
