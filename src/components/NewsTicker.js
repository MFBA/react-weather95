import React from "react";
import Marquee from "react-fast-marquee";

const NewsTicker = () => {
  return (
    <Marquee gradientWidth={0} style={{ zIndex: -2 }}>
      I can be a React component, multiple React components, or just some text.
    </Marquee>
  );
};

export default NewsTicker;
