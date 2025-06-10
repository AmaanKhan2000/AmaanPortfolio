import React from "react";
import { styled } from "styled-components";
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
  SiTypescript,
  SiFastapi,
  SiFlask,
  SiScikitlearn,
  SiPostgresql,
  SiGooglecloud,
  SiJira,
  SiOpenai,
  SiJson,
  SiC,
  SiCplusplus,
  SiExpress
} from "react-icons/si";

import {
  FaJava,
  FaGithubAlt,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import skills from "../../assets/docs/skills.json"
import { GrMysql } from "react-icons/gr";

const skill_icon = {
  python: <SiPython />,
  java: <FaJava />,
  c: <SiC />,
  cpp: <SiCplusplus />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  sql: <GrMysql />,
  json: <SiJson />,
  git_github: <FaGithubAlt />,
  git: <FaGitAlt />,
  docker: <SiDocker />,
  kubernetes: <SiKubernetes />,
  react: <SiReact />,
  node: <FaNodeJs />,
  express: <SiExpress />,
  flask: <SiFlask />,
  fastapi: <SiFastapi />,
  spring_boot: <SiSpringboot />,
  tensorflow: <SiTensorflow />,
  scikit: <SiScikitlearn />,
  numpy: <SiNumpy />,
  pandas: <SiPandas />,
  mysql: <GrMysql />,
  postgresql: <SiPostgresql />,
  mongodb: <SiMongodb />,
  gcp: <SiGooglecloud />,
  openai: <SiOpenai />,
  jira: <SiJira />,
  figma: <SiFigma />,
  photoshop: <SiAdobephotoshop />
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
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

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
