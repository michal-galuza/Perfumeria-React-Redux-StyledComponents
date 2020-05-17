import styled from 'styled-components';

export const Wrapper = styled.div`
z-index:1;
min-width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 2fr 1fr;
grid-template-areas:
"img title"
"img type"
"img description"
"img price";
grid-column-gap: 20px;
justify-items: flex-start;
align-items: center;
::before{
content:" ";
position:absolute;
height: 80%;
border: 1px solid ${({theme})=>theme.colors.primary};
border-radius: 50%;
left:50%;
top:50%;
transform: translate(-50% , -50%);

}
`;
export const Img = styled.img`
object-fit:scale-down;
width: 100%;
height: 100%;
grid-area: img;
`;
export const Title = styled.h2`
grid-area: title;
`;
export const Type= styled.p`
grid-area: type;
`;
export const Description=styled.p`
grid-area:description;
`;
export const Price=styled.p`
grid-area:price;
`;