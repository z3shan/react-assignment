/**
 * Main entry point for the React application
 * 
 * This file initializes the React application by:
 * 1. Importing necessary dependencies
 * 2. Creating a root React DOM node
 * 3. Rendering the main AppContainer component within StrictMode
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './AppContainer';
import './index.css';

// Create and render the root React component
ReactDOM.createRoot(document.getElementById('root')!).render(
    // StrictMode enables additional development checks and warnings
    <React.StrictMode>
        <AppContainer />
    </React.StrictMode>
);
