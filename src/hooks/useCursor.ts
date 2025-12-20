import { useState, useEffect } from "react";

interface CursorState {
    x: number;
    y: number;
    isPointer: boolean;
}

export function useCursor(): CursorState {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === "pointer");
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return {
        x: position.x,
        y: position.y,
        isPointer,
    };
}
