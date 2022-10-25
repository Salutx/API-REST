import {
    CREATE_USUARIO,
    RETRIEVE_USUARIOS,
    UPDATE_USUARIO,
    DELETE_USUARIO,
    DELETE_ALL_USUARIOS
} from "./types";

import UsuarioDataService from "../services/usuario.service";

export const createUsuario = (name, nascimento, codInstituicao, email, password) => async (dispatch) => {
    try {
        const res = await UsuarioDataService.create({ name, nascimento, codInstituicao, email, password });
        dispatch({
            type: CREATE_USUARIO,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};