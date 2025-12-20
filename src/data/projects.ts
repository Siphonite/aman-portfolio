import type { Project } from "../types";

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "What's Next?",
        description:
            "Decentralized candlestick prediction market built on Solana. On-chain market logic with real-time charts.",
        tech: ["Rust", "Solana", "Anchor", "React", "TypeScript"],
        featured: true,
        github: "#",
        link: "#",
    },
    {
        id: 2,
        name: "Axum API Boilerplate",
        description:
            "High-performance REST API foundation with PostgreSQL integration and Docker support.",
        tech: ["Rust", "Axum", "PostgreSQL", "Docker"],
        github: "#",
    },
    {
        id: 3,
        name: "Web3 Wallet Connect",
        description:
            "Lightweight React hooks library for seamless Solana wallet integration.",
        tech: ["React", "TypeScript", "Solana"],
        github: "#",
    },
];
