import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');

    const token = localStorage.getItem("access-token");
    const instituicao = localStorage.getItem("access-inst");

    useEffect(() => {
        if (token && instituicao) {
            const hasUser = token;
        if (hasUser) setUser(hasUser);
        }
    }, []);

    const signin = (token) => {
        if (token.length) {
            setUser({ token });
        } else {
            return "Usuário não cadastrado!";
        }
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("access-token");
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signin, signout}}>
            { children }       
        </AuthContext.Provider>
        );
};