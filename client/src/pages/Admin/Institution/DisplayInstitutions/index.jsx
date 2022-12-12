import React from 'react';
import * as C from '../../styles';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Axios from 'axios';

const InstitutionsTimeline = (props) => {
    const url = 'http://localhost:3001';
    const deleteInstitution = (value) => {Axios.delete(`${url}/institutions/delete`, { data: {id: value}} )}

    const displayNotes = (props) => {
        const {institutions} = props;
        if (institutions.length > 0) {
            return (
                institutions.map((institution) => { 
                    return (
                        <C.UserItem key={institution.id}>
                            <C.UserName>
                                <p>{institution.name} ({institution.id})</p>
                            </C.UserName>
                            <OverlayTrigger
                                rootClose
                                trigger="click"
                                placement="bottom"
                                overlay={
                                    <Popover id={`popover-positioned-bottom`} onClick={() => {deleteInstitution(institution.id)}}>
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
            return (<p className='enought'>Não há instituições cadastradas.</p>)
        }
    }

    return (
    <>
        {displayNotes(props)}
    </>
  )
}

export default InstitutionsTimeline