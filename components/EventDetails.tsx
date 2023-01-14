import React from "react";

import Image from "./Image";

// @ts-ignore
import { EVENT_DETAILS } from "@/data/eventDetails";

const EventDetails = () => {
  return (
    <section className="event-details-container container-content ">
      <h2 className="section-title fv-h2 mt-10">Event Detail&apos;s</h2>
      <div className="event-details">
        {React.Children.toArray(
          EVENT_DETAILS.map((eventDetail) => (
            <div className="event-detail">
              <Image
                src={eventDetail.iconSrc}
                alt={eventDetail.heading}
                height="5rem"
                width="5rem"
              />
              <div className="event-info">
                <h3 className="fw-semibold">{eventDetail.heading}</h3>
                <p className="text-alt">{eventDetail.info}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default EventDetails;
