import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";
import projects from "../../../assets/docs/projects.json";

export default function AllProjects() {
  const [showFullScreenHint, setShowFullScreenHint] = useState(true);
  return (
    <Container>
      <ProjectsNav />
      {<Outlet context={[showFullScreenHint, setShowFullScreenHint]} />}
    </Container>
  );
}

function ProjectsNav() {
  const location = useLocation();
  const [navs, setNavs] = useState([]);

  useEffect(() => {
    const paths = location.pathname.split("/");

    const breadcrumbs = [];
    let path = "";

    paths.forEach((item) => {
      if (item.trim().length !== 0) {
        const decoded = decodeURIComponent(item);
        path += `/${decoded}`;
        breadcrumbs.push({ path, name: getProject(decoded) });
      }
    });
    if (breadcrumbs.length === 1)
      breadcrumbs.unshift({ path: "/", name: "home" });

    setNavs([...breadcrumbs]);
  }, [location]);

  function getProject(search = "") {
    const found = projects.findIndex((i) => i.nav === search);
    if (found === -1) return search;
    return projects[found].name;
  }

  return (
    <GoBack>
      {navs.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </GoBack>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;

  h2 {
    text-align: left;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.4em;
    font-style: normal;
    color: #1c1d20;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    gap: 50px;

    h2 {
      font-size: 30px;
    }
  }
`;

const GoBack = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  list-style: none;
  text-decoration: none;

  li:last-of-type a {
    pointer-events: none;
    color: #838383;
  }

  li:first-of-type::after {
    content: "/";
    margin: 0 8px;
    color: #474747;
  }

  a {
    text-decoration: none;
    color: #474747;

    &:hover {
      text-decoration: underline !important;
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    font-size: 14px;
  }
`;
