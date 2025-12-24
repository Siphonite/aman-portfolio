import { useState } from "react";
import Layout from "./layout/layout";
import CatCursor from "./components/CatCursor";

import Hero from "./sections/hero/Hero";
import Technologies from "./sections/skills/Technologies";
import ContributionGraph from "./sections/hero/ContributionGraph";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ExperienceSection from "./sections/experience/ExperienceSection";
import ContactSection from "./sections/contact/ContactSection";
import ResumePage from "./pages/ResumePage";

type Page = "home" | "resume";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "resume") {
    return (
      <>
        <CatCursor />
        <ResumePage />
        <div className="fixed top-0 left-0 h-full w-20 flex flex-col items-center justify-center z-40 bg-[#0A0A0A]">
          <button
            onClick={() => handleNavigate("home")}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
        </div>
      </>
    );
  }

  return (
    <Layout isDark={true} onNavigate={handleNavigate} currentPage={currentPage}>
      <CatCursor />
      <Hero />
      <Technologies />
      <ContributionGraph />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
