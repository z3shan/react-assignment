import React from 'react';
import { cn } from '../utils';
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={cn(
                'bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
