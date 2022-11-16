import React from 'react';
import * as C from '../styles';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Axios from 'axios';

const UsersTimeline = (props) => {
    const url = 'http://localhost:3001';
    const deleteUser = (value) => {Axios.delete(`${url}/users/delete`, { data: {id: value}} )}

    const displayNotes = (props) => {
        const {users} = props;
        if (users.length > 0) {
            return (
                users.map((usuario) => { 
                    return (
                        <C.UserItem key={usuario.id}>
                            <C.UserName>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>{usuario.name} ({usuario.registroMatricula})</p>
                            </C.UserName>
                            <OverlayTrigger
                                rootClose
                                trigger="click"
                                placement="bottom"
                                overlay={
                                    <Popover id={`popover-positioned-bottom`} onClick={() => {deleteUser(usuario.id)}}>
                                        <Popover.Body>
                                            Deletar
                                        </Popover.Body>
                                    </Popover>
                                }
                                >
                                <C.btnUser>
                                    <i className="ri-more-line" ></i>
                                </C.btnUser>
                            </OverlayTrigger>
                        </C.UserItem>
                    )
                })
            )
        } else {
            return (<p className='enought'>Não há usuários cadastrados.</p>)
        }
    }

    return (
    <>
        {displayNotes(props)}
    </>
  )
}

export default UsersTimeline