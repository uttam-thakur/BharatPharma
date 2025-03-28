"use client";

// src/components/AboutSection.tsx
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Home from "./Home";

const AboutSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Home />

      <section className="bg-blue-100 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-20">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/about.jfif"
              alt="About Bharat Pharma"
              width={250}
              height={250}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              About <span className="text-blue-600">Bharat Pharma</span>
            </h2>
            <h3 className="text-xl text-blue-700 font-semibold mb-2">
              Helping Healthcare Heroes
            </h3>
            <p className="text-gray-700 mb-6">
              Our mission is to promote the healing process by providing smart
              solutions for our healthcare partners and the patients they serve.
              We offer rental & ownership of medical oxygen, concentrators,
              hospital furniture, and more.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
