import React from 'react';
import Axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import * as C from '../../styles';

const StudentsTimeline = (props) => {
    const url = 'http://localhost:3001';
    const deleteStudent = (value) => {Axios.delete(`${url}/students/delete`, { data: {id: value}} )}

    const displayNotes = (props) => {
        const {students} = props;
        if (students.length > 0) {
            return (
                students.map((student) => {
                    return (

                        <C.UserCard key={student.id}>
                            <C.UserAvatar>
                                <OverlayTrigger
                                    rootClose
                                    trigger="click"
                                    placement="bottom"
                                    className="overlaytrigger"
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`} onClick={() => {deleteStudent(student.id)}}>
                                            <Popover.Body id="popoverbody">
                                                Deletar
                                            </Popover.Body>
                                        </Popover>
                                    }
                                    >
                                    <C.btnUser>
                                        <i className="ri-more-line"></i>
                                    </C.btnUser>
                                </OverlayTrigger>
                                <img src={student.avatar.substring(16)} alt="Avatar" />
                            </C.UserAvatar>
                            <C.UserDetails>
                                <C.UserBody>
                                    <p>{student.course.course_level}</p>
                                    <p>{student.course.course_abbr}</p>
                                </C.UserBody>
                                <C.UserHeader>
                                    <h1>{student.first_name} {student.last_name}</h1>
                                    <p>{student.email}</p>
                                    
                                </C.UserHeader>
                                <C.UserContact>
                                    <p>{student.registroMatricula}</p>
                                </C.UserContact>
                            </C.UserDetails>
                        </C.UserCard>
                    )
                })
            )
        } else {
            return (<p className="enought">Não há alunos cadastrados.</p>)
        }
    }

    return (
    <>
        {displayNotes(props)}
    </>
  )
}

export default StudentsTimeline