import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_db");

    useEffect(() => {
        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
        if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (nascimento, instituicao, email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].senha === senha && hasUser[0].nascimento === nascimento && hasUser[0].instituicao === instituicao) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ nascimento, instituicao, email, token}));
                setUser({ nascimento, instituicao, email, senha });
            } else {
                return "E-mail ou senha incorretos!";
            }
        } else {
            return "Usuário não cadastrado!";
        }
    };

    const signup = (nascimento, instituicao, email, senha, nome) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Já tem uma conta com esse e-mail";
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { nascimento, instituicao, email, senha }];
        } else {
            newUser = [{ nascimento, instituicao, email, senha }];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signin, signup , signout}}>
            { children }       
        </AuthContext.Provider>
        );
};