import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getArticleById } from "../utils/getArticleById";

export default function ArticleId() {
    let params = useParams();
    const article = getArticleById(params.articleId);
    const [markdown, setMarkdown] = useState("");

    if (!article) {
        return <div>404 | Article not found!</div>;
    }

    useEffect(() => {
        async function fetchMarkdown() {
            try {
                const res = await fetch(
                    `/articles/article-${params.articleId}.md`
                );
                const text = await res.text();
                setMarkdown(text);
            } catch (error) {
                console.error("Failed to fetch Markdown file:", error);
            }
        }

        fetchMarkdown();
    }, [params.articleId]);

    return (
        <article
            className="content"
            itemScope
            itemType="https://schema.org/Article"
        >
            <h2 itemProp="headline">{article?.title}</h2>
            <div className="my-4" itemProp="articleBody">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <small>
                Last updated:{" "}
                <time itemProp="dateModified">{article?.date}</time>
            </small>
        </article>
    );
}
