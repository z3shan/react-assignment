import React from 'react';
import {JSX} from "react";

interface CardContentProps {
    children: React.ReactNode;
}

const CardContent: ({children}: { children: any }) => JSX.Element = ({ children }) => {
    return <div className="p-2">{children}</div>;
};

export default CardContent;
