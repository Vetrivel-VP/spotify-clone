import React, { useState } from "react";
import "../styles/MusicPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer() {
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);

  const changeSongLove = () => {
    setLove(!isLove);
  };

  const changePlayPause = () => {
    setPlay(!isPlaying);
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmoneyheist.jpg?alt=media&token=32baf3d7-0ab5-47d5-ba48-554792cea117"
          alt=""
        />
      </div>
      <div className="songAttributes">
        <audio
          src="https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbellaciao.mp3?alt=media&token=e1dd8233-3521-4574-8957-d51af9a5db5c"
          preload="metadata"
        />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">00:00</div>
          <input type="range" className="progressBar" />
          <div className="duration">00:00</div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
