import React from 'react'
import * as C from './styles'
import Logo from '../../Logo'

const LPHeader = ( {children} ) => {
  return (
    <C.Header>
        <C.Container>
            <C.Navbar>
                <Logo />

                <C.NavbarNav>
                    {children}
                </C.NavbarNav>
            </C.Navbar>
        </C.Container>
    </C.Header>
  )
}

export default LPHeader