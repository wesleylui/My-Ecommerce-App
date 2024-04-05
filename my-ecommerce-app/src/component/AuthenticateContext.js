import React, { createContext, useState } from 'react';

export const AuthenticateContext = createContext();

export function AuthenticateProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <AuthenticateContext.Provider value={{ isLogged,setIsLogged }}>
            {children}
        </AuthenticateContext.Provider>
    );
}

