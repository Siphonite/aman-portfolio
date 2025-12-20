import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../../types";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <div
            className={`group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all ${project.featured ? "md:col-span-2" : ""}`}
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                    <div className="flex gap-3 flex-wrap">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="text-[10px] mono uppercase px-2 py-1 rounded bg-zinc-800 text-zinc-400"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                            <Github
                                size={20}
                                className="text-zinc-500 hover:text-white cursor-pointer"
                            />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <ExternalLink
                                size={20}
                                className="text-zinc-500 hover:text-white cursor-pointer"
                            />
                        </a>
                    )}
                </div>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-8">
                {project.description}
            </p>
            {project.featured && (
                <div className="aspect-video w-full rounded-2xl bg-zinc-800/50 border border-zinc-700 overflow-hidden relative">
                    <img
                        src="https://picsum.photos/seed/crypto/1200/600"
                        alt="Project preview"
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-6 py-3 bg-white text-black rounded-full font-bold flex items-center gap-2">
                            View Project <ExternalLink size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
