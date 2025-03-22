// components/Album.tsx
import styles from "../components/styles/Album.module.css";

const Album = () => {
  return (
    <div className={styles.album}>
      <div className={`${styles.responsiveContainerBlock} ${styles.bg}`}>
        <div className={`${styles.responsiveContainerBlock} ${styles.imgCont}`}>
          <img
            className={styles.img}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg"
            alt="Image 1"
          />
          <img
            className={styles.img}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.5.svg"
            alt="Image 2"
          />
          <img
            className={`${styles.img} ${styles.imgLast}`}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg"
            alt="Image 3"
          />
        </div>
        <div className={`${styles.responsiveContainerBlock} ${styles.imgCont}`}>
          <img
            className={`${styles.img} ${styles.imgBig}`}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg"
            alt="Image 4"
          />
          <img
            className={`${styles.img} ${styles.imgBig} ${styles.imgLast}`}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg"
            alt="Image 5"
          />
        </div>
        <div className={`${styles.responsiveContainerBlock} ${styles.imgCont}`}>
          <img
            className={styles.img}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg"
            alt="Image 6"
          />
          <img
            className={styles.img}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg"
            alt="Image 7"
          />
          <img
            className={styles.img}
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg"
            alt="Image 8"
          />
        </div>
      </div>
    </div>
  );
};

export default Album;
