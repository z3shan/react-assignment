import React from 'react';
import { cn } from '../utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
 const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
    return (
        <div
            className={cn(
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
