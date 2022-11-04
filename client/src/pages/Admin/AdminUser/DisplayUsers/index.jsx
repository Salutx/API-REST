import React from 'react'

function UsersTimeline(props) {

    const displayNotes = (props) => {
        const {users} = props;

        if (users.length > 0) {
            return (
                users.map((usuario) => {
                    return (
                        <div className="user-name" key={usuario.id}>
                            <i className="ri-checkbox-blank-circle-fill"></i>
                            <p>{usuario.name} ({usuario.registroMatricula})</p>
                        </div>
                    )
                })
            )
        } else {
            return (<p>Não há usuários.</p>)
        }
    }

  return (
    <>
        {displayNotes(props)}
    </>
  )
}

export default UsersTimeline