/**
 * AppContainer Component
 *
 * This component serves as the main container for the application, handling the data fetching
 * and state management for articles from the New York Times Most Popular API.
 *
 * The component fetches a list of most viewed articles from the past 7 days on initial mount
 * and manages the selected article state when users interact with the article list.
 */

import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import App from './App';
import {API_KEY} from './constants';
import {Article} from './interfaces';

// API endpoint for fetching the most viewed articles from the past 7 days
const API_URL: string = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`;

const AppContainer: React.FC = () => {
    // State for storing the list of articles fetched from the API
    const [articles, setArticles] = useState<Article[]>([]);
    // State for tracking the currently selected article
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // Fetch articles when component mounts
    useEffect(() => {
        fetchArticles();
    }, []);

    /**
     * Fetches articles from the NY Times Most Popular API
     * Sets the articles state with the response data or logs error if request fails
     */
    const fetchArticles = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await axios.get(API_URL);
            setArticles(data.results || []);
        } catch (error) {
            setError('Failed to fetch articles. Please try again later.');
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };


    /**
     * Handles click events on article items
     * @param article - The article that was clicked
     */
    const handleArticleClick = useCallback((article: Article) => {
        setSelectedArticle(article);
    }, []);

    return (
        <App
            articles={articles}
            selectedArticle={selectedArticle}
            onArticleClick={handleArticleClick}
            loading={loading}
            error={error}
        />
    );
};

export default AppContainer;
