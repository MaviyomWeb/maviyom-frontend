import Container from "@/components/Container";
import PolicyDetails from "@/components/PolicyDetails";
import { privacyInfo } from "@/constants";

const Privacy = () => {
  return (
    <div className="relative isolate w-full z-0 bg-white font-roboto    pb-10 md:pb-20">
      <Container>
        <PolicyDetails
          title={privacyInfo.title}
          info={privacyInfo.info}
          sections={privacyInfo.sections}
        />
      </Container>
    </div>
  );
};

export default Privacy;
