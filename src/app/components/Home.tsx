import React from "react";

import { infoData, contactData } from "../common/constant";

import styles from "./Styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* <div className="absolute top-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-screen h-32 md:h-40"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,160 C360,260 1080,60 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div> */}
      <div className={styles.main}>
        <div className="absolute -bottom-40 left-0 w-full z-10">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-screen h-32 md:h-40"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,160 C360,260 1080,60 1440,160 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{infoData.title}</div>
          <div className={styles.infoWindow}>
            <div className={styles.subTitle}>{infoData.subTitle}</div>
            <div className={styles.description}>{infoData.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
