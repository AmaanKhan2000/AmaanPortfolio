import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

import experiences from "../../assets/docs/experiences.json";
import { showCursor, hideCursor, expandCursor } from "../../utility/mouse";

export default function Experiences() {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  return (
    <Container ref={containerRef}>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Steps Along the Way
      </motion.h3>
      <div className="parent">
        <AnimatedSlider visibleCount={visibleItems.size} />
        <div className="wrapper">
          {experiences.map((item, index) => (
            <ExperienceBox 
              item={item} 
              key={index} 
              index={index}
              onVisible={() => setVisibleItems(prev => new Set([...prev, index]))}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

function AnimatedSlider({ visibleCount }) {
  return (
    <Slider>
      {new Array(6).fill("").map((_, index) => (
        <motion.span 
          key={index}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ 
            scaleY: index === 0 ? Math.min(visibleCount / 6, 1) : 1,
            opacity: index <= visibleCount ? 1 : 0.3
          }}
          transition={{ 
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          style={{ transformOrigin: index === 0 ? "top" : "center" }}
        />
      ))}
    </Slider>
  );
}

function ExperienceBox({ item = {}, index, onVisible }) {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { 
    threshold: 0.3,
    triggerOnce: true,
    margin: "-100px 0px"
  });

  const [showMore, setShowMore] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenVisible) {
      setHasBeenVisible(true);
      onVisible();
    }
  }, [isInView, hasBeenVisible, onVisible]);

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

  const isEven = index % 2 === 0;

  return (
    <BoxContainer className={isEven ? "even" : "odd"}>
      <div className="box-cover">
        <motion.span 
          className="indicator"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        />
        <motion.div
          className="box"
          ref={boxRef}
          onMouseMove={showCursor}
          onMouseLeave={hideCursor}
          onClick={handleBoxClick}
          initial={{ 
            opacity: 0,
            x: isEven ? -100 : 100,
            y: 50,
            scale: 0.8
          }}
          animate={isInView ? { 
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1
          } : {
            opacity: 0,
            x: isEven ? -100 : 100,
            y: 50,
            scale: 0.8
          }}
          transition={{ 
            duration: 0.8,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 8px 16px"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <BoxWrapper />
          <motion.span 
            className="mini-max-ico"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {showMore ? <FiMinimize2 /> : <FiMaximize2 />}
          </motion.span>
          <motion.div 
            className="less-desc"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          >
            <div className="where-how-long">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                {item.education ? <IoSchoolSharp /> : <MdWork />}
                {item.company}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                {item.duration}
              </motion.span>
            </div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
            >
              {item.role}
            </motion.span>
          </motion.div>
          <AnimatePresence>
            {showMore && (
              <motion.div
                className="work-done"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 }
                }}
              >
                {item.techs && (
                  <motion.ul 
                    className="techs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.techs.map((tech, techIndex) => (
                      <motion.li 
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.3 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 500,
                          damping: 20
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        #{tech}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
                {item.work && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {item.work}
                  </motion.p>
                )}
                {item.courses && (
                  <motion.p 
                    className="courses"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <span>Relevant Courses:</span>
                    {item.courses}
                  </motion.p>
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
    min-height: 50px;
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
    transition: box-shadow 0.3s ease;

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
      cursor: pointer;
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
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .courses p {
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

  &.odd {
    justify-content: flex-end;

    .box {
      margin-left: auto;
    }

    .indicator {
      left: -11px;
    }
  }

  &.even {
    justify-content: flex-start;

    .box {
      margin-right: auto;
    }

    .indicator {
      right: -12px;
    }
  }
`;