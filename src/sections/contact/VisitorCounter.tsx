import { useEffect, useState } from "react";

function getOrdinalSuffix(n: number): string {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

export default function VisitorCounter() {
    const [visitorNumber, setVisitorNumber] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Using CountAPI to track visitors
        // Namespace: aman-portfolio, Key: visitors
        fetch("https://api.countapi.xyz/hit/aman-portfolio-siphonite/visitors")
            .then((res) => res.json())
            .then((data) => {
                if (data && typeof data.value === "number") {
                    setVisitorNumber(data.value);
                }
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="text-center pt-6 pb-2">
                <p className="text-zinc-500 text-sm tracking-wide">
                    Loading visitor count...
                </p>
            </div>
        );
    }

    if (visitorNumber === null) {
        return null; // Hide counter if failed to load
    }

    return (
        <div className="text-center pt-6 pb-2">
            <p className="text-zinc-400 text-sm tracking-wide">
                You are the{" "}
                <span className="text-cyan-400 font-semibold">
                    {visitorNumber.toLocaleString()}
                    {getOrdinalSuffix(visitorNumber)}
                </span>{" "}
                visitor
            </p>
        </div>
    );
}

