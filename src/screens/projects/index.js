import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import HomeContainerWrapper from "../../components/HomeContainerWrapper";
import HomeHeading from "../../components/HomeHeading";
import projects from "../../assets/docs/projects.json";
import Projects from "./Projects";
import hoverAnim from "../../assets/images/hoverAnim.png";

export default function index() {
  return (
    <Container id="projects">
      <HomeContainerWrapper>
        <HomeHeading>Go-Getter Projects</HomeHeading>
        <Projects len={2} />
        {projects.length > 2 && <LoadMore to="/projects">Load more</LoadMore>}
      </HomeContainerWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const LoadMore = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  cursor: pointer;
  margin: 20px auto;
  color: #1c1d20;
  background-color: #fff;
  border-radius: 25px;
  padding: 16px 32px;
  font-size: 14px;
  transition: all 300ms ease-out;
  border: 1px solid #1c1d20;
  font-weight: 400;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-image: url(${hoverAnim});
  background-repeat: no-repeat;
  background-position: 50% 420%;
  background-size: 100%;

  &:hover {
    color: #fff;
    background-position: unset;
    background-size: 110%;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;
