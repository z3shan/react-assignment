import React from 'react';
import Card from './components/Card';
import CardContent from './components/CardContent';
import Button from './components/Button';
import './App.css';
import {Article} from './interfaces';

interface AppProps {
    articles: Article[];
    selectedArticle: Article | null;
    onArticleClick: (article: Article) => void;
}

const App: React.FC<AppProps> = ({ articles, selectedArticle, onArticleClick }) => {
    return (
        <div className="container mx-auto p-4 h-screen grid grid-cols-2 gap-4">
            <div className="overflow-y-auto pr-4 border-r border-gray-300">
                <h1 className="text-2xl font-bold mb-4">NY Times Most Popular Articles</h1>
                {articles.map((article) => (
                    <Card key={article.id} className="mb-2 cursor-pointer" onClick={() => onArticleClick(article)}>
                        <CardContent>
                            <h2 className="text-xl font-semibold">{article.title}</h2>
                            <p className="text-sm text-gray-600">{article.byline}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="overflow-y-auto pl-4">
                {selectedArticle ? (
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
                    <p className="text-center text-gray-500">Select an article to see details</p>
                )}
            </div>
        </div>
    );
};

export default App;
