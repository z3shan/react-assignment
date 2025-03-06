/**
 * Interface representing a NY Times article
 * 
 * This interface defines the structure of article data received from the NY Times API,
 * containing essential information about news articles.
 */
export interface Article {
    // Unique identifier for the article
    id: number;
    // Main headline/title of the article
    title: string;
    // Author information and publication details
    byline: string;
    // Brief summary/description of the article content
    abstract: string;
    // Direct link to the full article on NY Times website
    url: string;
}
