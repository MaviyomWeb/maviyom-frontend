import React, { Fragment, useEffect } from "react";

import { NAV_LINKS, SUB_NAV_LINKS } from "@/constants";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import Image from "next/image";
import { VscChromeClose } from "react-icons/vsc";

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  mobileMenu,
}) => {
  const hideShowMenu = () => {
    setShowCatMenu(false);
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      if (mobileMenu) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleBodyOverflow(); // Call it immediately to set initial state

    return () => {
      // Cleanup function to remove the class when the component unmounts
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenu]); // Re-run the effect when mobileMenu changes

  return (
    <div className="">
      <div
        className={`flex flex-col gap-4 964Screen:hidden  font-medium fixed top-0   right-[-360px]   w-full h-screen max-w-[360px] bg-white   px-4  pb-20 overflow-y-auto  z-50 transition-all duration-[400ms] transition-cubic-out  ${
          mobileMenu
            ? "visible duration-500 translate-x-[-360px]"
            : " invisible "
        }`}
      >
        <div className="flex items-center justify-between py-2">
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <img
              src="/logo.png"
              alt="logo"
              className="h-full w-36 964Screen:w-40   object-cover "
            />
          </Link>

          <div className=" rounded-full flex 964Screen:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            <VscChromeClose
              className="text-[28px]"
              onClick={() => setMobileMenu(false)}
            />
          </div>
        </div>

        <ul
          className={`flex flex-col gap-4 pl-2   text-secondary 
            `}
        >
          {NAV_LINKS.map((item) => {
            return (
              <Fragment key={item?.id}>
                {item?.subMenu ? (
                  <li
                    className="relative  flex flex-col"
                    onClick={() => setShowCatMenu((prev) => !prev)}
                  >
                    <div
                      className={`cursor-pointer  flex text-lg  items-center justify-between ${
                        showCatMenu ? "text-primary" : "text-secondary"
                      } `}
                    >
                      {item.label}
                      <BsChevronDown
                        size={20}
                        className={`text-current transition-transform ease-in-out duration-200 ${
                          showCatMenu
                            ? "text-primary rotate-180"
                            : "text-secondary rotate-0"
                        } `}
                      />
                    </div>

                    {showCatMenu && (
                      <ul className={`dropdown-menu       `}>
                        {SUB_NAV_LINKS?.map((item, index) => {
                          return (
                            <li className="dropdown " key={index}>
                              <div className="dropdown-inner">
                                <div className="dropdown-item">
                                  <h3
                                    className="relative item-heading mt-2 mb-3  text-base   text-secondary font-semibold *:
                            after:content-[''] after:absolute after:top-full after:left-0 after:h-[3px] after:w-8 after:bg-primary
                            "
                                  >
                                    {item?.category}:
                                  </h3>
                                  {item?.productLinks?.map((product) => {
                                    return (
                                      <Link
                                        key={product?.id}
                                        className="group/link flex items-center justify-between rounded-md p-1 border  duration-150  mb-3   "
                                        href={product?.href}
                                        onClick={hideShowMenu}
                                      >
                                        <span className="flex flex-col justify-center  items-center gap-2  ">
                                          {/* <span
                                            className={`   rounded ${
                                              product?.label === "Maviyom 25L"
                                                ? "h-32"
                                                : "h-20"
                                            } `}
                                          >
                                            <img
                                              src={product?.image}
                                              alt={product?.label}
                                              className={` w-full object-cover ${
                                                product?.label === "Maviyom 25L"
                                                  ? "h-36"
                                                  : "h-full"
                                              }`}
                                            />
                                          </span> */}
                                          <span>
                                            <Image
                                              src={product?.image}
                                              alt={product?.label}
                                              sizes="100vw"
                                              // Make the image display full width
                                              width={200}
                                              height={80}
                                              placeholder="blur"
                                              blurDataURL="/1x1-ffffffff.png"
                                              style={{
                                                width: "100%",
                                                height: "auto",
                                              }}
                                            />
                                          </span>
                                          <span className=" flex-grow text-center">
                                            <span className="mb-1 block text-xl font-semibold text-dark group-hover/link:text-secondary ">
                                              {product?.label}
                                            </span>
                                            <span className="block  font-medium text-gray-600">
                                              {product?.description}
                                            </span>
                                          </span>
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li className="cursor-pointer">
                    <Link
                      href={item?.href}
                      onClick={hideShowMenu}
                      className=" transition-colors ease-in-out duration-150 text-lg hover:text-primary "
                    >
                      {item.label}
                    </Link>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>

      <div
        onClick={hideShowMenu}
        className={` fixed top-0 left-0 bottom-0 h-screen w-full bg-[#111827a0]  overlay transition-all duration-200 ease z-40 cursor-pointer ${
          mobileMenu ? "opacity-50 visible" : "opacity-100 invisible "
        }`}
      ></div>
    </div>
  );
};

export default MenuMobile;
