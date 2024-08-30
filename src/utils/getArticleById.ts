import { articles } from "../data/articles";

export function getArticleById(id: any) {
    let intId = parseInt(id);
    const insight = articles.insights.find((article) => article.id === intId);
    if (insight) return insight;

    const experience = articles.experiences.find(
        (article) => article.id === intId
    );
    if (experience) return experience;
}
