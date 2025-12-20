import SectionHeader from "../../components/SectionHeader";
import { EXPERIENCES } from "../../data/experience";

export default function ExperienceSection() {
    return (
        <section className="py-32 border-t border-zinc-900">
            <SectionHeader title="Foundation" />

            <div className="space-y-12">
                {EXPERIENCES.map((exp) => (
                    <div
                        key={exp.id}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline group"
                    >
                        <div className="mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                            {exp.period}
                        </div>
                        <div className="md:col-span-1 font-bold text-xl">{exp.company}</div>
                        <div className="md:col-span-2">
                            <div className="text-zinc-400 font-medium mb-1">{exp.role}</div>
                            <div className="text-zinc-500 text-sm leading-relaxed">
                                {exp.impact}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
