import { notFound } from "next/navigation";

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
  },
};

type Params = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: Params) {
  const service = services[params.slug as keyof typeof services];

  if (!service) return notFound();

  return (
    <div className="pt-20 pb-10 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        {service.title}
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        {service.description}
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {service.features.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
