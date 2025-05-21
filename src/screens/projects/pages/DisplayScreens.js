import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Waypoint } from "react-waypoint";
import Zoom from "react-medium-image-zoom";
import parse from "html-react-parser";
import "react-medium-image-zoom/dist/styles.css";

import laptopPlaceholder from "../../../assets/images/laptopPlaceholder.png";
import tabletPlaceholder from "../../../assets/images/tabletPlaceholder.png";
import mobilePlaceholder from "../../../assets/images/mobilePlaceholder.png";
import monitorPlaceholder from "../../../assets/images/monitorPlaceholder.png";
import spinner from "../../../assets/images/spinner.gif";

export default function DisplayScreens({ data = [] }) {
  if (!Array.isArray(data)) return;

  return data.map((item, index) => {
    let Device;
    switch (item.screen) {
      case "laptop":
        Device = LaptopWrapper;
        break;
      case "tablet":
        Device = TabletWrapper;
        break;
      case "mobile":
        Device = MobileWrapper;
        break;
      case "image":
        Device = DefaultImageScreen;
        break;
      case "monitor":
        Device = MonitorWrapper;
        break;
      default:
        Device = DefaultScreen;
        break;
    }

    return (
      Device &&
      Array.isArray(item.source) && (
        <DeviceWrapper key={index}>
          {item.heading && (
            <h3 className="project-sub-heading">{item.heading}</h3>
          )}
          {item.description && <p>{parse(item.description)}</p>}
          <DeviceContainer className={item.wrap ? "wrap" : ""}>
            {item.source.map((src, src_index) => (
              <Device
                img_desc={item.img_desc}
                style={item.style}
                size={item.source.length}
                source={src}
                key={src_index}
              />
            ))}
          </DeviceContainer>
        </DeviceWrapper>
      )
    );
  });
}

function LaptopWrapper({ source = "" }) {
  return (
    <Laptop>
      <img src={laptopPlaceholder} alt="laptop" />
      <div className="laptop-wrapper">
        <VideoWrapper source={source} />
      </div>
    </Laptop>
  );
}

function MonitorWrapper({ source = "" }) {
  return (
    <Monitor>
      <img src={monitorPlaceholder} alt="monitor" />
      <div className="monitor-wrapper">
        <VideoWrapper source={source} />
      </div>
    </Monitor>
  );
}

function TabletWrapper({ source = "" }) {
  return (
    <TabletContainer>
      <img src={tabletPlaceholder} alt="tablet" />
      <div className="tablet-wrapper">
        <VideoWrapper source={source} />
      </div>
    </TabletContainer>
  );
}

function MobileWrapper({ source = "" }) {
  return (
    <MobileContainer>
      <img src={mobilePlaceholder} className="mobile-overlay" alt="mobile" />
      <div className="mobile-wrapper">
        <img src={source} alt="mobile-content" />
      </div>
    </MobileContainer>
  );
}

function DefaultScreen({ source = "", style = {} }) {
  return (
    <DefaultScreenContainer style={style}>
      <VideoWrapper source={source} />
    </DefaultScreenContainer>
  );
}

function DefaultImageScreen({
  img_desc = null,
  source = "",
  size = 1,
  style = {},
}) {
  return (
    <DefaultImageScreenContainer className={size > 1 ? `collage` : ""}>
      <Zoom>
        <img style={style} src={source} alt="prj_img" />
      </Zoom>
      {img_desc && <p className="zoom_img">{img_desc}</p>}
    </DefaultImageScreenContainer>
  );
}

function VideoWrapper({ source }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (play) videoRef.current.play();
    else videoRef.current.pause();
  }, [play]);

  const handleFullScreen = () => {
    const element = videoRef.current;
    if (!element) return;
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
  };

  return (
    <Waypoint
      onEnter={() => setPlay(true)}
      onLeave={() => setPlay(false)}
      bottomOffset="35%"
      topOffset="35%"
    >
      <VideoContainer>
        <LoadingAnim>
          <img src={spinner} alt="spinner" />
        </LoadingAnim>
        <video
          muted
          ref={videoRef}
          autoPlay={false}
          playsInline
          loop
          onDoubleClickCapture={handleFullScreen}
          src={process.env.PUBLIC_URL + source}
        ></video>
      </VideoContainer>
    </Waypoint>
  );
}

const DeviceWrapper = styled.div`
  width: 100%;
  height: 100%;

  p {
    line-height: 1.7em;
    font-size: 15px;
    margin-bottom: 40px;

    a {
      color: #474747;
      font-style: italic;
    }
  }

  .project-sub-heading {
    display: inline-block;
    margin-bottom: 8px;
    line-height: 2.2em;
    font-weight: 500;
    font-size: 19px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

const DeviceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &.wrap {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: unset;
  }
`;

const Laptop = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
    object-fit: fill;
    pointer-events: none;
  }

  .laptop-wrapper {
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0;
    padding: 0.7% 9%;
    width: 100%;
    overflow: hidden;
    z-index: 1;

    video {
      border-radius: 1%;
      display: block;
      width: 100%;
      object-fit: fill;
    }
  }
`;

const Monitor = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  .monitor-wrapper {
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0;
    padding: 0.7% 0.5%;
    width: 100%;
    overflow: hidden;
    z-index: 1;

    video {
      border-radius: 0px;
      display: block;
      width: 100%;
      object-fit: fill;
    }
  }
`;

const DefaultScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 150px;
  margin: 0 auto;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const TabletContainer = styled.div`
  position: relative;
  width: 95%;
  max-width: 860px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  .tablet-wrapper {
    position: absolute;
    top: 0%;
    left: 0%;
    padding: 1.5%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    background-color: white;

    video {
      border-radius: 1%;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;

const MobileContainer = styled.div`
  width: 33.3%;
  min-width: 160px;
  position: relative;
  margin-bottom: 40px;

  &:last-of-type {
    margin-bottom: 0;
  }

  .mobile-overlay {
    display: block;
    width: 68%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .mobile-wrapper {
    position: absolute;
    top: 2%;
    left: 17.5%;
    width: 65.2%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
    background-color: white;

    img {
      display: block;
      width: 100%;
      object-fit: fill;
      border-radius: 6%;
    }
  }
`;

const DefaultImageScreenContainer = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;

  &.collage {
    display: flex;
    flex-direction: row;
    max-width: fit-content;
    flex-wrap: wrap;
  }

  img {
    width: 100%;
    display: block;
    object-fit: contain;
    margin: 0 auto;
  }

  .zoom_img {
    text-align: center;
    margin-top: 30px;
    color: #6b6b6b;
    font-size: 13px;
    font-weight: 300;
    font-style: italic;
  }
`;

const VideoContainer = styled.div`
  position: relative;

  video {
    cursor: pointer;
  }
`;

const VideoCover = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0;
  padding: 31.4%;
  border-radius: 1%;
  width: 100%;
`;

const LoadingAnim = styled(VideoCover)`
  background-color: white;
  z-index: -1;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    width: 12%;
    opacity: 0.7;
  }
`;
