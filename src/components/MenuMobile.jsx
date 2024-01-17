import React, { Fragment } from "react";

import { NAV_LINKS, SUB_NAV_LINKS } from "@/constants";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  mobileMenu,
}) => {
  return (
    <ul
      className={`flex flex-col gap-4  p-5 950Screen:hidden  font-medium absolute top-[60px] left-0 w-full h-[calc(100vh-60px)]
      bg-white border-t text-secondary overflow-y-auto
            `}
    >
      {NAV_LINKS.map((item) => {
        return (
          <Fragment key={item?.id}>
            {item?.subMenu ? (
              <li
                className="relative  border-b flex flex-col"
                onClick={() => setShowCatMenu((prev) => !prev)}
              >
                <div
                  className={`cursor-pointer  flex text-xl  items-center justify-between ${
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

                <ul
                  className={`dropdown-menu        ${
                    showCatMenu ? "block" : "hidden"
                  }`}
                >
                  {SUB_NAV_LINKS?.map((item, index) => {
                    return (
                      <li className="dropdown " key={index}>
                        <div className="dropdown-inner">
                          <div className="dropdown-item">
                            <h3
                              className="relative item-heading mt-2 mb-3  text-lg    text-secondary font-semibold *:
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
                                  onClick={() => {
                                    setShowCatMenu(false);
                                    setMobileMenu(false);
                                  }}
                                >
                                  <span className="flex flex-col justify-center  items-center gap-2  ">
                                    <span
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
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link
                  href={item?.href}
                  onClick={() => {
                    setShowCatMenu(false);
                    setMobileMenu(false);
                  }}
                  className=" transition-colors ease-in-out duration-150 text-xl hover:text-primary "
                >
                  {item.label}
                </Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
