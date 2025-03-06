import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';
import {API_KEY} from './constants';
import {Article} from './interfaces';

const API_URL: string = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`;

const AppContainer: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async (): Promise<void> => {
        try {
            const response = await axios.get(API_URL);
            setArticles(response.data.results);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    const handleArticleClick = (article: Article): void => {
        setSelectedArticle(article);
    };

    return (
        <App
            articles={articles}
            selectedArticle={selectedArticle}
            onArticleClick={handleArticleClick}
        />
    );
};

export default AppContainer;
