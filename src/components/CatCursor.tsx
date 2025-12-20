import { useCursor } from "../hooks/useCursor";

export default function CatCursor() {
    const { x, y, isPointer } = useCursor();

    return (
        <div
            className="cat-cursor pointer-events-none fixed z-[9999]"
            style={{
                left: x,
                top: y,
                transform: `translate(-50%, -50%) scale(${isPointer ? 1.2 : 1})`,
            }}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white drop-shadow-lg"
            >
                <path d="M12 2C10.34 2 9 3.34 9 5c0 .73.26 1.39.7 1.9C7.03 8.08 5 10.79 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.21-2.03-5.92-4.7-7.1.44-.51.7-1.17.7-1.9 0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15c-2.76 0-5-2.24-5-5 0-2.42 1.72-4.44 4-4.9v1.4c-1.42.43-2.5 1.74-2.5 3.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.76-1.08-3.07-2.5-3.5v-1.4c2.28.46 4 2.48 4 4.9 0 2.76-2.24 5-5 5z" />
            </svg>
        </div>
    );
}
