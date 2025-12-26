import type { ReactNode } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={onClose}
            />
            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl animate-in zoom-in-95 duration-300 border border-zinc-800">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white z-10 hover:bg-black"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
