import React, { useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";

function AudioList() {
  const [isFavourite, setFavourite] = useState(false);

  const toggleFavourite = () => {
    setFavourite(!isFavourite);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span>12 songs</span>
      </h2>

      <div className="songsContainer">
        {Songs &&
          Songs.map((song, index) => (
            <div className="songs" key={song?.id}>
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName} <span>{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,490,102
                    </p>

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03:04
                    </p>
                    <div className="favourite" onClick={toggleFavourite}>
                      {isFavourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer />
    </div>
  );
}

export { AudioList };
