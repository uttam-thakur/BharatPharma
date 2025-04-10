import React from "react";

import { infoDataHome } from "../common/constant";

import styles from "./Styles/Home.module.css";

export default function Home() {
  return (
    <>
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
          <div className={styles.title}>{infoDataHome.title}</div>
          <div className={styles.infoWindow}>
            <div className={styles.subTitle}>{infoDataHome.subTitle}</div>
            <div className={styles.description}>{infoDataHome.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import styles from "./Styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.heroSection}>
//       <div className={styles.overlay}></div>

//       <div className={styles.heroContent}>
//         <p className={styles.topLabel}>We will Help You</p>
//         <h1 className={styles.mainHeading}>To Live Healthy Life</h1>
//         <p className={styles.subText}>
//           Our mission is to build a healthier tomorrow for patients <br />
//           with progressive non-viral liver diseases
//         </p>
//         <button className={styles.ctaBtn}>Discover Now</button>
//       </div>
//     </div>
//   );
// }
