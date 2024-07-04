import { locations } from "@/constants";
import { useMessages } from "next-intl";
import React from "react";

import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const ContactAddress = ({ t }) => {
  const messages = useMessages();
  const locations = Object.keys(
    messages.ContactPage.ContactAddress.Locations.LocationsList
  );

  return (
    <div className="rounded-lg bg-gray-100 mt-8 mb-5 md:my-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-10 lg:px-0 ">
        <div className="py-5 md:py-10">
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-2  md:gap-x-8 lg:gap-x-16 xl:gap-x-20">
            <div className="flex flex-col sm:flex-row md:flex-col space-y-5 sm:space-y-0 md:space-y-7   sm:justify-between">
              <div className="  ">
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 flex items-center justify-center text-white bg-secondary rounded-full">
                  <HiOutlineEnvelope className="text-2xl md:text-[27px] lg:text-3xl" />
                </div>
                <h3 className="w-full text-2xl md:text-3xl   font-bold text-secondary mt-2  md:mt-4 mb-1 md:mb-2 ">
                  {t("ContactAddress.Email.Label")}
                </h3>
                <p className="w-full text-lg  text-gray-600">
                  {t("ContactAddress.Email.Value")}
                </p>
              </div>

              <div className="">
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 flex items-center justify-center text-white bg-secondary rounded-full">
                  <IoCallOutline className="text-2xl md:text-[27px] lg:text-3xl" />
                </div>
                <h3 className="w-full text-2xl md:text-3xl   font-bold text-secondary  mt-2  md:mt-4 mb-1 md:mb-2  ">
                  {t("ContactAddress.Phone.Label")}
                </h3>
                <p className="w-full text-lg  text-gray-600">
                  {t("ContactAddress.Phone.Value")}
                </p>
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="space-y-4">
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 flex items-center justify-center text-white bg-secondary rounded-full">
                  <IoLocationOutline className="text-2xl md:text-[27px] lg:text-3xl" />
                </div>
                <h3 className="w-full text-2xl md:text-3xl   font-bold text-secondary  ">
                  {t("ContactAddress.Locations.Heading")}
                </h3>
              </div>
              {locations.map((location) => (
                <div
                  key={location}
                  className="flex flex-col space-y-1 first:pt-0 lg:w-full"
                >
                  <p className="w-full text-xl font-semibold  text-secondary">
                    {t(
                      `ContactAddress.Locations.LocationsList.${location}.Title`
                    )}
                  </p>

                  <p className="font-medium  text-lg text-gray-600">
                    {t(
                      `ContactAddress.Locations.LocationsList.${location}.Address`
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
