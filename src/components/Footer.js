import React from "react";
import { styled } from "styled-components";

import Profile from "./Profile";

export default function Footer() {
  return (
    <Container>
      <div className="profiles">
        <Profile />
      </div>
      <span>&#169; 2025 Mohammed Amaan Ahmed Khan. All rights reserved.</span>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  color: #474747;

  .profiles {
    display: none;
    gap: 16px;
    padding: 8px 0;

    a {
      color: #474747;
      text-decoration: none;
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    .profiles {
      display: flex;
    }
  }
`;
