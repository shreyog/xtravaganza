import React from "react";
import Image from "next/image";

const FEEDBACK_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSc0BLThCXoTZxJztp1TxzjavRm9xEmw_At8LxRGPRIuZdN2uA/viewform?vc=0&c=0&w=1&flr=0&gxid=-8203366&pli=1";

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
