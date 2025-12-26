// Shared type definitions for the portfolio

export interface Project {
    id: number;
    name: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    featured?: boolean;
    image?: string;
}

export interface Experience {
    id: number;
    company: string;
    role: string;
    period: string;
    impact: string;
}

export interface WorkExperience {
    id: number;
    company: string;
    location: string;
    client: string;
    clientLogo: string;
    role: string;
    period: string;
    responsibilities: string[];
}

// Using 'any' for icon type to avoid JSX namespace issues with lucide-react components
export interface SocialLink {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    label: string;
    url: string;
}

