import "./styles.css";

import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="search" placeholder="검색" className="search-input" />
      </div>
      <button className="search-button">
        <CiSearch className="search-icon" />
      </button>
      <MdKeyboardVoice className="voice-icon" />
    </div>
  );
}

export default SearchBar;
