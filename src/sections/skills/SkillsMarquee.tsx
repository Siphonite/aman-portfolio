import { SKILLS } from "../../data/skills";

function SkillItem({ name, variant = "primary" }: { name: string; variant?: "primary" | "secondary" }) {
    const baseClasses = "text-4xl md:text-6xl font-bold mx-12 transition-colors cursor-default mono uppercase tracking-tighter";
    const variantClasses = variant === "primary"
        ? "text-zinc-800 hover:text-zinc-400"
        : "text-zinc-900 hover:text-zinc-600";

    return (
        <span className={`${baseClasses} ${variantClasses}`}>
            {name}
        </span>
    );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
    const variant = reverse ? "secondary" : "primary";

    return (
        <div
            className={`flex whitespace-nowrap ${reverse ? "animate-scroll-reverse" : "animate-scroll mb-8"}`}
        >
            {[...SKILLS, ...SKILLS].map((skill, i) => (
                <SkillItem key={i} name={skill} variant={variant} />
            ))}
        </div>
    );
}

export default function SkillsMarquee() {
    return (
        <section className="py-24 -mx-20 overflow-hidden border-y border-zinc-900/50">
            <MarqueeRow />
            <MarqueeRow reverse />
        </section>
    );
}
