import React from "react";
import { styled } from "styled-components";
import Typewriter from "typewriter-effect";
import { BiSolidChevronRight } from "react-icons/bi";

import { HomeNavigation } from "../../components/Navbar";
import emoji from "../../assets/images/emoji.png";

export default function Home() {
  const disableImage = (event) => event.preventDefault();
  return (
    <Container id="home">
      <HomeNavigation />
      <div className="home-wrapper">
        <div className="details">
          <h1>👋 Hello, I'm Mohammed Amaan Ahmed Khan!</h1>
          <Typewriter
            options={{
              strings: ["AI Enthusiast", "Ex-Cybersecurity Engineer @Verizon", "MERN stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="emoji">
          <div className="emoji-img">
            <img
              src={emoji}
              alt="emoji"
              onContextMenu={disableImage}
              onDragStart={disableImage}
            />
          </div>
          <div className="my-status">
            <p>
              <BiSolidChevronRight />
              amaan@workspace <span>~</span> <span>status</span>
            </p>
            <p>
          

              Currently advancing my expertise in AI/ML through a Master’s in Data Science & Analytics, I’ve authored research on AI-driven health diagnostics (published in SN Computer Science), combining cybersecurity rigor with predictive modeling. My goal is to build intelligent systems that preempt threats and enhance organizational resilience.

              Seeking opportunities in AI-driven software development/Cybersecurity roles
              where I can apply my skills and make an impact.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex: 1;
    min-height: 0;
    font-family: "Poppins", sans-serif;

    .details {
      width: 60%;
      user-select: none;
      h1 {
        font-weight: 500;
        font-size: 28px;
        color: #1c1d20;
      }
      .Typewriter {
        min-height: 160px;
      }
      .Typewriter span {
        font-weight: 500;
        font-size: 52px;
        color: #1c1d20;
      }
      .Typewriter__cursor {
        font-weight: 300 !important;
      }
    }

    .emoji {
      flex-shrink: 0;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .emoji-img {
        width: 100%;
        max-width: 320px;
        aspect-ratio: 1/1;
        img {
          width: 100%;
        }
      }

      .my-status {
        padding: 20px 26px;
        border-radius: 10px;
        border: 1px solid #1c1d20;
        width: 100%;
        max-width: 460px;

        p {
          user-select: none;

          &:first-child {
            display: flex;
            align-items: center;
            color: #7021ed;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: 1px;

            span:first-of-type {
              color: #1c1d20;
              margin: 0 5px;
              font-size: 18px !important;
            }
            span:last-of-type {
              color: #1581ef;
            }

            svg {
              font-size: 18px;
              margin-right: 1px;
            }
          }
          &:last-child {
            padding: 1px 0 0 5px;
            font-size: 13px;
            color: #1c1d20;
            line-height: 21px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .home-wrapper {
      flex-direction: column;
      flex: 0;

      .details {
        width: 100%;
        margin-top: 160px;

        h1 {
          font-size: 22px;
        }
        .Typewriter span {
          font-size: 38px;
        }
      }

      .emoji {
        margin-top: 0px;
        align-items: center;
        width: 100%;
      }
      .my-status {
        margin-top: 30px;
      }
    }
  }
`;
