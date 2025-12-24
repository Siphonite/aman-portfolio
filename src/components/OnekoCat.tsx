import { useEffect } from "react";
import { catConfig } from "../config/Cat";

export default function OnekoCat() {
    useEffect(() => {
        if (!catConfig.enabled) return;

        // Load the oneko script dynamically
        const script = document.createElement("script");
        script.src = "/oneko/oneko.js";
        script.dataset.cat = "/oneko/oneko.gif";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup: remove the script and neko element when component unmounts
        return () => {
            script.remove();
            const nekoEl = document.getElementById("oneko");
            if (nekoEl) {
                nekoEl.remove();
            }
        };
    }, []);

    // This component doesn't render anything visible
    return null;
}
