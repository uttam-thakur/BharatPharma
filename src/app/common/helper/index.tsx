import { CommonRegex } from "../regexes";

export const contactOnWhatsapp = (phoneNumber: any, message: any) => {
  if (phoneNumber && /^\+?\d+$/.test(phoneNumber)) {
    const userAgent = navigator.userAgent;

    if (CommonRegex.mobileDeviceReg.test(userAgent)) {
      window.open(
        `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    }
  }
};
