// src/pages/index.tsx
import Head from "next/head";
import AboutSection from "../app/components/AboutSection";
import StatsSection from "../app/components/StatsSection";
const Home = () => {
  return (
    <>
      <Head>
        <title>Bharat Pharma | Medical Equipment & Oxygen</title>
        <meta
          name="description"
          content="Medical Oxygen Gas, Concentrators, Hospital Furniture & More - Rental & Ownership | Bharat Pharma"
        />
      </Head>
      <main style={{ backgroundColor: "red" }}>
        {/* Hero section can be added here */}
        <AboutSection />
        <StatsSection />
        {/* Footer and more sections */}
      </main>
    </>
  );
};

export default Home;
