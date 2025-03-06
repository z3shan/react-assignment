/**
 * Button Component
 *
 * A reusable button component that provides consistent styling with customization options.
 * The button features a blue background, white text, rounded corners, and a hover effect.
 */

import { cn } from '../utils';

interface ButtonProps {
    // The content to be displayed inside the button
    children: React.ReactNode;
    // Optional CSS classes to extend or override default styling
    className?: string;
    // Optional click handler function
    onClick?: () => void;
}

/**
 * Button component that combines default styling with custom classes
 * and handles click events
 *
 * @param children - The content to render inside the button
 * @param className - Additional CSS classes to apply
 * @param onClick - Click event handler
 */
const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
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
