import { Moon, Sun } from "lucide-react";

type Props = {
    isDark: boolean;
    setIsDark: (v: boolean) => void;
};

export default function ThemeToggle({ isDark, setIsDark }: Props) {
    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="fixed top-8 right-8 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all z-50"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
