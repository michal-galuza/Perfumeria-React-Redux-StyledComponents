import React from 'react';
import InputStyled from './InputStyled';

const Input = (
    {placeholder , id , type ,
    maxlength , complete , required ,
    max , fn , className , pattern}
       ) => {
    return (
    <InputStyled className={className}
    onChange={fn}
    max={max}
    pattern={pattern}
    autoComplete={complete}
    required={required}
    maxLength={maxlength}
    placeholder={placeholder}
    id={id}
    name={id}
    type={type}
    /> );
}

export default Input;