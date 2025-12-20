import { useState } from "react";

export default function VideoCard() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Collapsed card */}
            <div
                onClick={() => setOpen(true)}
                style={{
                    width: "360px",
                    aspectRatio: "16 / 9",
                    border: "1px solid #333",
                    borderRadius: "12px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span>▶ Introduction Video</span>
            </div>

            {/* Expanded overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 100,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "80%",
                            maxWidth: "960px",
                            aspectRatio: "16 / 9",
                            background: "#111",
                            borderRadius: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <span>Video goes here</span>
                    </div>
                </div>
            )}
        </>
    );
}
