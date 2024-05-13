import { useState } from "react";

const About = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placera orci nulla. Est sit amet facilisis magna etiam tempor orci. Sit ame tellus cras adipiscing enim eu. Nec dui nunc mattis enim. Liber volutpat sed cras ornare arcu. Vulputate mi sit amet mauris commodo. Metus dictum at tempor commod ullamcorper a lacus vestibulum sed. Interdum velit euismod i pellentesque massa.";
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = showFullText ? text : text.slice(0, 100);
  const buttonText = showFullText ? "Read less" : "Read more";

  return (
    <div className="about-wrapper">
      <p className="heading">About the company</p>
      <p className="sub-text only-desktop">{text}</p>
      <p className="sub-text only-mobile">
        {truncatedText} &nbsp;
        {text.length > 100 && (
          <span
            style={{
              color: "#FFC300",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={toggleShowFullText}
          >
            {buttonText}
          </span>
        )}
      </p>
    </div>
  );
};

export default About;
