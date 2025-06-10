'use client'; // At the very top of both files
import { styled, keyframes } from "styled-components";
import HomeHeading from "../../components/HomeHeading";
import HomeContainerWrapper from "../../components/HomeContainerWrapper";
import Experiences from "./Experiences";
import MySkills from "./Skills";
import { useEffect, useState } from "react";


const RotatingText = ({ texts, pause = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length); // Switch text
        setFade(true); // Start fade-in
      }, 600); // Duration of fade-out
    }, pause);

    return () => clearInterval(interval);
  }, [texts, pause]);

  return <SmoothFade $fade={fade}>{texts[index]}</SmoothFade>;
};

  


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
            I’ve always been fascinated by computers even before I knew what they were
            truly capable of. I was just 7 when I first played Minesweeper on my family’s
            old desktop. That moment sparked a lifelong curiosity a journey driven by the
            desire to understand, break, fix and build things with code.
            <br />
            <br />
            What began as playful exploration slowly turned into something deeper. As I
            got older, the questions got tougher, and so did the problems. But with every
            challenge came a stronger determination to solve it. From debugging stubborn
            code to building end-to-end software solutions, the more complex it got, the
            more hooked I became.
            <br />
            <br />
            I've always considered myself a jack of all trades dabbling across domains
            from software development to cybersecurity and now venturing into the
            exciting world of AI and ML. And honestly? I wouldn't have it any other way.
            <br />
            <br />
            My mindset? 
            <RotatingText texts={["Stay curious.", "Build relentlessly.", "Fail better.", "Keep learning."]} pause={2000} />

          </p>

        </Intro>
        <Experiences />
        <MySkills />
      </HomeContainerWrapper>
    </Container>


  );
}

const SmoothFade = styled.span`
  display: inline-block;
  font-weight: 600;
  color: #1c1d20;
  font-family: "Poppins", sans-serif;
  margin-left: 5px;
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  opacity: ${({ $fade }) => ($fade ? 1 : 0)};
  transform: ${({ $fade }) => ($fade ? "translateY(0px)" : "translateY(10px)")};
`;


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
