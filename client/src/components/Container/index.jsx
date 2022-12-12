import React from 'react'
import * as C from './styles'

function Container( { children } ) {
  return (
    <C.Container>
        {children}
    </C.Container>
  )
}

export default Container