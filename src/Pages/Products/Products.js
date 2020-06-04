import React from 'react';
import SideMenu from '../../Components/SideMenu/SideMenu';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {H2 , ForHim , ForHer , Wrapper , ContentWrapper , TypeWrapper , ForAll} from './ProductsStyled';
import ErrorPage from '../ErrorPage/ErrorPage';
const Prodcuts = ({match , data }) => {
    const params=match.params
    const lenght = Object.keys(params).length;
    const reg = /_/gi ;

    return ( 

<Wrapper>
    <SideMenu/>
        <ContentWrapper>
            {data===undefined
                ?
            <ErrorPage/>
                :
            lenght===0
                ?
                <TypeWrapper>
                <ForHer to={`${match.url}/dlaNiej`}><H2>Dla niej</H2></ForHer>
                    <ForAll to={`${match.url}/dlaNiej`}><H2>Wszystkie produkty</H2></ForAll>
                    <ForHim to={`${match.url}/dlaNiego`}><H2>Dla niego</H2></ForHim>
                </TypeWrapper>
                :
            lenght===1 
                ?
            Object.keys(data).map((name , index) =>{
                name=name[0].toUpperCase() + name ;
                name = name.replace(name[1] , "")

                return( 
                    <Link key={index} to={`${match.url}/${name}`}>
                    <h2>{name.replace(reg , " ")}</h2>
                    </Link>)})
                :
            data.map((items , index)=><ProductCard to={`${match.url}/${index}`} key={index} items={items}/>
           )
            }
    </ContentWrapper>
</Wrapper>
     );
}
const mapStateToProps=(state , ownProps)=>{
const params=ownProps.match.params
const lenght = Object.keys(params).length;
    return(
lenght===2  ?
{data : state[params.type][params.category.toLowerCase()]}
:
lenght===1?
{data: state[params.type]}
:
{data: {}}
)}
export default connect(mapStateToProps , {}) (Prodcuts);





//side Menu lekki odstęp od krawędzi oraz nav nieskończenie długie
//side menu zawartość u góry 
// każdy błąd url ma zwracać 404 page 
//kategorie póki co bez obrazków trzeba wymyślić na to 
//patent
//him her oraz wszystko 
//CZAS OPERACYJNY GODZINA 15:00