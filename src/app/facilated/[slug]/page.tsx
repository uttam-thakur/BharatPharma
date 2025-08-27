"use client";
import { notFound } from "next/navigation";
import { useState } from "react";
import { use } from "react";
import { contactOnWhatsapp } from "../../common/helper";
import { whatsappNumber } from "../../common/constant";

const services = {
  a: {
    title: "Medical Oxygen & Gas Solutions",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },

  b: {
    title: "Hospital Furniture",
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
    title: "Medical Equipments",
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

 d: {
    title: "Orthopaedic Implants",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },


   e: {
    title: "General Surgical Instruments",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },

   f: {
    title: "Medical Disposables",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },


   g: {
    title: "Diagnostic Equipments",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },


   h: {
    title: "Anaesthesia Product",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },


   i: {
    title: "Height & Weight Scales",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },


   j: {
    title: " Laboratory Products",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
    ],
  },


   k: {
    title: " Emergency Products",
    description:
      "We specialize in supplying high-quality medical gases and cylinders for healthcare facilities, ensuring optimal patient care and safety. Our product line includes various types of oxygen cylinders and medical gases suitable for hospitals, clinics, and homecare services.",
    features: [
      "Medical Oxygen Cylinder Rentals & Sales",
      "Nitrous Oxide & Carbon Dioxide Cylinders",
      "Portable Oxygen Concentrators",
      "Regulators & Flowmeters",
      "24/7 Emergency Gas Supply Support",
    ],
    images: [
      {
        src: "/images/a/1.jpg",
        label: "Small Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 10 Liters (1.5 m³)",
          "Material: Seamless Steel",
          "Pressure: 150 Bar",
          "Usage: Homecare / Ambulance",
          "Certification: BIS/ISO Approved",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Large Medical Oxygen Cylinder",
        specifications: [
          "Capacity: 46.7 Liters (7 m³)",
          "Material: Seamless Steel",
          "Pressure: 150-200 Bar",
          "Usage: Hospital / ICU / Industrial Use",
          "Certification: PESO & ISO Certified",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Portable Oxygen Cylinder Kit",
        specifications: [
          "Capacity: 2.5 Liters (Portable)",
          "Includes: Cylinder, Regulator & Mask",
          "Usage: Emergency / Travel",
          "Weight: Approx. 5 Kg",
          "Certification: BIS Compliant",
        ],
      },
      {
        src: "/images/a/2.jpg",
        label: "Nitrous Oxide Cylinder",
        specifications: [
          "Capacity: 10 kg / 30 kg",
          "Material: Steel Alloy",
          "Usage: Anesthesia, Surgical Procedures",
          "Pressure: 150 Bar",
          "Color Code: Blue Body, Black Neck",
        ],
      },
      {
        src: "/images/a/3.jpg",
        label: "Carbon Dioxide (CO2) Cylinder",
        specifications: [
          "Capacity: 6.8 kg / 22 kg",
          "Usage: Respiratory Therapy, Cryotherapy",
          "Material: Carbon Steel",
          "Pressure: 150-200 Bar",
          "Color Code: Grey Body",
        ],
      },
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
    <div className="pt-50  md:pt-35  pb-10 max-w-5xl mx-auto px-4">
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
              <p className="text-xs underline mt-1">More....</p>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={modalData.src}
              alt={modalData.label}
              className="w-full rounded-md mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-bold mb-3">{modalData.label}</h2>

            {/* Specs */}
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 mb-4">
              {modalData.specifications.map((spec: string, i: number) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>

            {/* WhatsApp Button */}
            <button
              onClick={() => {
                const specsText = modalData.specifications.join("\n- ");
                const message = `Hi, I'm interested in: *${modalData.label}*\n\nSpecifications:\n- ${specsText}`;
                contactOnWhatsapp(whatsappNumber, message);
              }}
              className="bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition w-full"
            >
              Buy / Rent Now on WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
