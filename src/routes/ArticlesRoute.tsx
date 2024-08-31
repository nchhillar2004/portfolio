import { articles } from "../data/articles";

export default function ArticlesRoute() {
    return (
        <div>
            <h1>Articles</h1>
            <div className="flex">
                <div className="articles mt-4 w-full">
                    <div className="flex justify-between lg:flex-row flex-col max-lg:space-y-4">
                        <div className="lg:w-[45%]">
                            <h2>
                                <span className="mr-2 select-none">
                                    &#x2756;
                                </span>
                                Technical Insights
                            </h2>
                            {articles.insights.map((article) => (
                                <div
                                    className="article mt-4 bg-[var(--tertiary-color)] py-2 px-4 rounded-lg"
                                    key={article.id}
                                >
                                    <div className="flex flex-col mb-2">
                                        <h4>
                                            <a href={`article/${article.id}`}>
                                                {article.title}
                                            </a>
                                        </h4>
                                        <div className="badge w-fit bg-[var(--hover-bg)] rounded-md px-2">
                                            {article?.badge &&
                                            article.badge.length >= 2 ? (
                                                <small>{article.badge}</small>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm">
                                        {article.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-[45%]">
                            <h2>
                                <span className="mr-2 select-none">
                                    &#x2756;
                                </span>
                                Personal Experience
                            </h2>
                            {articles.experiences.map((article) => (
                                <div
                                    className="article mt-4 bg-[var(--tertiary-color)] py-2 px-4 rounded-lg"
                                    key={article.id}
                                >
                                    <div className="flex flex-col mb-2">
                                        <h4>
                                            <a href={`article/${article.id}`}>
                                                {article.title}
                                            </a>
                                        </h4>
                                        <div className="badge w-fit bg-[var(--hover-bg)] rounded-md px-2">
                                            {article?.badge &&
                                            article.badge.length >= 2 ? (
                                                <small>{article.badge}</small>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm">
                                        {article.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
