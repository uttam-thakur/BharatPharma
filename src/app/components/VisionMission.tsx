"use client";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Vision */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the leading provider of medical equipment and services,
            empowering healthcare facilities to deliver top-notch patient care
            globally.
          </p>
          <div className="h-1 w-20 bg-red-600 rounded"></div>
        </motion.div>
        {/* Mission */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide innovative, reliable, and cost-effective healthcare
            solutions that improve patient outcomes and support medical
            professionals with exceptional products and services.
          </p>
          <div className="h-1 w-20 bg-red-600 rounded"></div>
        </motion.div>
      </div>
    </section>
  );
}
