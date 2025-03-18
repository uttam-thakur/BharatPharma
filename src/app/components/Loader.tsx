// // components/Loader.tsx
// "use client";

// import { motion, AnimatePresence } from "framer-motion";

// interface LoaderProps {
//   loading: boolean;
// }

// export default function Loader({ loading }: LoaderProps) {
//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20"
//         >
//           <motion.div
//             className="w-16 h-16 border-4 border-white border-t-indigo-600 rounded-full animate-spin"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0 }}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";

// interface LoaderProps {
//   loading: boolean;
// }

// export default function Loader({ loading }: LoaderProps) {
//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
//         >
//           <motion.svg
//             width="200"
//             height="100"
//             viewBox="0 0 200 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-indigo-600"
//           >
//             <motion.path
//               d="M0 50 H30 L40 30 L50 70 L60 50 H80 L90 20 L100 80 L110 50 H200"
//               stroke="currentColor"
//               strokeWidth="3"
//               fill="transparent"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{
//                 duration: 1.5,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//             />
//           </motion.svg>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Heartbeat Line */}
            <motion.svg
              width="220"
              height="100"
              viewBox="0 0 220 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-600 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
            >
              <motion.path
                d="M0 50 H30 L40 30 L50 70 L60 50 H80 L90 20 L100 80 L110 50 H220"
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </motion.svg>

            {/* Loading Text */}
            <motion.div
              suppressHydrationWarning
              className="text-white text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
