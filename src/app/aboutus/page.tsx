// pages/about.tsx
import Image from "next/image";
import styles from "../aboutus/About.module.css";
import Album from "../pages/Album";
import VisionMission from "../components/VisionMission";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <Image
            src="/images/feedback/5.png"
            alt="Binod Kumar Rajak"
            width={400}
            height={400}
            className={styles.image}
          />
          <div className={styles.mission}>
            <p>
              At Bharat Pharma, our vision is to be the foremost provider of
              premium precast concrete solutions, setting the benchmark for
              quality and reliability across India's infrastructure landscape.
              With over three decades of expertise, we are committed to
              delivering excellence through our advanced manufacturing processes
              and rigorous quality standards. As a registered S.S.I. Unit with
              the Government of West Bengal, and a trusted supplier to industry
              leaders like SAIL - IISCO, DVC, L&T, and various Municipal
              Corporations, we play a vital role in significant projects like
              the National Highway-2, Andal Airport, and DVC RTPP Raghunathpur.
              Our dedication to innovation, combined with a skilled team and
              modern technology, allows us to support both government
              initiatives and private enterprises, delivering solutions that
              drive sustainable growth and national development.
            </p>
            <p className={styles.name}>Binod Kumar Rajak</p>
            <p className={styles.role}>Founder & CEO - Bharat Pharma</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            {" "}
            Binod Kumar Rajak, the visionary Founder and CEO of Bharat Pharma,
            has been instrumental in transforming the landscape of precast
            concrete and paver block manufacturing in India. Under his
            leadership, Deal Magsil has grown from a local supplier into a
            trusted name across major infrastructure projects, recognized for
            its commitment to quality, reliability, and technological
            advancement. Driven by a dedication to excellence, Abrha has
            positioned Bharat Pharma as a key player in the industry, serving
            both government and private sectors with distinction.{" "}
          </p>{" "}
          <p>
            {" "}
            With a background rich in engineering and project management, Abrha
            Dey has successfully spearheaded Bharat Pharma's involvement in
            prestigious projects, including the National Highway-2
            Panagarh-Barwa Adda stretch, Andal Airport, and DVC RTPP
            Raghunathpur. His approach emphasizes meticulous planning and
            operational efficiency, ensuring that each project meets the highest
            standards and contributes to the nation's infrastructure
            development.{" "}
          </p>{" "}
          <p>
            {" "}
            Abrha's leadership extends beyond operations to strategic
            partnerships. Under his guidance, Bharat Pharma has forged alliances
            with industry giants like SAIL - IISCO, DVC, and L&T, solidifying
            its reputation as a reliable partner for large-scale projects. His
            commitment to fostering strong relationships with clients and
            stakeholders has been pivotal to the company's success and growth.{" "}
          </p>{" "}
          <p>
            {" "}
            Through his unwavering dedication to innovation and quality, Abrha
            Dey continues to drive Bharat Pharma forward, ensuring that the
            company remains at the forefront of the precast and paving industry.
            His forward-thinking vision and relentless pursuit of excellence
            reflect his commitment to shaping a sustainable, high-quality future
            for infrastructure in India.{" "}
          </p>
        </div>
      </div>
      <VisionMission />
      <Album />
    </>
  );
};

export default About;
