import {
  dealMagsilLogo,
  phoneNumber,
  whatsappNumber,
} from "@/app/common/constant";
import styles from "./Styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  // const Footer = ({ year }: { year: number }) => {
  return (
    <>
      <div className={styles.relative}>
        <footer className={styles.footer}>
          <div className={`${styles.footerBorder}`}>
            <div className={`${styles.logoContainer}`}>
              <img
                src="/logo4.png"
                alt="Bharat Pharma Logo"
                className={styles.logo}
              />
              <span className={styles.logoText}>Bharat Pharma</span>
            </div>
            {/* Follow Us Section */}
            <div className={styles.followSection}>
              <h3 className={styles.followText}>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram.png"
                    alt="instagram"
                    className={styles.iconInsta}
                    style={{ height: "40px", width: "40px" }}
                  />
                  {/* <FaInstagram /> */}
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/facebook.png"
                    alt="facebook"
                    className={styles.iconFacebook}
                    style={{ height: "40px", width: "40px" }}
                  />
                  {/* <FaFacebook /> */}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Company Section */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Company</h3>
                <p className={styles.sectionText}>
                  <Link href="/aboutus" className={styles.aboutLink}>
                    About Us
                  </Link>{" "}
                </p>
              </div>
              {/* Contact Section */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Contact Us</h3>
                <p className={styles.sectionText}>
                  {"Email: "}
                  <a
                    href="uttamthakur2016@gmail.com"
                    className={styles.underline}
                  >
                    bharatpharma124@gmail.com
                  </a>
                </p>
                <p className={styles.sectionText}>
                  {"Phone: "}
                  <a
                    href={`tel:+91${phoneNumber}`}
                    className={styles.underline}
                  >
                    {`+91${phoneNumber}`}
                  </a>
                </p>
                <p className={styles.sectionText}>
                  {"WhatsApp: "}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    className={styles.underline}
                  >
                    {whatsappNumber}
                  </a>
                </p>
              </div>

              {/* Address Section */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Our Address</h3>
                <p className={styles.sectionText}>Bharat Pharma</p>
                <p className={styles.sectionText}>
                  Premiur Nursing Home, Gopalpur
                </p>
                <p className={styles.sectionText}>Asansol, 713304</p>
              </div>

              {/* Additional Section */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Additional Info</h3>
                <p className={styles.sectionText}>
                  Opening Hours: Everyday, 10 AM - 10 PM
                </p>
                <p className={styles.sectionText}>
                  Visit us for quality products!
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
     <div className={styles.footerEnd}>
  <p className={styles.footerTextEnd}>
    <span style={{ fontWeight: "700" }}>
      &copy; {new Date().getFullYear()} Bharat Pharma.
    </span>{" "}
    All rights reserved. | Designed & Developed by{" "}
    <a
      href="https://www.bhookhadtech.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#0ea5e9", fontWeight: "600", textDecoration: "none" }}
    >
      Bhookhad Tech
    </a>
  </p>
</div>

    </>
  );
};

export default Footer;
