import { FileDown } from "lucide-react";

export default function ResumePage() {
    const handleDownload = () => {
        // Placeholder - will be replaced with actual resume download
        alert("Resume download will be available soon!");
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center px-8">
            <div className="text-center max-w-lg">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <FileDown size={40} className="text-white" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    My Resume
                </h1>

                <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                    Click the button below to download my resume and learn more about my professional experience.
                </p>

                <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 
                             text-white font-semibold rounded-lg text-lg
                             hover:from-cyan-400 hover:to-cyan-500 
                             transform hover:scale-[1.02] 
                             transition-all duration-200 
                             focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                >
                    <FileDown size={24} />
                    Download Resume
                </button>

                <div className="mt-12">
                    <a
                        href="/"
                        className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}
