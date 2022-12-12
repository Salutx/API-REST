import React from 'react'
import * as C from "./styles.js"
import LogoImage from "../../assets/images/NewLogo.png"

const Logo = () => {
  return (
    <C.NavbarBrand>
        <img src={LogoImage} alt="Logo" />   
        <span>
            <p>Mindset</p>
            <strong>Student</strong>
        </span>
    </C.NavbarBrand>
  )
}

export default Logo