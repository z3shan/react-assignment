import React from 'react';
import Card from './components/Card';
import CardContent from './components/CardContent';
import './App.css';
import { Article } from './interfaces';
import { cn } from "./utils";

interface AppProps {
    articles: Article[];
    selectedArticle: Article | null;
    onArticleClick: (article: Article) => void;
    loading: boolean;
    error: string | null;
}

const App: React.FC<AppProps> = ({ articles, selectedArticle, onArticleClick, loading, error }) => {
    return (
        <div className="container mx-auto p-4 h-screen grid grid-cols-2 gap-4">
            <div className="overflow-y-auto pr-4 border-r border-gray-300">
                <h1 className="text-2xl font-bold mb-4">NY Times Most Popular Articles</h1>

                {loading ? (
                    <p className="text-center text-blue-500">Loading articles...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : articles.length > 0 ? (
                    articles.map((article) => (
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
                    ))
                ) : (
                    <p className="text-center text-gray-500">No articles available</p>
                )}
            </div>

            <div className="overflow-y-auto pl-4">
                {selectedArticle ? (
                    <Card>
                        <CardContent>
                            <h2 className="text-xl font-semibold mb-2">{selectedArticle.title}</h2>
                            <p>{selectedArticle.abstract}</p>
                            <a href={selectedArticle.url} target="_blank" rel="noopener noreferrer">
                                <button
                                    className={cn(
                                        'bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300',
                                        'mt-4 cursor-pointer'
                                    )}
                                >
                                    Read More
                                </button>
                            </a>
                        </CardContent>
                    </Card>
                ) : (
                    <p className="text-center text-gray-500">Select an article to see details</p>
                )}
            </div>
        </div>
    );
};

export default App;
