import Layout from "./layout/layout";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";
import Hero from "./sections/hero/Hero";

function App() {
  const { toggleTheme } = useTheme();

  return (
    <Layout>
      <ThemeToggle toggleTheme={toggleTheme} />
      <Hero />
    </Layout>
  );
}

export default App;
