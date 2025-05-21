import React from "react";
import { styled } from "styled-components";

export default function HomeContainerWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: none;
  height: min-content;
  gap: 60px;
  padding: 0;
  position: relative;
  align-items: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;
