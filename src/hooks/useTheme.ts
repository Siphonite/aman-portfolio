import { useState } from "react";

export function useTheme() {
    const [isDark, setIsDark] = useState(true);

    return {
        isDark,
        setIsDark,
        toggleTheme: () => setIsDark((prev) => !prev),
    };
}
