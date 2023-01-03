import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// @ts-ignore
import { EVENT_DATA } from "@/data/eventData";
import Image from "./Image";

import Modal from "./Modal";

export interface Coordinator {
  name: string;
  number: string;
  salutation: string;
  separator?: string;
  gender: string;
}

export const PhoneDetail = ({ detail }: { detail: Coordinator }) => (
  <a
    href={`tel:91${detail.number}`}
    className="text-alt"
  >{`${detail.gender} ${detail.name} (+91 ${detail.number})${detail.separator}  `}</a>
);

export interface CardTag {
  label: string;
  color?: string;
}

export const Tag = ({ tag }: { tag: CardTag }) => (
  <span
    className="pill fw-semibold"
    style={{ backgroundColor: tag.color || "" }}
  >
    {tag.label}
  </span>
);

const container = {
  hidden: { rotate: 0 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 5,
      delayChildren: 5,
    },
  },
};

const eventCardAnimationVariants = {
  offscreen: {
    opacity: 0,
    translateY: -50,
  },
  onscreen: { opacity: 1, translateX: 0, translateY: 0 },
};

const EventDetail = ({
  event,
  modalOpen,
  open,
  close,
  handleSelectEvent,
  id,
}: {
  event: any;
  modalOpen: boolean;
  open: any;
  close: any;
  handleSelectEvent: any;
  id: number;
}) => {
  const { name, tags, cssOptions } = event;
  const { allowFloatingTags, highlightImg } = cssOptions;

  return (
    <motion.div
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="mini-card"
      style={{
        overflow: "hidden",
      }}
      onClick={() => {
        if (modalOpen) {
          close();
          handleSelectEvent(-1);
        } else {
          open();
          handleSelectEvent(id);
        }
      }}
      variants={eventCardAnimationVariants}
      initial="offscreen"
      whileInView="onscreen"
      transition={{
        duration: 0.2,
        delay: id * 0.1,
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {highlightImg && (
        <Image
          src={highlightImg}
          alt={name}
          className="event-card-container"
          // className="card-highlight-img"
          // width="175"
          // height="175"
        />
      )}
      <div
        className="event-card-details"
        // className={`mini-card-content card-content ${
        //   cardContentStart === "end" ? "mt-auto" : ""
        // }`}
      >
        {allowFloatingTags && (
          <div className="pill-container">
            {React.Children.toArray(
              tags.map((tag: CardTag) => <Tag tag={tag} />)
            )}
          </div>
        )}
        <h3 className="fv-h5 card-header">
          {name}&nbsp;
          {!allowFloatingTags &&
            React.Children.toArray(
              tags.map((tag: CardTag) => <Tag tag={tag} />)
            )}
        </h3>
        <p
          className="fv-p-sm text-alt fw-semibold"
          style={{ marginTop: "0.5rem" }}
        >{`Details >>>`}</p>
      </div>
    </motion.div>
  );
};
const Events = ({ offsetY }: { offsetY: number }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedEventId, setSelectedEventId] = React.useState(-1);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const handleSelectEvent = (id: number) => setSelectedEventId(id);

  return (
    <>
      <section className="event-container">
        <div className="event-container-content mb-10">
          <h2 className="section-title fv-h2">Event&apos;s</h2>
          <motion.div
            className="event-grid container-content"
            variants={container}
            style={{
              position: "relative",
              // transform: `translateY(${offsetY * 0.08}px)`,
            }}
          >
            {EVENT_DATA.map((event: any, idx: number) => (
              <EventDetail
                event={event}
                modalOpen={modalOpen}
                open={open}
                close={close}
                handleSelectEvent={handleSelectEvent}
                id={idx}
                key={`${idx}-event-detail`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal handleClose={close} event={EVENT_DATA[selectedEventId]} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Events;
