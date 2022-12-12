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
                        <C.UserCard key={teacher.id}>
                            <C.UserAvatar>
                                <OverlayTrigger
                                    rootClose
                                    trigger="click"
                                    placement="bottom"
                                    className="overlaytrigger"
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`} onClick={() => {deleteTeacher(teacher.id)}}>
                                            <Popover.Body id="popoverbody">
                                                Deletar
                                            </Popover.Body>
                                        </Popover>
                                    }
                                    >
                                    <C.btnUser>
                                        <i className="ri-more-line" ></i>
                                    </C.btnUser>
                                </OverlayTrigger>
                                <img src={teacher.avatar.substring(16)} alt="Avatar" />
                            </C.UserAvatar>
                            <C.UserDetails>
                                <C.UserBody>
                                    {/* <p>{teacher.course.course_level}</p>
                                    <p>{teacher.course.course_abbr}</p> */}
                                </C.UserBody>
                                <C.UserHeader>
                                    <h1>{teacher.first_name} {teacher.last_name}</h1>
                                    <p>{teacher.email}</p>
                                    
                                </C.UserHeader>
                                <C.UserContact>
                                    <p>{teacher.registroMatricula}</p>
                                </C.UserContact>
                            </C.UserDetails>
                        </C.UserCard>
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