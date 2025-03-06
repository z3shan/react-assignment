/**
 * CardContent Component
 * 
 * A simple wrapper component that provides consistent padding for content inside Card components.
 * This component adds padding around its children to ensure proper spacing within cards.
 */

import {JSX} from "react";

interface CardContentProps {
    // The content to be displayed inside the card content area
    children: React.ReactNode;
}

/**
 * CardContent component that adds padding around its children
 * 
 * @param children - The content to render inside the padded container
 */
const CardContent: ({children}: CardContentProps) => JSX.Element = ({ children }) => {
    return <div className="p-2">{children}</div>;
};

export default CardContent;
