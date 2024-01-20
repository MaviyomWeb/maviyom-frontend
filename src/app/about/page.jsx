import Container from "@/components/Container";

import AboutHero from "./components/AboutHero";
import Mission from "./components/Mission";
import OurTeam from "./components/OurTeam";
import Vision from "./components/Vision";

const About = () => {
  return (
    <div className="relative isolate z-0 pb-10 md:pb-20    ">
      <div className="relative">
        <Container>
          <AboutHero />

          <div className="pb-10 md:pb-20">
            <div className=" w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl  xL:max-w-5xl mx-auto">
              <img
                src="/maviyom-new-home.jpg"
                alt="about"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <p className="text-center mt-4  md:mt-8 max-w-7xl mx-auto  text-lg md:text-[17px]  leading-7 text-[#1b243f]">
              Maviyom Aviation is an emerging leader in the drone manufacturing
              sector, committed to innovating for the Indian skies and beyond.
              Our vision aligns with the government's aim to position India as a
              premier global drone hub by 2030. We craft drones tailored to meet
              the diverse needs of our customers, supporting applications across
              defence, surveying, and delivery. By offering high-quality drones
              at competitive prices, Maviyom is at the forefront of shaping the
              future of India's drone industry.
            </p>
          </div>
        </Container>
        <div className="py-5 md:py-10  bg-[#111827]">
          <Container>
            <Mission />
          </Container>
        </div>
        <Container>
          <Vision />
          <OurTeam />
        </Container>
      </div>
    </div>
  );
};

export default About;
