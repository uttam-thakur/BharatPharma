"use client";

import React, { useState } from "react";
import FAQ from "../components/FAQ";
import ContactModal from "../components/ContactModal";
import GetInTouchForm from "../components/GetInTouchForm";

import { infoData, contactData } from "../common/constant";

import styles from "./contact.module.css";
import { handleLocationClick } from "../components/fabComponents/FABLocation";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.title}>{infoData.title}</div>
          <div className={styles.infoWindow}>
            <div className={styles.subTitle}>{infoData.subTitle}</div>
            <div className={styles.description}>{infoData.description}</div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1>Contact our friendly team</h1>
          <p>Let us know how we can help.</p>
        </div>

        <div className={styles.grid}>
          {contactData.map((contact, index) => (
            <div key={index} className={styles.card}>
              <h2>{contact.title}</h2>
              <p>{contact.description}</p>
              {contact.isButton ? (
                <button className={styles.button} onClick={handleLocationClick}>
                  {contact.contactInfo}
                </button>
              ) : (
                <p className={styles.email}>{contact.contactInfo}</p>
              )}
            </div>
          ))}
        </div>

        <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <GetInTouchForm />
      <FAQ />
    </>
  );
}
