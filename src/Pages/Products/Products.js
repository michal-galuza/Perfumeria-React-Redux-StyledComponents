import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard';
const Products =({products})=>(
    <>
    {products.map(( item , index)=><Link to={`/products/${index+1}`}><ProductCard items={item}/></Link>)}
    </>
);

const mapStateToProps=state=>({products: state.forHim.scentsForHim});
export default connect(mapStateToProps , {}) (Products);