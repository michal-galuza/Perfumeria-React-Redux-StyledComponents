import React from 'react';
import {Wrapper , WrapperContent , H1} from './SaleStyled';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { connect } from 'react-redux';
const Sale =( {data , dataSecond})=>{
const renderFn=(tab , type , sale)=>{
    return(Object.keys(tab).map(name=>{
        let changedName=name;
        changedName=changedName[0].toUpperCase() + changedName ;
        changedName = changedName.replace(changedName[1] , "");
        return(tab[name].map((item , index)=>(
        item.sale===sale?<ProductCard items={item} to={`/produkty/${type}/${changedName}/${index}`} key={item.name}/> : ''
        )))
    }))
}


return(
<Wrapper>
<WrapperContent>
<H1>Przeceny 20% dla niego</H1>
{renderFn(dataSecond, "dlaNiej" , 20)}
<H1>Przeceny 50% dla niego</H1>
{renderFn(dataSecond, "dlaNiej" , 50)}
</WrapperContent>
<WrapperContent>
<H1>Przeceny 20% dla niej</H1>
{renderFn(dataSecond, "dlaNiej" , 20)}
<H1>Przeceny 50% dla niej</H1>
{renderFn(dataSecond, "dlaNiej" , 50)}
</WrapperContent>
</Wrapper>
);
    };
const mapStateToProps=state=>(
    {data:state.dlaNiego , dataSecond: state.dlaNiej}
)
export default connect(mapStateToProps , {}) (Sale);