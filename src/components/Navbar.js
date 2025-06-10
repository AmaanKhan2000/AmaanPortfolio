import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";
import { GoHome, GoPerson, GoMail } from "react-icons/go";
import { PiProjectorScreenChart, PiDownloadSimple } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import hoverAnim from "../assets/images/hoverAnim.png";

const navItems = [
  { placeholder: "Home", icon: <GoHome />, path: "/#home" },
  { placeholder: "About", icon: <GoPerson />, path: "/#about" },
  {
    placeholder: "Projects/Research",
    icon: <PiProjectorScreenChart />,
    path: "/#projects",
  },
  { placeholder: "Contact", icon: <GoMail />, path: "/#contact" },
  {
    placeholder: "Resume",
    icon: <PiDownloadSimple style={{ strokeWidth: 3 }} />,
    path: `${process.env.PUBLIC_URL}/resume.pdf`,
    props: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
];

export function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    function handleScroll() {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 220)
        navbarRef.current.classList.add("show-navbar");
      else navbarRef.current.classList.remove("show-navbar");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <LargeScreenContainer ref={navbarRef}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <span className="placeholder">{item.placeholder}</span>
              <HashLink smooth to={item.path} {...item.props} className="nav-l">
                {item.icon}
              </HashLink>
              <span className="active"></span>
            </li>
          ))}
        </ul>
      </LargeScreenContainer>
      <SmallScreenWrapper>
        <AnimatePresence>
          {showMenu && (
            <SmallScreenContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <HashLink
                      onClick={() => setShowMenu(false)}
                      smooth
                      to={item.path}
                      {...item.props}
                      className="nav-s"
                    >
                      <span className="placeholder">{item.placeholder}</span>
                      <span>{item.icon}</span>
                    </HashLink>
                  </li>
                ))}
              </ul>
            </SmallScreenContainer>
          )}
        </AnimatePresence>
        <button onClick={() => setShowMenu(!showMenu)} className="menu-toggle">
          {showMenu ? (
            <IoMdClose className="menu-toggle-icon" />
          ) : (
            <HiMenu className="menu-toggle-icon" />
          )}
        </button>
      </SmallScreenWrapper>
    </>
  );
}

export function HomeNavigation() {
  return (
    <HomeNavigationContainer>
      <ul>
        {navItems.slice(1, navItems.length).map((item, index) => (
          <li key={index}>
            <HashLink smooth to={item.path} {...item.props}>
              {item.placeholder}
            </HashLink>
            <span className="border-btn" />
          </li>
        ))}
      </ul>
    </HomeNavigationContainer>
  );
}

const LargeScreenContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 24px;
  opacity: 0;
  box-shadow: rgba(114, 98, 218, 0.118) 0px 0.636953px 1.4013px -0.9375px,
    rgba(114, 98, 218, 0.11) 0px 1.9316px 4.24953px -1.875px,
    rgba(114, 98, 218, 0.094) 0px 5.10612px 11.2335px -2.8125px,
    rgba(114, 98, 218, 0.04) 0px 16px 35.2px -3.75px;
  border-color: rgb(245, 246, 255);
  transition: all 0.3s ease-in-out;
  bottom: -100px;
  pointer-events: none;
  z-index: 9999;

  ul {
    display: flex;
    list-style: none;
    padding: 12px 20px;

    :last-child {
      margin-right: 0;
    }
  }

  li {
    border-width: 2px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
    position: relative;
    background-color: #fff;
    border-radius: 24px;
  }

  .placeholder {
    position: absolute;
    top: -52px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    box-shadow: rgba(114, 98, 218, 0.184) 0px 0.636953px 2.16564px -1px,
      rgba(114, 98, 218, 0.176) 0px 1.9316px 6.56746px -2px,
      rgba(114, 98, 218, 0.145) 0px 5.10612px 17.3608px -3px,
      rgba(114, 98, 218, 0.047) 0px 16px 54.4px -4px;
    padding: 4px 14px;
    border-radius: 15px;
    color: #8c8fa6;
    border-style: solid;
    background-color: #fff;
    border-color: rgba(184, 187, 210, 0.1);
    font-family: "Poppins", sans-serif;
    display: none;
    font-size: 13px;
    font-weight: 400;
    width: max-content;
  }

  .active {
    width: 12px;
    height: 6px;
    border-radius: 10px;
    background-color: #474747;
    position: absolute;
    bottom: -6px;
    transform-origin: center;
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }

  .nav-l {
    outline: none;
    border-style: solid;
    background-color: #fff;
    display: block;
    width: 52px;
    height: 52px;
    border-radius: 24px;
    border-color: rgba(184, 187, 210, 0.1);
    box-shadow: rgba(114, 98, 218, 0.184) 0px 0.636953px 2.16564px -1px,
      rgba(114, 98, 218, 0.176) 0px 1.9316px 6.56746px -2px,
      rgba(114, 98, 218, 0.145) 0px 5.10612px 17.3608px -3px,
      rgba(114, 98, 218, 0.047) 0px 16px 54.4px -4px;
    position: relative;
    cursor: pointer;
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #8c8fa6;
    stroke-width: 0.5px;
    transition: color 0.3s ease-in-out;
  }

  li:hover svg {
    color: #1c1d20;
  }

  li:hover .placeholder {
    display: block !important;
  }

  li:hover .active {
    transform: scale(1);
  }

  li:hover .nav-l {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallScreenWrapper = styled.div`
  display: none;

  .menu-toggle {
    position: fixed;
    top: 25px;
    right: 15px;
    background: #fff;
    outline: none;
    border: none;
    display: block;
    width: 52px;
    height: 52px;
    padding: 10px;
    border-style: solid;
    border-color: rgba(184, 187, 210, 0.1);
    box-shadow: rgba(114, 98, 218, 0.184) 0px 0.636953px 2.16564px -1px,
      rgba(114, 98, 218, 0.176) 0px 1.9316px 6.56746px -2px,
      rgba(114, 98, 218, 0.145) 0px 5.10612px 17.3608px -3px,
      rgba(114, 98, 218, 0.047) 0px 16px 54.4px -4px;
    border-radius: 12px;
    cursor: pointer;
    z-index: 99999;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 28px;
      transform: translate(-50%, -50%);
      color: #8c8fa6;
    }
  }

  @media (max-width: 768px) {
    display: block !important;
  }
`;

const SmallScreenContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow-y: auto;
  background-color: #fff;

  ul {
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }

  .nav-s {
    background: none;
    outline: none;
    display: flex;
    width: fit-content;
    justify-content: flex-end;
    align-items: center;
    font-size: 17px;
    margin-top: 8px;
    margin-left: auto;
    margin-right: 10px;
    padding: 6px;
    color: #8c8fa6;
    font-family: "Poppins", sans-serif;
    border: none;
    font-weight: 500;
    text-decoration: none;
  }

  svg {
    font-size: 32px;
    margin-left: 20px;
    border-style: solid;
    border-color: rgba(184, 187, 210, 0.1);
    box-shadow: rgba(114, 98, 218, 0.184) 0px 0.636953px 2.16564px -1px,
      rgba(114, 98, 218, 0.176) 0px 1.9316px 6.56746px -2px,
      rgba(114, 98, 218, 0.145) 0px 5.10612px 17.3608px -3px,
      rgba(114, 98, 218, 0.047) 0px 16px 54.4px -4px;
    border-radius: 24px;
    padding: 15px;
    stroke-width: 0.6px;
    width: 60px;
    height: 60px;
  }
`;

const HomeNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  padding: 8px 0;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 20px;
    cursor: pointer !important;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    position: relative;
    padding: 2px 0;

    &:last-child {
      width: 90px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid #1c1d20;
      transition: all 300ms ease-out;
      background-image: url(${hoverAnim});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 65% 260%;

      a {
        color: #1c1d20;
      }

      .border-btn {
        display: none;
      }
    }

    &:last-child:hover {
      background-position: unset;
      background-size: 110%;

      a {
        color: #fff;
      }
    }
  }

  li:last-of-type {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: #474747;
  }

  .border-btn {
    position: absolute;
    height: 1.7px;
    background-color: #474747;
    bottom: 0px;
    left: 0;
    transform: translate(0, 0);
    width: 0;
    transition: width 0.3s ease-in-out;
  }

  li:hover .border-btn {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
