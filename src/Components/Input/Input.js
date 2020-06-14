import React from 'react';
import InputStyled from './InputStyled';

const Input = (
    {placeholder , id , type ,
    maxlength , complete , required ,
    max , fn , title,className , pattern ,minLength}
       ) => {
    return (
    <InputStyled className={className}
    onChange={fn}
    max={max}
    minLength={minLength}
    pattern={pattern}
    autoComplete={complete}
    required={required}
    maxLength={maxlength}
    placeholder={placeholder}
    id={id}
    name={id}
    type={type}
    title={title}
    /> );
}

export default Input;