import React from 'react';
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, LabelText, maxString }) => {
  return (
    <>
      <C.FormItem>  
        <C.Label> {LabelText} </C.Label>
        <C.Input 
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            maxlength={8}
        />
      </C.FormItem>
    </>
  );
};

export default Input;