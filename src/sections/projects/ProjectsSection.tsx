import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function ProjectsSection() {
    return (
        <section className="py-32">
            <SectionHeader title="Featured Projects" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
