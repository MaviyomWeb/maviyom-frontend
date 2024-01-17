import Container from "@/components/Container";
import React from "react";
import ContactAddress from "./components/ContactAddress";
import GetInTouch from "./components/GetInTouch";

const page = () => {
  return (
    <>
      <Container>
        {/* Address */}
        <ContactAddress />

        <div className="w-full max-w-3xl mx-auto">
          <p
            className={` text-[#353535] pb-5 text-lg md:text-base text-center
            `}
          >
            Connect with Maviyom Aviation Pvt. Ltd. – we’re here to listen.
            Whether you're looking to explore the skies with our drones or
            seeking innovative solutions, our team is eager to discuss how we
            can take your ambitions to new heights. Contact us today and let's
            navigate the future together.
          </p>
        </div>

        {/* Contact Form */}
        <GetInTouch />
      </Container>
    </>
  );
};

export default page;
