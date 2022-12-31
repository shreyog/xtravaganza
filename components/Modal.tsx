import React from "react";
import { motion } from "framer-motion";

import Backdrop from "./Backdrop";
import { Tag, CardTag, PhoneDetail, Coordinator } from "./Events";

const easeIn = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.4,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

const Modal = ({ handleClose, event }: { handleClose: any; event: any }) => {
  const {
    name,
    tags,
    cssOptions,
    rules,
    coordinators,
    noOfParticipants,
    duration,
    format,
    description,
  } = event;
  const { cardContentStart, backdropImg, allowFloatingTags } = cssOptions;
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={easeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="card">
          {backdropImg && (
            <img
              src={backdropImg}
              className="card-backdrop-img"
              alt="backdrop"
            />
          )}
          <div
            className={`card-content ${
              cardContentStart === "end" ? "mt-auto" : ""
            }`}
          >
            {allowFloatingTags && (
              <div className="pill-container">
                {tags.map((tag: CardTag, idx: number) => (
                  <Tag tag={tag} key={`${idx}-tag-flag`} />
                ))}
              </div>
            )}
            <h3 className="fv-h3 card-header">
              {name}&nbsp;
              {!allowFloatingTags &&
                tags.map((tag: CardTag, idx: number) => (
                  <Tag tag={tag} key={`${idx}-tag-flag`} />
                ))}
            </h3>
            {noOfParticipants && (
              <p className="mb-1">
                No of Participants:{" "}
                <span className="text-alt">{noOfParticipants}</span>
              </p>
            )}
            {duration && (
              <p className="mb-1">
                Duration: <span className="text-alt">{duration}</span>
              </p>
            )}
            {description && <p className="mb-1">Description:</p>}
            {description && (
              <ul className="check-list mb-1">
                {description.map((desc: string, idx: number) => (
                  <li className="text-alt" key={`${idx}-desc`}>
                    {desc}
                  </li>
                ))}
              </ul>
            )}
            {format && <p className="mb-1">Format:</p>}
            {format && (
              <ul className="check-list mb-1">
                {format.map((fmt: string, idx: number) => (
                  <li className="text-alt" key={`${idx}-fmt`}>
                    {fmt}
                  </li>
                ))}
              </ul>
            )}
            {rules && <p className="mb-1">Rules:</p>}
            {rules && (
              <ul className="check-list mb-1">
                {rules.map((rule: string, idx: number) => (
                  <li className="text-alt" key={`${idx}-rule`}>
                    {rule}
                  </li>
                ))}
              </ul>
            )}
            <p className="mb-1">Event Coordinator/s:</p>
            <p>
              {coordinators &&
                coordinators.map(
                  (
                    coordinator: Coordinator,
                    idx: number,
                    arr: Coordinator[]
                  ) => (
                    <span key={`${idx}-phone-detail`}>
                      <PhoneDetail
                        detail={{
                          ...coordinator,
                          separator: idx === arr.length - 1 ? "" : ", ",
                        }}
                      />
                    </span>
                  )
                )}
            </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
