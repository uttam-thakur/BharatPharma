import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const sendEmail = async (form: any) => {
  try {
    const res = await emailjs.sendForm(
      "service_mvq43kf",
      "template_25ybnov",
      form,
      "Nw7AxfQ-a0XQdVmy0"
    );
    toast.success("Your Message sent successfully!");
    return res;
  } catch (err) {
    console.error(err);
    toast.error("Failed to send email. Please try again.");
    throw err;
  }
};
