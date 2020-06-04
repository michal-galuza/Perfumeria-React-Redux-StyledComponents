import React from 'react';
import { Wrapper , Back , H1} from './ErrorPageStyled';
const ErrorPage = () => {
    return ( <Wrapper>
        <H1>Coś poszło nie tak... </H1>
        <Back exact to="/">Powrót do strony głównej</Back>
    </Wrapper> );
}
 
export default ErrorPage;