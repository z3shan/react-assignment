/**
 * Card Component
 * 
 * A reusable card component that provides a consistent container styling with customization options.
 * The card features a white background, shadow effect, rounded corners, and a hover animation.
 */

import React from 'react';
import { cn } from '../utils';

interface CardProps {
    // The content to be displayed inside the card
    children: React.ReactNode;
    // Optional CSS classes to extend or override default styling
    className?: string;
    // Optional click handler function
    onClick?: () => void;
}

/**
 * Card component that combines default styling with custom classes
 * and handles click events
 * 
 * @param children - The content to render inside the card
 * @param className - Additional CSS classes to apply
 * @param onClick - Click event handler
 */
const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
    return (
        <div
            className={cn(
                // Default card styling with hover effect and smooth transition
                'bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300',
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
