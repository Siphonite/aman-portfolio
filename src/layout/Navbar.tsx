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

export default function Navbar() {
    return (
        <nav className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-12 border-r border-zinc-800 bg-[#0A0A0A] z-40">
            <div className="text-xl font-bold mb-12 mono text-white">AK</div>
            <div className="flex flex-col gap-10">
                {NAV_ITEMS.map((item, i) => (
                    <button
                        key={i}
                        className={`group relative text-zinc-500 hover:text-white transition-colors ${item.active ? "text-white" : ""
                            }`}
                    >
                        {item.icon}
                        <span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity mono text-xs uppercase tracking-widest whitespace-nowrap bg-zinc-900 px-2 py-1 rounded">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
