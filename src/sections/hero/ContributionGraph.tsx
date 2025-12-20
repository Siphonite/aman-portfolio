const WEEKS = 50;
const DAYS = 7;

// Generate consistent "random" intensity based on position
function getIntensity(week: number, day: number): number {
    // Simple deterministic hash for consistent rendering
    const hash = (week * 7 + day) * 9301 + 49297;
    return (hash % 233) / 233;
}

function getColor(intensity: number): string {
    if (intensity > 0.8) return "#22d3ee";
    if (intensity > 0.5) return "#164e63";
    if (intensity > 0.2) return "#083344";
    return "#18181b";
}

export default function ContributionGraph() {
    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
                <span className="mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Pulse / Consistency
                </span>
            </div>
            <div className="flex gap-1 overflow-hidden">
                {Array.from({ length: WEEKS }).map((_, week) => (
                    <div key={week} className="flex flex-col gap-1">
                        {Array.from({ length: DAYS }).map((_, day) => {
                            const intensity = getIntensity(week, day);
                            return (
                                <div
                                    key={day}
                                    className="w-3 h-3 rounded-[2px]"
                                    style={{ backgroundColor: getColor(intensity) }}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
