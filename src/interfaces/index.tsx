export interface Article {
    id: number;
    title: string;
    byline: string;
    abstract: string;
    url: string;
}


export interface AppProps {
    // Array of articles fetched from the NY Times API
    articles: Article[];
    // Currently selected article to display details, null if none selected
    selectedArticle: Article | null;
    // Callback function to handle article selection
    onArticleClick: (article: Article) => void;
}
