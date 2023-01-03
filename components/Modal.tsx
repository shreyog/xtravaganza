import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
            <Image
              src={backdropImg}
              alt={"backdrop"}
              // className="card-backdrop-img"
              width="150"
              height="150"
            />
          )}
          <div
            className={`card-content  ${
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
            <div className="modal-content">
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
                  {React.Children.toArray(
                    description.map((desc: string) => (
                      <li className="text-alt">{desc}</li>
                    ))
                  )}
                </ul>
              )}
              {format && <p className="mb-1">Format:</p>}
              {format && (
                <ul className="check-list mb-1">
                  {React.Children.toArray(
                    format.map((fmt: string) => (
                      <li className="text-alt">{fmt}</li>
                    ))
                  )}
                </ul>
              )}
              {rules && <p className="mb-1">Rules:</p>}
              {rules && (
                <ul className="check-list mb-1">
                  {React.Children.toArray(
                    rules.map((rule: string) => (
                      <li className="text-alt">{rule}</li>
                    ))
                  )}
                </ul>
              )}
              <p className="mb-1">Event Coordinator/s:</p>
              <p>
                {coordinators &&
                  React.Children.toArray(
                    coordinators.map(
                      (
                        coordinator: Coordinator,
                        idx: number,
                        arr: Coordinator[]
                      ) => (
                        <span>
                          <PhoneDetail
                            detail={{
                              ...coordinator,
                              separator: idx === arr.length - 1 ? "" : ", ",
                            }}
                          />
                        </span>
                      )
                    )
                  )}
              </p>
              <div className="btn-container">
                {/* <button className="btn" onClick={handleClose}>
                  Close
                </button> */}
                <button className="custom-btn btn-2 " onClick={handleClose}>
                  {/* <span> */}
                    Close
                    {/* </span> */}
                 
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
