import React from 'react';
import * as C from '../../styles';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Axios from 'axios';

const TeachersTimeline = (props) => {
    const url = 'http://localhost:3001';
    const deleteTeacher = (value) => {Axios.delete(`${url}/teachers/delete`, { data: {id: value}} )}

    const displayNotes = (props) => {
        const {teachers} = props;
        if (teachers.length > 0) {
            return (
                teachers.map((teacher) => {
                    return (
                        <C.UserItem key={teacher.id}>
                            <C.UserName>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>({teacher.registroMatricula}) {teacher.first_name} {teacher.last_name} (Ativo: {teacher.is_active})</p>
                            </C.UserName>
                            <OverlayTrigger
                                rootClose
                                trigger="click"
                                placement="bottom"
                                overlay={
                                    <Popover id={`popover-positioned-bottom`} onClick={() => {deleteTeacher(teacher.id)}}>
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
            return (<p className='enought'>Não há professores cadastrados.</p>)
        }
    }

    return (
    <>
        {displayNotes(props)}
    </>
  )
}

export default TeachersTimeline