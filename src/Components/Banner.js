import React from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-ha</h2>
              <img src={check} alt="" />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            <a href="#"> Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
