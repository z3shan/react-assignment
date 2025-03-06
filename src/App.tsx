/**
 * App Component
 *
 * This component renders the main UI of the application, displaying a list of NY Times
 * most popular articles and their details in a two-column layout.
 *
 * The left column shows a scrollable list of article cards, each displaying the title
 * and byline. The right column shows the details of the currently selected article,
 * including its abstract and a link to read the full article.
 */

import React from 'react';
import Card from './components/Card';
import CardContent from './components/CardContent';
import Button from './components/Button';
import './App.css';
import {Article} from './interfaces';
interface AppProps {
    // Array of articles fetched from the NY Times API
    articles: Article[];
    // Currently selected article to display details, null if none selected
    selectedArticle: Article | null;
    // Callback function to handle article selection
    onArticleClick: (article: Article) => void;
}

const App: React.FC<AppProps> = ({ articles, selectedArticle, onArticleClick }) => {
    return (
        // Main container with two-column grid layout
        <div className="container mx-auto p-4 h-screen grid grid-cols-2 gap-4">
            {/* Left column: Article list */}
            <div className="overflow-y-auto pr-4 border-r border-gray-300">
                <h1 className="text-2xl font-bold mb-4">NY Times Most Popular Articles</h1>
                {/* Map through articles to create clickable cards */}
                {articles.map((article) => (
                    <Card
                        key={article.id}
                        className={`mb-2 cursor-pointer ${selectedArticle?.id === article.id ? 'border-1 border-blue-500' : ''}`}
                        onClick={() => onArticleClick(article)}
                    >
                        <CardContent>
                            <h2 className="text-xl font-semibold">{article.title}</h2>
                            <p className="text-sm text-gray-600">{article.byline}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {/* Right column: Selected article details */}
            <div className="overflow-y-auto pl-4">
                {selectedArticle ? (
                    // Display article details when an article is selected
                    <Card>
                        <CardContent>
                            <h2 className="text-xl font-semibold mb-2">{selectedArticle.title}</h2>
                            <p>{selectedArticle.abstract}</p>
                            <a href={selectedArticle.url} target="_blank" rel="noopener noreferrer">
                                <Button className="mt-4 cursor-pointer">Read More</Button>
                            </a>
                        </CardContent>
                    </Card>
                ) : (
                    // Display placeholder message when no article is selected
                    <p className="text-center text-gray-500">Select an article to see details</p>
                )}
            </div>
        </div>
    );
};

export default App;
