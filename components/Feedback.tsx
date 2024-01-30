import React from "react";
import Image from "next/image";

const FEEDBACK_LINK =
  "https://forms.gle/7NvzuT7t2XgEBopA6";

const Feedback = () => {
  return (
    <div className="feedback">
      <a href={FEEDBACK_LINK} target="_blank" rel="noreferrer">
        <button className="feedback-btn">Feedback</button>
      </a>
    </div>
  );
};

export default Feedback;
