// import React, { useState } from "react";
// import { BsQuestionSquare } from "react-icons/bs";
// import styles from "./styles/FAQ.module.css";
// import { faqData } from "../common/constant";
// import PortalModal from "./common-components/Modal";

// const FAQ: React.FC = () => {
//   const [faqOpen, setFaqOpen] = useState(false);
//   const [SelectedData, setSelectedData] = useState({
//     question: "",
//     answer: "",
//   });

//   return (
//     <div className={styles.faq}>
//       <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
//       <div className={styles.faqSection}>
//         {faqData.map((faq, index) => (
//           <div
//             key={index}
//             className={styles.faqCard}
//             onClick={() => {
//               setSelectedData(faq);
//               setFaqOpen(true);
//             }}
//           >
//             <BsQuestionSquare className={styles.faqCardIcon} />
//             <div className={styles.faqCardSummary}>{faq.question}</div>
//           </div>
//         ))}
//       </div>
//       <PortalModal
//         open={faqOpen}
//         onBackdropClick={() => {
//           setFaqOpen(false);
//         }}
//       >
//         <div className={styles.faqModal}>
//           <button
//             onClick={() => {
//               setFaqOpen(false);
//             }}
//             className={styles.close}
//           >
//             X
//           </button>

//           <div className={styles.questionSection}>
//             <BsQuestionSquare className={styles.faqCardIcon} />
//             <h1 className={styles.faqModalQuestion}>
//               {SelectedData?.question}
//             </h1>
//           </div>
//           <h1 className={styles.faqModalAnswer}>{SelectedData?.answer}</h1>
//         </div>
//       </PortalModal>
//     </div>
//   );
// };

// export default FAQ;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../common/constant";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-5 bg-gray-50 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="ml-4 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 bg-white text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
