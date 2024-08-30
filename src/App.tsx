import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Route, Routes, Link } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import ArticlesRoute from "./routes/ArticlesRoute";
import BlogsRoute from "./routes/BlogsRoute";

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
                <header className="mb-5 space-y-4">
                    <div className="flex lg:flex-row flex-col">
                        <h1>
                            <Link to="/">Nishant Chhillar</Link>
                        </h1>
                        <div className="flex space-x-4 flex-1 flex-wrap items-center justify-end">
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
                        <ul className="flex flex-wrap">
                            <li>
                                <Link to="/#about">about</Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="/#experience">experience</Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="/#skills">skills</Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="/#certifications">
                                    certifications
                                </Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="/#projects">projects</Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="/#contact">contact</Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="/articles">articles</Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="/blogs">blogs</Link>
                            </li>
                            <div className="dot">&middot;</div>
                            <li>
                                <Link to="https://github.com/nchhillar2004/">
                                    github
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<HomeRoute />} />
                        <Route path="/articles" element={<ArticlesRoute />} />
                        <Route path="/blogs" element={<BlogsRoute />} />
                    </Routes>
                </main>
                <footer className="mt-5">
                    <small className="text-zinc-400 leading-none dark:text-zinc-600 text-xs">
                        &copy; 2024 - Nishant Chhillar
                    </small>
                </footer>
            </div>
        </div>
    );
}
