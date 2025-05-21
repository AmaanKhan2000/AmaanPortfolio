import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate, useOutletContext, useParams } from "react-router";
import { BsGithub, BsFillPlayFill, BsTriangleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { PiNotebookFill } from "react-icons/pi";

import HomeHeading from "../../../components/HomeHeading";
import projects from "../../../assets/docs/projects.json";
import DisplayScreens from "./DisplayScreens";
import hoverAnim from "../../../assets/images/hoverAnim.png";

export default function ProjectDetails() {
  const [data, setData] = useState(null);
  const [showFullScreenHint, setShowFullScreenHint] = useOutletContext();

  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let found = -1;
    if (param && param.project) {
      found = projects.findIndex(
        (item) => item.nav.toLowerCase() === param.project.toLowerCase()
      );
    }
    if (found === -1) return navigate("/projects");
    setData(projects[found]);
  }, [navigate, param]);

  return (
    <React.Fragment>
      <Container>
        {data && (
          <div>
            <HomeHeading>{data.name}</HomeHeading>
            <div className="links">
              <a
                target="_blank"
                className="proj-nav"
                rel="noreferrer"
                href={data.github}
              >
                <BsGithub />
                Source code
              </a>
              {data.deployed_url &&
                (!data.hint ? (
                  <a
                    className="run proj-nav"
                    href={data.deployed_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFillPlayFill />
                    {data.type === "game" ? "Play game" : "Run application"}
                  </a>
                ) : (
                  <RunAppContainer className="proj-nav">
                    <div className="run-app-txt">
                      <BsFillPlayFill /> Run application
                    </div>

                    <div className="tooltip">
                      <div className="tooltip-content">
                        <p>{data.hint}</p>
                        <a
                          className="continue-run"
                          href={data.deployed_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Run
                        </a>
                        <i></i>
                      </div>
                    </div>
                  </RunAppContainer>
                ))}
              {data.jupyter && (
                <a
                  target="_blank"
                  className="proj-nav"
                  rel="noreferrer"
                  href={data.jupyter}
                >
                  <PiNotebookFill />
                  Jupyter Notebook
                </a>
              )}
            </div>
            <Content>
              <div className="intro">
                <p>{data.description}</p>
                <div className="techs">
                  <p>Developed using,</p>
                  <ul>
                    {data.techs.map((item, index) => (
                      <li key={index}>
                        <BsTriangleFill /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <DisplayScreens data={data.display} />
            </Content>
          </div>
        )}
      </Container>
      {showFullScreenHint && (
        <FullScreenHint
          initial="hidden"
          animate="visible"
          variants={fullScreenHintVariants}
        >
          <p>Double click or tap on the video for fullscreen preview</p>
          <button onClick={() => setShowFullScreenHint(false)}>
            <IoClose />
          </button>
        </FullScreenHint>
      )}
    </React.Fragment>
  );
}

const fullScreenHintVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 2, type: "spring", stiffness: 120 },
  },
};

const Container = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;

  .links {
    margin-top: 18px;
    display: flex;
    align-items: center;
    gap: 15px;

    .proj-nav {
      text-decoration: none;
      border: 1px solid #1c1d20;
      background-color: #fff;
      color: #1c1d20;
      font-size: 14px;
      padding: 3px 10px;
      border-radius: 5px;
      transition: all 300ms ease-out;
      display: flex;
      align-items: center;
      gap: 5px;
      position: relative;
      z-index: 1;
      cursor: pointer;
      background-image: url(${hoverAnim});
      background-repeat: no-repeat;
      background-position: 50% 200%;
      background-size: 100%;

      &:hover {
        color: #fff;
        background-position: unset;
        background-size: 110%;
      }
    }
  }

  @media (max-width: 768px) {
    .links .proj-nav {
      font-size: 13px;
    }
  }
`;

const Content = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  color: #474747;

  p {
    font-size: 15px;
    line-height: 1.7em;
  }

  .intro {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .techs {
    p {
      padding-bottom: 4px;
    }
    ul {
      text-decoration: none;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      font-size: 15px;
    }

    li {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-right: 18px;

      &:last-of-type {
        margin-right: 0;
      }
    }

    svg {
      font-size: 8px;
      transform-origin: center;
      transform: rotate(90deg);
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
`;

const RunAppContainer = styled.div`
  position: relative;

  .run-app-txt {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .tooltip {
    position: absolute;
    width: 250px;
    max-width: 250px;
    top: 28px;
    left: 16%;
    transform: translate(-50%, 0);
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;
    cursor: auto;
  }

  .tooltip-content {
    width: 100%;
    margin-top: 10px;
    padding: 15px 20px;
    color: #444444;
    background-color: #fff;
    font-weight: normal;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    position: relative;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .tooltip-content i {
    position: absolute;
    bottom: 100%;
    left: 80%;
    margin-left: -10px;
    width: 20px;
    height: 10px;
    overflow: hidden;
  }

  .tooltip-content i::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    background-color: #fff;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  }

  .tooltip-content .continue-run {
    display: block;
    width: fit-content;
    border-radius: 4px;
    padding: 4px 15px;
    font-size: 12px;
    text-decoration: none;
    border: 1px solid #1c1d20;
    background-color: #1c1d20;
    color: #fff;
    margin-top: 8px;
    margin-left: auto;
    font-weight: 300;
  }

  .tooltip-content .continue-run:hover {
    background: #46474a;
    border: 1px solid #46474a;
  }

  .tooltip-content p {
    font-size: 12px;
    font-weight: 300;
    user-select: none;
  }
`;

const FullScreenHint = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 50px;
  background-color: #202124;
  width: 95%;
  max-width: 420px;
  z-index: 99999;
  padding: 20px 25px;
  border-radius: 8px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    user-select: none;
  }

  button {
    margin-left: 20px;
    color: rgba(255, 255, 255, 0.6);
    border: none;
    outline: none;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    padding: 5px;
    background-color: inherit;
    transition: all 0.15s ease-in;

    &:hover {
      background-color: rgba(200, 200, 200, 0.2);
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 768px) {
    right: 10px;
  }
`;
