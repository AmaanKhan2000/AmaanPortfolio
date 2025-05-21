import React from "react";
import { styled } from "styled-components";
import { FaJava, FaGithubAlt, FaNodeJs } from "react-icons/fa";
import {
  SiKubernetes,
  SiSpringboot,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiJavascript,
  SiTensorflow,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import skills from "../../assets/docs/skills";

const skill_icon = {
  python: <SiPython />,
  java: <FaJava />,
  javascript: <SiJavascript />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  git_github: <FaGithubAlt />,
  docker: <SiDocker />,
  kubernetes: <SiKubernetes />,
  spring_boot: <SiSpringboot />,
  react: <SiReact />,
  node: <FaNodeJs />,
  tensorflow: <SiTensorflow />,
  numpy: <SiNumpy />,
  pandas: <SiPandas />,
  mysql: <GrMysql />,
  mongodb: <SiMongodb />,
  figma: <SiFigma />,
  photoshop: <SiAdobephotoshop />,
};

export default function MySkills() {
  return (
    <SkillsContainer>
      <h3>My Superpowers</h3>
      <ul>
        {skills.map((item, idx) => (
          <li key={idx}>
            {skill_icon[item.icon]}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  width: 100%;
  margin: 60px 0 30px 0;

  ul {
    margin-top: 70px;
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 40px;
    flex-wrap: wrap;
    font-family: "Poppins", sans-serif;
    height: auto;

    li {
      background: #fff;
      border: 1px solid #1c1d20;
      padding: 18px 24px;
      min-width: 140px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        flex-shrink: 0;
        font-size: 24px;
        color: #1c1d20;
      }

      span {
        flex-shrink: 0;
        font-size: 14px;
        user-select: none;
        color: #1c1d20;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 60px 0 0 0;

    ul {
      gap: 30px;
      li {
        padding: 16px 18px;
        min-width: 120px;
        gap: 5px;
        svg {
          font-size: 18px !important;
        }
        span {
          font-size: 13px !important;
        }
      }
    }
  }
`;
