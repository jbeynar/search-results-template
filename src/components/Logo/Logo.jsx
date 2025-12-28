import React from "react";
import "./Logo.css";

const Logo = ({children}) => {
    return (
        <h1 className="logo">{children}</h1>
    );
};

export default Logo;
