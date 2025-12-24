import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
    children: ReactNode;
    isDark: boolean;
};

export default function Layout({ children, isDark }: Props) {
    return (
        <div
            className={`min-h-screen ${isDark ? "bg-[#0A0A0A] text-white" : "bg-white text-black"} transition-colors duration-500`}
        >
            <Navbar isDark={isDark} />
            <main className="max-w-[1400px] mx-auto pl-24 pr-12 md:pl-24 md:pr-20 lg:pl-28 lg:pr-24 py-24">
                {children}
            </main>
            <Footer />
        </div>
    );
}
