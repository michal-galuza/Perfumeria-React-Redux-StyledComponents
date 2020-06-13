import React from 'react';

import {Li , Ul , Wrapper , LinkSide} from  './SideMenuStyled';
import { connect } from 'react-redux';


const SiedeMenu = ({className , forHim , forHer , match}) => {
    const reg = /_/gi ;
    const menuMapFn=(data , url)=>( Object.keys(data).map((name , index) =>{
        name=name[0].toUpperCase() + name ;
        name = name.replace(name[1] , "")
        return( 
            <Li key={index}>
             <LinkSide exact  to={`/${url}/${name}`}>
                {name.replace(reg , " ")}
             </LinkSide>
            </Li> )}))

    return ( <Wrapper type={match.params.type} className={className}>
        <Ul>

        <Li key={"wszystkieProdukty"} ><LinkSide core="true"  exact  to="/produkty/wszystkieProdukty">Wszystkie produkty:</LinkSide></Li>
            <Li key={"dlaNiego"} ><LinkSide core="true" exact  to="/produkty/dlaNiego">Dla niego:</LinkSide>
            <Ul>
            {menuMapFn(forHim , "produkty/dlaNiego")}
                    
            </Ul>
            </Li>
            <Li key={"dlaNiej"}><LinkSide exact core="true"  to="/produkty/dlaNiej">Dla niej:</LinkSide>
                <Ul>
                {menuMapFn(forHer , "produkty/dlaNiej")}
                </Ul>
            
            </Li>
        </Ul>
    </Wrapper> );
}
const mapStateToProps=state=>(
    {forHim: state.dlaNiego ,
    forHer:state.dlaNiej}
)
export default connect(mapStateToProps , {})(SiedeMenu);