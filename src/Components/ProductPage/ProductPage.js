import React from 'react';
import { connect } from 'react-redux';


const ProductPage = ({ data}) => {
 

   
    return ( <h1>{data.name}</h1>  );
}

const mapStateToProps=(state ,ownProps )=>{
    const index = ownProps.match.params.Id;
    console.log(index)
    return{data:state.forHim.eyeCreamForHim[index-1]}
}
export default connect(mapStateToProps , {}) (ProductPage);