import React  from 'react';
import {Wrapper , Img , H2} from './CategoryCardStyled';
import { connect } from 'react-redux';

const CategoryCard = ({to , name , index , images , match} ) => {
    const {type}=match.params
    return ( 
        <Wrapper type={type}  to={to}>
        <Img width="100%" height="100%" src={`${images[type][index]}`}/>
        <H2 type={type}>{name}</H2>
        </Wrapper>
     );
}
const mapStateToProps= state=>({images: state.categoryImg})
export default connect(mapStateToProps , {}) (CategoryCard);