import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import HomeHeading from "../../components/HomeHeading";
import HomeContainerWrapper from "../../components/HomeContainerWrapper";

export default function index() {
  return (
    <Container id="contact">
      <HomeContainerWrapper>
        <HomeHeading>Let's Talk</HomeHeading>
        <div className="contact-wrapper">
          <p>
            Got a question or just want to chat? Reach out to me - I can't wait
            to hear from you!
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 8 }}
            href="mailto:amaankhxn2000@gmail.com"
          >
            Say Hello
          </motion.a>
        </div>
      </HomeContainerWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;

  .contact-wrapper {
    width: 100%;
    display: flex;
    align-items: center;

    p {
      color: #474747;
      max-width: 560px;
      width: 100%;
      padding-right: 20px;
      line-height: 1.7em;
      user-select: none;
    }

    a {
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      color: #fff;
      text-decoration: none;
      width: fit-content;
      font-weight: 300;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      background: #1c1d20;
      aspect-ratio: 1/1;
      flex-shrink: 0;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }

    a {
      font-size: 30px;
    }
  }
`;
