import { cn } from '../utils';
import {JSX} from "react";

interface ButtonProps {
    children: React.ReactNode; // The content to be displayed inside the button
    className?: string; // Optional CSS classes to extend or override default styling
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Type updated to React's MouseEventHandler
}

/**
 * Button component that combines default styling with custom classes
 * and handles click events
 *
 * @param children - The content to render inside the button
 * @param className - Additional CSS classes to apply
 * @param onClick - Click event handler
 */
const Button: ({children, className, onClick}: { children: any; className: any; onClick: any }) => JSX.Element = ({ children, className, onClick }) => {
    return (
        <button
            className={cn(
                // Default button styling with hover effect and smooth transition
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
