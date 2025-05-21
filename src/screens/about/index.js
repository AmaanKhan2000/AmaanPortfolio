import React from "react";
import { styled, keyframes } from "styled-components";
import { FaChevronRight } from "react-icons/fa";

import HomeHeading from "../../components/HomeHeading";
import HomeContainerWrapper from "../../components/HomeContainerWrapper";
import Experiences from "./Experiences";
import MySkills from "./Skills";

export default function About() {
  return (
    <Container id="about">
      <HomeContainerWrapper>
        <HomeHeading>What Makes Me Tick?</HomeHeading>
        <Intro>
          <div className="qualify">
            <div>
              <span>
                2<span>+</span>
              </span>
              <span>Years Experience</span>
            </div>
            <div>
              <span>
                15<span>+</span>
              </span>
              <span>Projects Completed</span>
            </div>
          </div>
          <p>
            From a very young age, I was introduced to computers and was
            instantly hooked. Whether it was trying to beat my high score on 3D
            Pinball or pulling things apart to fix what I'd broken, computers
            became a core part of my childhood before I even realized it.
            <br />
            <br />
            As I grew up, my curiosity only deepened. I was no longer just
            excited to use technology—I wanted to understand how it worked
            behind the scenes. That curiosity has shaped every step of my
            journey since, pushing me to keep learning and do better with every
            project. And even now, it feels like I've only scratched the
            surface—there’s still a vast iceberg left to explore.
            <br />
            <br />
            Today, I’m diving into the world of AI—a field I’m deeply passionate
            about and excited to explore even further.
            <br />
            <br />
            My process?
            <i>
              <FaChevronRight />
              Code, Break, & Learn.<b></b>
            </i>
            <br />
            Every line of code takes me somewhere new, and that thrill of
            discovery is what keeps me hooked.
            <br />
          </p>
        </Intro>
        <Experiences />
        <MySkills />
      </HomeContainerWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    color: #474747;
    line-height: 1.7em;
    text-align: justify;
  }

  h3 {
    color: #1c1d20;
    font-family: "Poppins", sans-serif;
    font-size: 34px;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 500;
    user-select: none;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const Blink = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
  user-select: none;

  p {
    flex: 1;
    min-width: 0;
    color: #474747;

    i {
      font-size: 15px;
      font-weight: 500;
      margin-left: 30px;
      position: relative;
      letter-spacing: 1px;
      color: #1c1d20;
      font-style: normal;

      svg {
        font-size: 13px;
        position: absolute;
        top: 4px;
        left: -15px;
        color: #1c1d20;
      }
      b {
        display: inline-block;
        width: 14px;
        margin-left: 2px;
        border-bottom: 2px solid #1c1d20;
        animation: ${Blink} 0.5s infinite;
        transform: translateY(2px);
      }
    }
  }

  .qualify {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 40px;
    padding-left: 150px;
    div {
      span {
        font-family: "Poppins", sans-serif;
      }
      span:first-child {
        color: #1c1d20;
        font-size: 72px;
        font-weight: 500;
        display: flex;
        align-items: center;
        span {
          font-size: 50px;
          margin-left: 5px;
        }
      }
      span:nth-child(2) {
        font-size: 14px;
        display: block;
        margin-top: -18px;
        color: #474747;
      }
    }
  }

  @media (max-width: 998px) {
    gap: 30px;
    .qualify {
      padding-left: 70px;

      div {
        span:first-child {
          font-size: 52px;
          span {
            font-size: 42px;
            margin-left: 2px;
          }
        }
        span:nth-child(2) {
          margin-top: -15px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;

    .qualify {
      flex-direction: row;
      padding-left: 0;

      div {
        span:first-child {
          font-size: 42px;
          span {
            font-size: 32px;
            margin-left: 1px;
          }
        }
        span:nth-child(2) {
          margin-top: -10px;
        }
      }
    }
  }
`;
