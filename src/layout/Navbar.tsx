import {
    Home,
    Layers,
    Briefcase,
    FileText,
    MessageSquare,
} from "lucide-react";
import type { ReactNode } from "react";

type NavItem = {
    icon: ReactNode;
    label: string;
    action: () => void;
};

type NavbarProps = {
    isDark: boolean;
    onNavigate?: (page: "home" | "resume") => void;
    currentPage?: "home" | "resume";
};

export default function Navbar({ isDark, onNavigate, currentPage = "home" }: NavbarProps) {
    const scrollToSection = (sectionId: string) => {
        if (currentPage !== "home" && onNavigate) {
            onNavigate("home");
            // Wait for the home page to load, then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const scrollToTop = () => {
        if (currentPage !== "home" && onNavigate) {
            onNavigate("home");
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const NAV_ITEMS: NavItem[] = [
        {
            icon: <Home size={20} />,
            label: "Home",
            action: scrollToTop
        },
        {
            icon: <Layers size={20} />,
            label: "Projects",
            action: () => scrollToSection("projects")
        },
        {
            icon: <Briefcase size={20} />,
            label: "Work",
            action: () => scrollToSection("experience")
        },
        {
            icon: <FileText size={20} />,
            label: "Resume",
            action: () => onNavigate?.("resume")
        },
        {
            icon: <MessageSquare size={20} />,
            label: "Blogs",
            action: () => window.open("https://medium.com/@amansinha327", "_blank")
        },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 h-full w-20 flex flex-col items-center justify-center z-40 transition-colors duration-500 ${isDark ? "bg-[#0A0A0A]" : "bg-white"
                }`}
        >
            <div className="flex flex-col gap-[4.5rem]">
                {NAV_ITEMS.map((item, i) => (
                    <button
                        key={i}
                        onClick={item.action}
                        className={`group relative transition-colors ${i === 0 && currentPage === "home"
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
