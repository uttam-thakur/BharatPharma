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
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Heartbeat Line */}
            <motion.svg
              width="220"
              height="40"
              viewBox="0 0 220 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-600 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
            >
              <motion.path
                d="M0 25 H30 L40 5 L50 45 L60 25 H80 L90 -5 L100 55 L110 25 H220"
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
