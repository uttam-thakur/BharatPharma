"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contactOnWhatsapp } from "../../common/helper";
import { useScrolling } from "../../common/hooks/useScrolling";
import { whatsAppContactMsg, whatsappNumber } from "../../common/constant";
import "./style.css";

const FABWhatsApp = () => {
  const scrolling = useScrolling({ fallbackTime: 750 });

  const contactCakeHeaven = () => {
    contactOnWhatsapp(whatsappNumber, whatsAppContactMsg);
  };

  return (
    <button
      onClick={contactCakeHeaven}
      className={`fab-whatsapp ${!scrolling ? "visible" : "hidden"}`}
    >
      <FaWhatsapp className="fab-whatsapp-icon" />
    </button>
  );
};

export default FABWhatsApp;
