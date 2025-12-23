import {
    Home,
    Layers,
    Briefcase,
    FileText,
    MessageSquare,
} from "lucide-react";

const NAV_ITEMS = [
    { icon: <Home size={20} />, label: "Home", active: true },
    { icon: <Layers size={20} />, label: "Projects", active: false },
    { icon: <Briefcase size={20} />, label: "Work", active: false },
    { icon: <FileText size={20} />, label: "Resume", active: false },
    { icon: <MessageSquare size={20} />, label: "Blogs", active: false },
];

type NavbarProps = {
    isDark: boolean;
};

export default function Navbar({ isDark }: NavbarProps) {
    return (
        <nav
            className={`fixed top-0 h-full w-20 flex flex-col items-center justify-center z-40 transition-colors duration-500 ${isDark ? "bg-[#0A0A0A]" : "bg-white"
                }`}
            style={{ left: 'max(0px, calc((100vw - 80rem) / 2 - 1rem))' }}
        >
            <div className="flex flex-col gap-[4.5rem]">
                {NAV_ITEMS.map((item, i) => (
                    <button
                        key={i}
                        className={`group relative transition-colors ${item.active
                            ? (isDark ? "text-white" : "text-black")
                            : (isDark ? "text-zinc-500 hover:text-white" : "text-zinc-400 hover:text-black")
                            }`}
                    >
                        {item.icon}
                        <span className={`absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity mono text-xs uppercase tracking-widest whitespace-nowrap px-2 py-1 rounded ${isDark ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"
                            }`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
