// src/pages/index.tsx
import AboutSection from "../app/components/AboutSection";
import StatsSection from "../app/components/StatsSection";
const Home = () => {
  if (typeof window !== "undefined") {
    // Animation code here
    <div>hi there is some issue</div>;
  }
  return (
    <>
      <main style={{ backgroundColor: "red" }}>
        <AboutSection />
        <StatsSection />
      </main>
    </>
  );
};

export default Home;
