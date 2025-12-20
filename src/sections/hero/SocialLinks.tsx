const LINKS = [
    { label: "GitHub", url: "https://github.com/Siphonite" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/siphonite/" },
    { label: "X", url: "https://x.com/siphonitee" },
    { label: "Medium", url: "https://medium.com/@amansinha327" },
    { label: "Email", url: "mailto:amansinha327@gmail.com" },
];

export default function SocialLinks() {
    return (
        <div style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}>
            {LINKS.map((link) => (
                <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}
