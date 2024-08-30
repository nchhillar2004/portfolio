import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";

export default function App() {
    const localTheme = localStorage.getItem("themeColor");

    const [themeColor, setThemeColor] = React.useState(
        localTheme === null ? "blue" : localTheme
    );

    React.useEffect(() => {
        localStorage.setItem("themeColor", themeColor);
    }, [themeColor]);

    return (
        <div className={`${themeColor} lg:py-5 py-3`}>
            <div className="container min-h-[90vh] lg:py-4 lg:px-8 max-md:py-2 max-md:px-4 py-3 px-6 w-full rounded-xl border border-[var(--border)] bg-[var(--container-bg)]">
                <header className="mb-4">
                    <div className="flex lg:flex-row flex-col">
                        <h4>
                            <a href="/">Nishant Chhillar</a>
                        </h4>
                        <div className="flex space-x-4 flex-1 items-center justify-end">
                            <ThemeSwitch />
                            <select
                                className="bg-[var(--container-bg)] outline-none p-1"
                                name="themeColor"
                                id="themeColor"
                                value={themeColor}
                                onChange={(e) => {
                                    setThemeColor(e.target.value);
                                    localStorage.setItem(
                                        "themeColor",
                                        e.target.value
                                    );
                                }}
                            >
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                            </select>
                        </div>
                    </div>
                    <nav>
                        <ul className="flex space-x-2">
                            <li>
                                <a href="/about">about</a>
                            </li>
                            <li>
                                <a href="/about">experience</a>
                            </li>
                            <li>
                                <a href="/about">skills</a>
                            </li>
                            <li>
                                <a href="/about">certifications</a>
                            </li>
                            <li>
                                <a href="/about">projects</a>
                            </li>
                            <li>
                                <a href="/about">contact</a>
                            </li>
                            <li>
                                <a href="/about">github</a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeRoute />} />
                    </Routes>
                    <Routes>
                        <Route path="/portfolio" element={<HomeRoute />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
