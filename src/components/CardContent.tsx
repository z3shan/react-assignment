import {JSX} from "react";
const CardContent: ({children}: { children: any }) => JSX.Element = ({ children }) => {
    return <div className="p-2">{children}</div>;
};

export default CardContent;
