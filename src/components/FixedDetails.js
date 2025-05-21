import React from "react";
import { styled } from "styled-components";

import Profile from "./Profile";

export default function FixedDetails() {
  return (
    <>
      <MailContainer>
        <a href="mailto:its.amaankhxn2000@gmail.com">amaankhxn2000@gmail.com</a>
        <span className="block"></span>
      </MailContainer>
      <LinksContainer>
        <Profile />
        <span className="block"></span>
      </LinksContainer>
    </>
  );
}

const MailContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: "Poppins", sans-serif;
  z-index: 999;

  .block {
    display: block;
    width: 2px;
    height: 90px;
    background: #1c1d20;
  }

  a {
    font-size: 14px;
    letter-spacing: 2px;
    color: #1c1d20;
    writing-mode: vertical-lr;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
  }

  a:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-family: "Poppins", sans-serif;
  z-index: 999;

  .block {
    display: block;
    width: 2px;
    height: 90px;
    background: #1c1d20;
  }

  a {
    color: #1c1d20;
    font-size: 23px;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
  }

  a:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
