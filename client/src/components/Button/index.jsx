import React from 'react';
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button", children}) => {
  return (
    <>
      <C.Button Type={Type} onClick={onClick}>
        {children}
        {Text}
      </C.Button>
    </>
  );
};

export default Button;