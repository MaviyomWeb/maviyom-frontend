"use client";

import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import Link from "next/link";

import Container from "./Container";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import TouchButton from "./TouchButton";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState("0");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && mobileMenu) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenu]);

  return (
    <header
      className={` w-full h-[60px] 950Screen:h-[80px] bg-white flex justify-between items-center z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Container>
        <div className=" flex items-center justify-between">
          <Link href="/">
            <img
              src="/logo.png"
              alt="logo"
              className="h-full w-32 950Screen:w-36   object-cover "
            />
          </Link>

          <nav>
            
            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
            {mobileMenu && (
              <MenuMobile
                mobileMenu={mobileMenu}
                showCatMenu={showCatMenu}
                setShowCatMenu={setShowCatMenu}
                setMobileMenu={setMobileMenu}
              />
            )}
          </nav>

          <div className="flex items-center ">
            <div className="nav_actions hidden 950Screen:block">
              <TouchButton />
            </div>

            {/* Mobile icon start */}
            <div className=" rounded-full flex 950Screen:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
              {mobileMenu ? (
                <VscChromeClose
                  className="text-2xl"
                  onClick={() => {
                    setMobileMenu(false);
                    setShowCatMenu(false);
                  }}
                />
              ) : (
                <BiMenuAltRight
                  className="text-3xl"
                  onClick={() => setMobileMenu(true)}
                />
              )}
            </div>
            {/* Mobile icon end */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
