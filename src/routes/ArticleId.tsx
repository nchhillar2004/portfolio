import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getArticleById } from "../utils/getArticleById";

export default function ArticleId() {
    let params = useParams();
    const article = getArticleById(params.articleId);
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        async function fetchMarkdown() {
            try {
                const res = await fetch(
                    `https://nchhillar.vercel.app/articles/article-${params.articleId}.md`
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
        <div className="content">
            <h2>{article?.title}</h2>
            <ReactMarkdown>{markdown}</ReactMarkdown>
            <small>Last updated: {article?.date}</small>
        </div>
    );
}
