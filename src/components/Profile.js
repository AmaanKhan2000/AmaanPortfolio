import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const profiles = [
  {
    icon: <FiLinkedin />,
    path: "https://www.linkedin.com/in/amaankhan2000",
  },
  {
    icon: <FiGithub />,
    path: " https://github.com/AmaanKhan2000",
  },
];

export default function Profile() {
  return profiles.map((item, index) => (
    <a key={index} href={item.path} target="_blank" rel="noreferrer">
      {item.icon}
    </a>
  ));
}
