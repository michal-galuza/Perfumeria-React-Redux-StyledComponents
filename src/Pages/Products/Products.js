import React from 'react';
import SideMenu from '../../Components/SideMenu/SideMenu';
import {connect} from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {H2 , ForHim , ForHer , Wrapper , ContentWrapper , TypeWrapper , ForAll} from './ProductsStyled';
import ErrorPage from '../ErrorPage/ErrorPage';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
const Prodcuts=({match , data  , secondData})=>{

    const nestedMap=(data , url)=>(Object.keys(data).map(name=>{
        let changedName=name;
        changedName=changedName[0].toUpperCase() + changedName ;
        changedName = changedName.replace(changedName[1] , "")
            return( 
                data[name].map((items , index)=><ProductCard  match={match.params.type} to={`${url}/${changedName}/${index}`} key={index} items={items}/>)
                    )}));

    const categoryMap=(data , url)=>(Object.keys(data).map((name , index) =>{
        name=name[0].toUpperCase() + name ;
        name = name.replace(name[1] , "")
 return(<CategoryCard index={index} key={name} to={`${url}/${name}`} name={name.replace(reg , " ")} match={match}/>)}))
                   

    const {params}=match
    const lenght = Object.keys(params).length;
    const reg = /_/gi ;

    return ( 
<Wrapper id="wrapper">
    <SideMenu match={match}/>
        <ContentWrapper >
            {data===undefined  ?  <ErrorPage/>  :   lenght===0
                ?
                <TypeWrapper>
                    <ForHer to={`${match.url}/dlaNiej`}><H2>Dla niej</H2></ForHer>
                    <ForAll to={`${match.url}/wszystkieProdukty`}><H2>Wszystkie </H2></ForAll>
                    <ForHim to={`${match.url}/dlaNiego`}><H2>Dla niego</H2></ForHim>
                </TypeWrapper>
                :
            lenght===1 
                ?
                         params.type==="dlaNiej" || params.type==="dlaNiego"
                             ?
                       categoryMap(data , params.type)
                            :
                            params.type==="wszystkieProdukty"
                            ?
                         <>
                        {nestedMap(data , "dlaNiego")}
                        {nestedMap(secondData , "dlaNiej")}
                        </>   
                        :
                        <ErrorPage/> 
                :
            data.map((items , index)=><ProductCard match={match.params.type} to={`${match.url}/${index}`} key={index} items={items}/>
           )}
    </ContentWrapper>
</Wrapper>
     );
}
const mapStateToProps=(state , ownProps)=>{
const params=ownProps.match.params
const lenght = Object.keys(params).length;
    return(
lenght===2 
?
{data : state[params.type][params.category.toLowerCase()]}
:
lenght===1
?
    params.type ==="dlaNiej" || params.type ==="dlaNiego"
        ?
    {data : state[params.type]}
        :
    {data :  state["dlaNiego"] , secondData :state["dlaNiej"]} 
:
{data:{}}

)}
export default connect(mapStateToProps , {}) (Prodcuts);








