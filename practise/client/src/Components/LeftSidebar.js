import React from 'react'
import { Link } from "react-router-dom";
import MainLogo from "../images/main-logo.jpg";

const LeftSidebar = () => {
  return (
    <div className="">
        <div className="">
          <div>
            <ul>
              <Link to="/">
                <img
                  src={MainLogo}
                  // src = "http://peninsulapictures.in/img/main-logo.jpg"
                  alt="Not found"
                  height="200"
                  width="300"
                />
              </Link>
              <br/>
              <span>Home</span> <br/>
              <span>Peninsula TV</span> <br/>
              <span>About</span> <br/>
              <span>People</span> <br/>
              <span>Projects</span> <br/>
              <span>Awards</span> <br/>
              <span>Media</span> <br/>
              <span>Gallery</span> <br/>
              <span>Contact Us</span> <br/>
              <span>© Peninsula Pictures Pvt.Ltd. 
              <br/>All rights reserved.</span>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default LeftSidebar