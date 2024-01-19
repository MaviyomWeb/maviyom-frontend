import Container from "@/components/Container";
import PolicyDetails from "@/components/PolicyDetails";
import { TnCInfo } from "@/constants";

const TermsAndConditions = () => {
  return (
    <div className="relative isolate w-full z-0 bg-white font-roboto    pb-10 md:pb-20">
      <Container>
        <PolicyDetails
          title={TnCInfo.title}
          info={TnCInfo.info}
          sections={TnCInfo.sections}
        />
      </Container>
    </div>
  );
};

export default TermsAndConditions;
