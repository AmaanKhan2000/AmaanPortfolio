import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi2";
import TiltedCard from "../../utility/titled-card";
import projects from "../../assets/docs/projects.json";



export default function Projects({ len = projects.length }) {
  const [collapse, setCollapse] = useState(null);

  const handleCollapse = (idx) => {
    if (idx === collapse) {
      setCollapse(null);
      return;
    }
    setCollapse(idx);
  };

  return (
    <ProjectContainer>
      {projects.slice(0, len).map((item, index) => (
        <div key={index} className="project-container">
          <Project className={`${collapse === index ? "active" : ""}`}>
            <div
              className="project-clickable"
              onClick={() => handleCollapse(index)}
            />
            <div className="heading">
              <div>
                <h4>{item.name}</h4>
              </div>
              <IoIosArrowDown />
            </div>
          </Project>
          <AnimatePresence>
            {collapse === index && (
              <motion.div
                className="project-content-wrapper"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "tween", duration: 0.25 }}
              >
                <div className="project-content">
                  <div className="photos">
                  <TiltedCard
                    imageSrc={process.env.PUBLIC_URL + `${item.img}`}
                    containerHeight="200px"
                    containerWidth="350px"
                    imageHeight="200px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />
                  </div>
                  <div className="project-details">
                    <ul>
                      {item["nutshell"].map((nutshell, nutshell_idx) => (
                        <li key={nutshell_idx}>{nutshell}</li>
                      ))}
                    </ul>
                    <p>{item.what}</p>
                  </div>
                  {( item.research ? 
                  
                <a
                  href={process.env.PUBLIC_URL + item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav"
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 8
                    }}
                  >
                    <HiArrowRight />
                  </motion.div>
                </a>
                  :
                    <Link className="nav" target="_blank" to={item.url}>
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 8,
                        }}
                      >
                        <HiArrowRight />
                      </motion.div>
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .project-container {
    border-bottom: 1px solid #b1b1b1;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    .project-clickable {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    .project-content-wrapper .project-content {
      padding: 0 25px 30px 25px;
      gap: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .photos {

        z-index: 2;
        flex-shrink: 0;



      }

      .project-details {
        min-width: 0;
        flex: 1;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        list-decoration: none;
        list-style: none;
        gap: 10px;
        margin-bottom: 12px;

        li {
          font-family: "Poppins", sans-serif;
          color: #fff;
          background: #1c1d20;
          font-size: 11px;
          padding: 4px 14px;
          border-radius: 6px;
          user-select: none;
        }
      }

      p {
        font-size: 13px;
        color: #7f7f7f;
        line-height: 1.5;
        font-family: "Poppins", sans-serif;
        user-select: none;
      }

      .nav {
        border-radius: 50%;
        z-index: 2;
        flex-shrink: 0;
        div {
          border-radius: 50%;
          cursor: none;
          font-size: 22px;
          color: #fff;
          text-decoration: none;
          width: fit-content;
          font-weight: 300;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px;
          background: #1c1d20;
          aspect-ratio: 1/1;
          flex-shrink: 0;

          svg {
            transform: rotate(-40deg);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .photos {
      display: none !important;
    }

    .project-content-wrapper .project-content {
      padding: 0 10px 10px 10px !important;
      gap: 20px !important;

      ul {
        gap: 5px !important;
        margin-bottom: 6px !important;
      }

      ul li {
        font-size: 8px !important;
        padding: 4px 7px !important;
      }

      p {
        font-size: 11px !important;
      }
    }

    .nav div {
      font-size: 16px !important;
      padding: 14px !important;
    }
  }
`;

const Project = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;
  list-style: none;
  text-decoration: none;
  color: #474747;
  display: flex;
  flex-direction: column;
  transform-origin: center;
  cursor: pointer;

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #474747;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    padding: 50px 30px;

    div {
      width: 100%;
      max-width: 820px;
    }

    h4 {
      font-size: 42px;
      font-weight: 400;
      user-select: none;
    }

    svg {
      display: block;
      font-size: 34px;
      flex-shrink: 0;
    }
  }

  &.active .heading,
  &:hover .heading {
    padding: 50px 20px;
    color: #000;
  }

  &.active .heading svg {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    .heading {
      padding: 30px 15px;
    }

    .heading h4 {
      font-size: 20px;
    }

    .heading svg {
      font-size: 24px;
    }

    &.active .heading,
    &:hover .heading {
      padding: 30px 10px;
    }
  }
`;
