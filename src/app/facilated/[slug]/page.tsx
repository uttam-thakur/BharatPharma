"use client";
import { notFound } from "next/navigation";
import { useState } from "react";
import { use } from "react";
import { contactOnWhatsapp } from "../../common/helper";
import { whatsAppContactMsg, whatsappNumber } from "../../common/constant";

const services = {
  a: {
    title: "Service A",
    description:
      "Welcome to Service A! We provide top-notch medical equipment rental and sales.",
    features: [
      "Oxygen Concentrator Rentals",
      "Hospital Beds & Furniture",
      "Medical Oxygen Cylinders",
      "24/7 Equipment Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Fragment - Locking",
        specifications: [
          "Material: Titanium",
          "Size: 5mm x 100mm",
          "Usage: Orthopedic Surgery",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Small Fragment - Standard",
        specifications: [
          "Material: Stainless Steel",
          "Size: 4mm x 80mm",
          "Usage: Fracture Fixation",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Large Fragment - Locking",
        specifications: [
          "Material: Stainless Steel",
          "Size: 4mm x 80mm",
          "Usage: Fracture Fixation",
        ],
      },
    ],
  },
  b: {
    title: "Service B",
    description:
      "Service B focuses on advanced hospital furniture and patient mobility solutions.",
    features: [
      "Electric ICU Beds",
      "Wheelchairs & Walkers",
      "Patient Lifting Devices",
      "Custom Medical Furniture",
    ],
    images: ["/images/b/1.jpg", "/images/b/2.jpg", "/images/b/3.jpg"],
  },
  c: {
    title: "Service C",
    description:
      "Service C specializes in diagnostic and surgical medical equipment distribution.",
    features: [
      "Ultrasound Machines",
      "Surgical Tools",
      "Diagnostic Devices",
      "Maintenance & Calibration",
    ],
    images: [
      "/images/service-a-1.jpg",
      "/images/service-a-2.jpg",
      "/images/service-a-3.jpg",
    ],
  },
};

type Params = {
  params: { slug: string };
};

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Correct unwrap of params using use()
  const { slug } = use(params);

  const service = services[slug as keyof typeof services];
  const [modalData, setModalData] = useState<any>(null);

  if (!service) return notFound();

  return (
    <div className="pt-20 pb-10 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        {service.title}
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {service.images.map((img: any, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow cursor-pointer"
            onClick={() => setModalData(img)}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
              <h3 className="text-sm font-semibold">{img.label}</h3>
              <p className="text-xs underline mt-1">More...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-md h-[50vh] w-full p-6 relative">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✕
            </button>
            <img
              src={modalData.src}
              alt={modalData.label}
              className="w-full rounded-md mb-4 "
            />
            <h2 className="text-lg font-bold mb-2">{modalData.label}</h2>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              {modalData.specifications.map((spec: string, i: number) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            {/* WhatsApp Button */}
            <button
              onClick={() => {
                const specsText = modalData.specifications.join("\n- ");
                const message = `Hi, I'm interested in: *${modalData.label}*\n\nSpecifications:\n- ${specsText}`;
                contactOnWhatsapp(whatsappNumber, message); // use your number here
              }}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              Buy Now on WhatsApp
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}
