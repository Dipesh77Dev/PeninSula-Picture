import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../images/main-logo.jpg";

const Entry = () => {
  return (
    <>
      {/* <div>Entry</div> */}
      <Link to="/home">
        <img
          src={MainLogo}
          // src = "http://peninsulapictures.in/img/main-logo.jpg"
          alt="Not found"
          height="500"
          width="300"
        />
      </Link>
    </>
  );
};

export default Entry;
