// pages/about.tsx
import Image from "next/image";
import styles from "../aboutus/About.module.css";
import Album from "../components/Album";
import VisionMission from "../components/VisionMission";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <Image
            src="/images/feedback/CEO.png"
            alt="Binod Kumar Rajak"
            width={400}
            height={100}
            className={styles.image}
          />
          {/* description */}
          <div className={styles.mission}>
            <p>
         At Bharat Pharma, our vision is to be the leading provider of premium medical equipment solutions, setting the benchmark for quality, reliability, and innovation in India’s healthcare sector. With decades of expertise, we are committed to delivering excellence through advanced technology, trusted global brands, and rigorous quality standards. As a registered S.S.I. Unit with the Government of West Bengal, and a trusted partner to hospitals, clinics, and healthcare institutions, we play a vital role in critical projects such as supplying medical oxygen cylinders, concentrators, hospital furniture, and diagnostic equipment. Our dedication to innovation, combined with a skilled team and modern infrastructure, enables us to support both government healthcare initiatives and private enterprises, delivering solutions that improve patient care, ensure safety, and drive sustainable healthcare growth nationwide.
            </p>
            <p className={styles.name}>Binod Kumar Rajak</p>
            <p className={styles.role}>Founder & CEO - Bharat Pharma</p>
          </div>
        </div>
        <div className={styles.description}>
  <p>
    Binod Kumar Rajak, the visionary Founder and CEO of Bharat Pharma, has been
    instrumental in transforming the healthcare equipment sector in India. Under
    his leadership, Bharat Pharma has grown from a regional supplier into a
    trusted name across hospitals, clinics, and healthcare institutions,
    recognized for its commitment to quality, reliability, and patient-centric
    innovation. His dedication to excellence has positioned Bharat Pharma as a
    key player in delivering both sales and rental solutions for critical
    medical needs.
  </p>
  <p>
    With a strong background in healthcare services and business management,
    Binod Kumar Rajak has successfully spearheaded Bharat Pharma’s involvement
    in supplying essential medical equipment such as oxygen cylinders,
    concentrators, hospital furniture, and diagnostic tools. His approach
    emphasizes operational efficiency, customer satisfaction, and timely
    delivery—ensuring that healthcare providers can focus on patient care while
    relying on dependable equipment solutions.
  </p>
  <p>
    His leadership also extends to building strategic partnerships. Under his
    guidance, Bharat Pharma has established trusted collaborations with leading
    hospitals, government health initiatives, and private enterprises,
    solidifying its reputation as a reliable healthcare partner. His commitment
    to fostering long-term relationships with clients and stakeholders has been
    central to the company’s success and steady growth.
  </p>
  <p>
    Through his unwavering dedication to innovation and service excellence,
    Binod Kumar Rajak continues to drive Bharat Pharma forward, ensuring the
    company remains at the forefront of the medical equipment industry. His
    forward-thinking vision and relentless pursuit of quality reflect his
    commitment to shaping a healthier and sustainable future for India’s
    healthcare sector.
  </p>
</div>

      </div>
      <VisionMission />
      <Album />
    </>
  );
};

export default About;
