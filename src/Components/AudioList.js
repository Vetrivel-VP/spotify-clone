import React from "react";
import {
  FaHeadphones,
  FaRegClock,
  FaRegHeart,
  FaHeart,
  FaEllipsisH,
} from "react-icons/fa";

function AudioList() {
  return (
    <div className="AudioList">
      <h2>
        The list <span>12 songs</span>
      </h2>

      <div className="songs"></div>
    </div>
  );
}

export { AudioList };
