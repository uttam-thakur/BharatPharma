"use client";

import { useState } from "react";
import Image from "next/image";

const certificates = [
  { id: 1, title: "ISO 9001 Certification", image: "/logo1.png" },
  { id: 2, title: "Medical Equipment License", image: "/logo2.png" },
  { id: 3, title: "Hospital Supplier Authorization", image: "/logo3.png" },
  { id: 4, title: "Safety Compliance Certificate", image: "/logo4.png" },
];

export default function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className=" bg-gray-100 flex flex-col items-center p-8 ">
      <h1 className="text-3xl font-semibold text-gray-900mb-6 ">
        Our Certifications
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-8 text-xl sm:text-xl">
        We are a trusted provider of medical equipment and services, backed by
        industry-standard certifications.
      </p>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {certificates.map((cert) => (
    <div
      key={cert.id}
      className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center"
    >
      {/* Fixed image wrapper */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={cert.image}
          alt={cert.title}
          width={300}
          height={200}
          className="object-cover w-full h-full cursor-pointer hover:scale-105 transition"
          onClick={() => setSelectedCert(cert.image)}
        />
      </div>

      {/* Title always below image */}
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
