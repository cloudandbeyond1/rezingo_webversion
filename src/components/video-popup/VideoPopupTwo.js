import { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import clsx from "clsx"

const VideoPopupTwo = ({ spaceBottomClass }) => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div
      className={clsx("video-popup-2", spaceBottomClass)}
    >
      <div
        className="video-popup-2__left bg-img"
        style={{
          background: "linear-gradient(45deg, #afaab52e, transparent)"
        }}
      >
        <div className="video-popup-2__content">
          <h2 className="title mb-30">
            Programs <br /> Collections
          </h2>
          <p className="text1 mb-30">
            Lorem ipsum dolor sit amet consectetur adipisici elit sed do eiusm.
            Lorem ipsum dolor sit amet consectetur adipisici elit sed do eiusm.
            Lorem ipsum dolor sit amet consectetur adipisici elit sed do eiusm.
            Lorem ipsum dolor sit amet consectetur adipisici elit sed do eiusm.
          </p>
          {/* <div className="link">
            <Link to={process.env.PUBLIC_URL + "/about"}>Shop Now</Link>
          </div> */}
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={modalStatus}
          videoId="feOScd2HdiU"
          onClose={() => isOpen(false)}
        />
        <div className="video-popup-2__button">
          <button onClick={() => isOpen(true)}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "65px", marginRight: "15px"}}
            />
          </button>
        </div>
      </div>
      <div
        className="video-popup-2__right bg-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/img/bg/bg-8.jpg"
          })`
        }}
      ></div>
    </div>
  );
};

export default VideoPopupTwo;
