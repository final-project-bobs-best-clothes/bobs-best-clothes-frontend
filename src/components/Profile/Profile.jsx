import OrderList from "./components/OrderList";
import ProfileInfo from "./components/ProfileInfo";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./../../App.css";
import ProfileNavbar from "./components/ProfileNavbar";

function Profile() {
  const [showState, setShowState] = useState("info"); 

  

  return (
    <div>
      <div className="push-down text-center">
            <FaUserCircle
              style={{ fontSize: "75"}}
            />
            <ProfileNavbar setShowState={setShowState} showState={showState}></ProfileNavbar>
      </div>
      {(showState === "info") ?
            <ProfileInfo></ProfileInfo>
            :
            <OrderList></OrderList>
      }
    </div>
  );
}

export default Profile; // Export Profile as default

// Alternatively, you can use named export:
// export { Profile };
