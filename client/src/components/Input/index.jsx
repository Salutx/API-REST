import React from 'react';
import * as C from "./styles";

const Input = ({ placeholder, type, value, onChange, LabelText, id, name, ref }) => {
  return (
    <>
      <C.FormItem>  
        <C.Label> {LabelText} </C.Label>
        <C.Input 
            value={value}
            type={type}
            ref={ref}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            id={id}
        />
      </C.FormItem>
    </>
  );
};

export default Input;