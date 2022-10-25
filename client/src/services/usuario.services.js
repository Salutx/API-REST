import http from "../http-common";

class UsuarioDataService {

    getAll () {
        return http.getAll("/usuarios");
    };
    
    get (id) {
        return http.get(`/usuarios/${id}`);
    };
    
    create  (data) {
        return http.post("/cadastrar", data);
    };
    
    update  (id, data) {
        return http.put(`/usuarios/${id}`, data);
    };
    
    remove  (id) {
        return http.delete(`/usuarios/${id}`);
    };
    
    removeAll  ()  {
        return http.delete(`/usuarios`);
    };
    
    findByName (name) {
        return http.get(`/usuarios?name=${name}`);
    };

}

export default UsuarioService;