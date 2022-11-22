import React from 'react';
import * as C from '../../styles';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Axios from 'axios';

const StudentsTimeline = (props) => {
    const url = 'http://localhost:3001';
    const deleteStudent = (value) => {Axios.delete(`${url}/students/delete`, { data: {id: value}} )}

    const displayNotes = (props) => {
        const {students} = props;
        if (students.length > 0) {
            return (
                students.map((student) => { 
                    return (
                        <C.UserItem key={student.id}>
                            <C.UserName>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>{student.first_name} {student.last_name} ({student.user_type})</p>
                            </C.UserName>
                            <OverlayTrigger
                                rootClose
                                trigger="click"
                                placement="bottom"
                                overlay={
                                    <Popover id={`popover-positioned-bottom`} onClick={() => {deleteStudent(student.id)}}>
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
            return (<p className='enought'>Não há alunos cadastrados.</p>)
        }
    }

    return (
    <>
        {displayNotes(props)}
    </>
  )
}

export default StudentsTimeline