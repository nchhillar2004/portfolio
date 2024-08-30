import { articles } from "../data/articles";

export default function ArticlesRoute() {
    return (
        <div>
            <h1>Articles</h1>
            <div className="flex">
                <div className="articles mt-4 w-full">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className="lg:w-[45%]">
                            <h2>
                                <span className="mr-2 select-none">
                                    &#x2756;
                                </span>
                                Technical Insights
                            </h2>
                            {articles.insights.map((article) => (
                                <div className="article" key={article.id}>
                                    <h4><a href={`article/${article.id}`}>{article.title}</a></h4>
                                    <p>{article.content}</p>
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
                                <div className="article" key={article.id}>
                                    <h4>{article.title}</h4>
                                    <p>{article.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
