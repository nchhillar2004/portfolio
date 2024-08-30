import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/getArticleById";

export default function ArticleId() {
    let params = useParams();
    const article = getArticleById(params.articleId);

    return (
        <div>
            <h2>{article?.title}</h2>
            <p>{article?.content}</p>
            <small className="text-zinc-400 leading-none dark:text-zinc-600 text-xs">
                Last updated: {article?.date}
            </small>
        </div>
    );
}
