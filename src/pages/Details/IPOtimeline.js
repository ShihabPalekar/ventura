import StepProgressBar from "./StepProgressBar";
import StepProgressBarMobile from "./StepProgressBarMobile";

const IPOtimeline = ({ data }) => {
  return (
    <div className="ipo-timeline-wrapper">
      <div className="heading">IPO Timeline</div>
      <StepProgressBar />
      <StepProgressBarMobile />
    </div>
  );
};

export default IPOtimeline;
