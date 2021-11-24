import React from "react";
import "../styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";

function MainContainer() {
  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  );
}

export { MainContainer };
