import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

import experiences from "../../assets/docs/experiences.json";
import { showCursor, hideCursor, expandCursor } from "../../utility/mouse";

export default function Experiences() {
  return (
    <Container>
      <h3>Steps Along the Way</h3>
      <div className="parent">
        <Slider>
          {new Array(6).fill("").map((_, index) => (
            <span key={index} />
          ))}
        </Slider>
        <div className="wrapper">
          {experiences.map((item, index) => (
            <ExperienceBox item={item} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}

function ExperienceBox({ item = {} }) {
  const boxRef = useRef(null);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!showMore) return;
    const rect = boxRef.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const offset = rect.top + scrollY - window.innerHeight / 6;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }, [showMore]);

  function handleBoxClick() {
    expandCursor();
    setShowMore(!showMore);
  }

  return (
    <BoxContainer>
      <div className="box-cover">
        <span className="indicator" />
        <motion.div
          className="box"
          ref={boxRef}
          onMouseMove={showCursor}
          onMouseLeave={hideCursor}
          onClick={handleBoxClick}
        >
          <BoxWrapper />
          <span className="mini-max-ico">
            {showMore ? <FiMinimize2 /> : <FiMaximize2 />}
          </span>
          <div className="less-desc">
            <div className="where-how-long">
              <span>
                {item.education ? <IoSchoolSharp /> : <MdWork />}
                {item.company}
              </span>
              <span>{item.duration}</span>
            </div>
            <span>{item.role}</span>
          </div>
          <AnimatePresence>
            {showMore && (
              <motion.div
                className="work-done"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "tween" }}
              >
                {item.techs && (
                  <ul className="techs">
                    {item.techs.map((tech, index) => (
                      <li key={index}>#{tech}</li>
                    ))}
                  </ul>
                )}
                {item.work && <p>{item.work}</p>}
                {item.courses && (
                  <p className="courses">
                    <span>Relevant Courses:</span>
                    {item.courses}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </BoxContainer>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  position: relative;

  .parent {
    margin-top: 70px;
    padding: 35px 0 70px 0;
    width: 100%;
    min-height: 280px;
    position: relative;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .parent {
      padding: 0px;
      min-height: auto;
    }

    .indicator {
      display: none !important;
    }

    .box-cover,
    .box {
      width: 100% !important;
    }

    .box {
      cursor: pointer !important;
    }
  }
`;

const BoxWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 5px;

  span {
    display: block;
    width: 5px;
    background: #1c1d20;
    border-radius: 4px;
  }

  span:first-of-type {
    flex: 1;
  }

  span:nth-of-type(2) {
    height: 10px;
  }

  span:nth-of-type(3) {
    height: 8px;
  }

  span {
    height: 5px;
  }

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  font-family: "Poppins", sans-serif;
  padding-bottom: 55px;

  .box-cover {
    width: 50%;
    position: relative;

    .indicator {
      position: absolute;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      top: -4px;
      background-color: #fff;
      border: 4px solid #1c1d20;
    }
  }

  .box {
    padding: 0 24px;
    width: calc(100% - 25px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    .less-desc {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .where-how-long {
      span {
        color: #1c1d20;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      span:first-of-type {
        width: 100%;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        align-items: center;
        line-height: 20px;

        svg {
          margin-right: 10px;
          font-size: 22px;
          flex-shrink: 0;
        }
      }

      span:last-of-type {
        width: 100%;
        font-weight: 300;
        margin-top: 5px;
        font-size: 13px;
      }
    }
    span {
      font-size: 14px;
      display: block;
      color: #1c1d20;
    }

    .mini-max-ico {
      position: absolute;
      top: 8px;
      color: #474747;
      right: 10px;
      font-size: 13px;
    }

    .work-done {
      p {
        line-height: 1.8em;
        font-size: 12px;
        text-align: justify;
        color: #474747;
        padding-bottom: 20px;
      }

      .techs {
        list-style: none;
        text-decoration: none;
        margin-top: 3px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding-bottom: 15px;
      }

      .techs li {
        font-size: 11px;
        border: 1px solid #474747;
        border-radius: 5px;
        padding: 2px 6px;
        color: white;
        background: #474747;
        flex-shrink: 0;
      }

      . courses p {
        font-size: 12px;
        line-height: 1.8em;
      }
      .courses span {
        text-decoration: underline;
        margin: 0 10px 2px 0;
        font-size: 12px;
      }
    }
  }

  &:nth-child(odd) {
    justify-content: flex-end;

    .box {
      margin-left: auto;
    }

    .indicator {
      left: -11px;
    }
  }

  &:nth-child(even) {
    justify-content: flex-start;

    .box {
      margin-right: auto;
    }

    .indicator {
      right: -12px;
    }
  }
`;
