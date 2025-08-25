"use client";

import { useState } from "react";
import Image from "next/image";

const certificates = [
  { id: 1, title: "ISO 9001 Certification", image: "/cert1.jpg" },
  { id: 2, title: "Medical Equipment License", image: "/cert2.jpg" },
  { id: 3, title: "Hospital Supplier Authorization", image: "/cert3.jpg" },
  { id: 4, title: "Safety Compliance Certificate", image: "/cert4.jpg" },
];

export default function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Our Certifications
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        We are a trusted provider of medical equipment and services, backed by
        industry-standard certifications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white p-4 shadow-lg rounded-lg">
            <Image
              src={cert.image}
              alt={cert.title}
              width={300}
              height={200}
              className="cursor-pointer rounded-lg hover:scale-105 transition"
              onClick={() => setSelectedCert(cert.image)}
            />
            <h3 className="mt-2 text-center font-medium">{cert.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <Image
              src={selectedCert}
              alt="Certificate"
              width={500}
              height={350}
              className="rounded"
            />
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              onClick={() => setSelectedCert(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
