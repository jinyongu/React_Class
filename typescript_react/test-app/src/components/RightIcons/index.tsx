import "./styles.css";

import { MdVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function RightIcons() {
  return (
    <div>
      <ul className="right-icons">
        <li className="upload-icon">
          <MdVideoCall />
        </li>
        <li className="notification-icon">
          <CiBellOn />
        </li>
        <li className="profile-icon">
          <CgProfile />
        </li>
      </ul>
    </div>
  );
}

export default RightIcons;
