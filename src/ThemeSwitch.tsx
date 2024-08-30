import React from "react";

export default function ThemeSwitch() {
    const systemPreferenceDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const localTheme = localStorage.getItem("theme");
    const [theme, setTheme] = React.useState(
        localTheme === null ? "system" : localTheme
    );

    React.useEffect(() => {
        const root = document.documentElement;

        if (theme === "system") {
            if (systemPreferenceDark) {
                root.setAttribute('data-theme', 'dark');
            }else{
                root.setAttribute('data-theme', 'light');
            }
        } else {
            root.setAttribute('data-theme', theme);
        }

        localStorage.setItem("theme", theme);
    }, [theme, systemPreferenceDark]);

    return (
        <select
            className="bg-[var(--container-bg)] outline-none p-1"
            name="theme"
            id="theme"
            value={theme}
            onChange={(e) => {
                setTheme(e.target.value);
            }}
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    );
}
