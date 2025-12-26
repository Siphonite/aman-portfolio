import { useState } from "react";
import { Play } from "lucide-react";
import Modal from "../../components/Modal";

export default function VideoCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="relative aspect-video w-full max-w-md rounded-2xl overflow-hidden cursor-pointer group border border-zinc-800 bg-zinc-900"
            >
                <img
                    src="https://picsum.photos/seed/aman/800/450"
                    alt="Introduction"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play fill="white" className="text-white ml-1" />
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="w-full h-full flex items-center justify-center text-zinc-500 mono">
                    <img
                        src="https://picsum.photos/seed/aman-video/1920/1080"
                        alt="Full Video"
                        className="w-full h-full object-cover"
                    />
                </div>
            </Modal>
        </>
    );
}
