import React from "react";
import { styled } from "styled-components";

export default function HomeHeading({ children }) {
  const heading = String(children).split(" ");
  return (
    <Container>
      {heading.map((item, index) => (
        <h2 className="heading" key={index}>
          {item}
        </h2>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;

  h2.heading {
    display: inline-block;
    text-align: left;
    font-size: 72px;
    font-weight: 500;
    line-height: 1.4em;
    font-style: normal;
    color: #1c1d20;
    font-family: "Poppins", sans-serif;
    margin-right: 25px;
    user-select: none;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    h2.heading {
      font-size: 36px;
      margin-right: 14px;
    }
  }
`;
