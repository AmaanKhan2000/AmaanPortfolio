import React from "react";
import { keyframes, styled } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import FixedDetails from "./components/FixedDetails";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <View />
    </React.Fragment>
  );
}

function View() {
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <Routes />
          <Footer />
        </Wrapper>
        <FixedDetails />
      </Container>
      <Cursor id="__cursor" />
    </React.Fragment>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px 100px;

  background-color: #ffffff;
  background-image:
    radial-gradient(circle, rgba(201, 201, 211, 0.3) 8%, transparent 9%),
    radial-gradient(circle, rgba(176, 176, 192, 0.3) 8%, transparent 9%),
    linear-gradient(to bottom right, #f0f4ff, #ffffff);

  background-size: 27px 27px, 27px 27px, cover;
  background-position: 0 0, 13.5px 13.5px, center;

  .show-navbar {
    bottom: 38px;
    opacity: 1;
    pointer-events: all;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;


const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 960px;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: min-content;
  gap: 120px;
  position: relative;

  @media (max-width: 768px) {
    gap: 100px;
  }
`;

const CursorAnim = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.7);
  }
`;

const CursorAnim2 = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.4);
  }
`;

const ClickAnim = keyframes`

  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(3);
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }

`;

const Cursor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  animation: ${CursorAnim} 0.5s infinite alternate;

  &.expand__cursor {
    animation: ${ClickAnim} 0.5s forwards;
    border: 1px solid #b0b0b0;
  }

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    border: 8px solid #b0b0b0;
    border-radius: 50%;
    opacity: 0.5;
    top: -9px;
    left: -9px;
    animation: ${CursorAnim2} 0.5s infinite alternate;
  }

  @media (max-width: 768px) {
    display: none !important;
  }
`;
