import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

import Screens from "../screens";
import Projects from "../screens/projects/Projects";
import ProjectDetails from "../screens/projects/pages/ProjectDetails";
import ProjectsWrapper from "../screens/projects/pages";
import HomeHeading from "./HomeHeading";

export default function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Screens />} />
      <Route path="/projects" element={<ProjectsWrapper />}>
        <Route
          path="/projects"
          element={
            <>
              <HomeHeading>Go-Getter Projects</HomeHeading>
              <Projects />
            </>
          }
        />
        <Route path="/projects/:project" element={<ProjectDetails />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
