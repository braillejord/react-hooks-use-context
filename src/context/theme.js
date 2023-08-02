// src/context/user.js
import React, { useState } from "react";

// create the context
const ThemeContext = React.createContext();

// create a provider component
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return (
        <ThemeContext.Provider
            value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider }