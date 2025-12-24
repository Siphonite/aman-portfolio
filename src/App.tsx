import Layout from "./layout/layout";
import CatCursor from "./components/CatCursor";

import Hero from "./sections/hero/Hero";
import Technologies from "./sections/skills/Technologies";
import ContributionGraph from "./sections/hero/ContributionGraph";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ExperienceSection from "./sections/experience/ExperienceSection";
import ContactSection from "./sections/contact/ContactSection";

function App() {
  return (
    <Layout isDark={true}>
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
