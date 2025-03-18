"use client";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { sendEmail } from "../services/services";
import styles from "./styles/GetInTouch.module.css";

export default function GetInTouchForm() {
  const formRef = useRef(null);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateFormInputs = () => {
    const { name, email, message } = formValues;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length <= 3 || !nameRegex.test(name)) {
      toast.error(
        "Name must be more than 3 characters and contain only letters!"
      );
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (message.trim() === "") {
      toast.error("Message field cannot be empty!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateFormInputs()) return;

    try {
      await sendEmail(formRef.current);
      setFormValues({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.getInTouch}>
      <div className={styles.gridContainer}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.info}>
            <h1 className={styles.title}>Get in Touch with Us</h1>
            <div className={styles.infoWindow}>
              <h2 className={styles.subTitle}>
                Quick answers and reliable support are just a message away.
              </h2>
              <p className={styles.description}>
                We believe that good communication builds strong partnerships.
                Whether you have a quick question, require detailed information,
                or need help resolving a challenge, we’re just a click or call
                away. Our dedicated team ensures that every query is met with
                promptness and expertise, helping you achieve the results you
                need.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.formBox}
          >
            <h2 className={styles.formTitle}>Contact Us</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.inputField}
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputField}
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className={styles.inputField}
              value={formValues.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
