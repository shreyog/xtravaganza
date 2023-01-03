import React from "react";
import NextImage from "next/image";

// create an image component just to set the image property as unoptimized
// images should be uploaded to the CDN

const Image = ({
  width = "100%",
  height = "100%",
  alt = "",
  src = "",
  className = "",
}) => {
  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        // border: "1px solid red",
      }}
      className={className}
      //   className="card-highlight-container"
    >
      <NextImage src={src} fill={true} unoptimized={true} alt={alt} />
    </div>
  );
};

export default Image;
