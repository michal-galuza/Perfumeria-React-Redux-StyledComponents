import React from 'react';
import { connect } from 'react-redux';


const ProductPage = ({data , match}) => {

    return (
        data===undefined ?
        <h1>Coś poszło nie tak</h1>
        :
        <div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <img src={data.image}/>
        </div>
        );
}
 const mapStateToProps=(state , ownProps)=>{
     const {type , category , index}=ownProps.match.params
     console.log(ownProps.match.params)

 return(
     {data : state[type][category.toLowerCase()][index]}
 )
 }
export default connect(mapStateToProps ,{}) (ProductPage);