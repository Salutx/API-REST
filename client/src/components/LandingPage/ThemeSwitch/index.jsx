import { useThemeContext } from '../../../contexts/theme';
import React from 'react'
import * as C from './styles.js'

const ThemeSwitch = () => {

    const { changeTheme } = useThemeContext();

    return (
        <C.ThemeSwitch onClick={changeTheme}>
            <i className="ri-sun-line"></i>
        </C.ThemeSwitch>
    )
}

export default ThemeSwitch