import React , {useState} from 'react';
import {Li , Ul , Wrapper , LinkSide , Button , CloseBtn , } from  './SideMenuStyled';
import {MenuLogo} from '../NavBar/NavBarStyled';
import { connect } from 'react-redux';

const SiedeMenu = ({className , forHim , forHer , match , isProduct}) => {
const [isOpen , setOpen]= useState(false)

    const reg = /_/gi ;

    const menuMapFn=(data , url)=>(
        Object.keys(data).map((name , index) =>{
        name=name[0].toUpperCase() + name ;
        name = name.replace(name[1] , "")
        return( 
            <Li key={index}>
             <LinkSide onClick={()=>setOpen(isOpen===true?false:true)} exact to={`/${url}/${name}`}>
                {name.replace(reg , " ")}
             </LinkSide>
            </Li> )}))

    return (
        <>
 <Wrapper isProduct={isProduct} isOpen={isOpen} type={match.params.type} className={className}>

    <Ul main="true">
    <MenuLogo ismenu={true}/>
        <Ul  core="true" key={"wszystkieProdukty"} >
        <LinkSide onClick={()=>setOpen(isOpen===true?false:true)} core="true"  exact  to="/produkty/wszystkieProdukty">Wszystkie produkty:</LinkSide>
        </Ul>
            <Ul core="true" key={"dlaNiego"} >
                <LinkSide  onClick={()=>setOpen(isOpen===true?false:true)} core="true" exact  to="/produkty/dlaNiego">Dla niego:</LinkSide>
                    <Ul>
                        {menuMapFn(forHim , "produkty/dlaNiego")}
                    
                    </Ul>
            </Ul>

            <Ul  core="true" key={"dlaNiej"}>
            <LinkSide  onClick={()=>setOpen(isOpen===true?false:true)} exact core="true"  to="/produkty/dlaNiej">Dla niej:</LinkSide>
                <Ul>
                 {menuMapFn(forHer , "produkty/dlaNiej")}
                </Ul>
            
            </Ul>
    </Ul>
    <CloseBtn onClick={()=>setOpen(isOpen===true?false:true)}>X</CloseBtn>
</Wrapper> 
<Button  isProduct={isProduct} onClick={()=>setOpen(isOpen===true?false:true)} type={match.params.type}>Menu produktów &darr; </Button></>);
}
const mapStateToProps=state=>(
    {forHim: state.dlaNiego ,
    forHer:state.dlaNiej})
export default connect(mapStateToProps , {})(SiedeMenu);