import React from 'react';

import {Li , Ul , Wrapper , LinkSide} from  './SideMenuStyled';
import { connect } from 'react-redux';


const SiedeMenu = ({className , forHim , forHer}) => {
    const reg = /_/gi ;
    return ( <Wrapper className={className}>
        <Ul>
        <Li  ><LinkSide core  to="/produkty">Wszystkie produkty</LinkSide></Li>
            <Li ><LinkSide core  to="/produkty/dlaNiego">Dla niego:</LinkSide>
            <Ul>
           { Object.keys(forHim).map((name , index) =>{
                name=name[0].toUpperCase() + name ;
                name = name.replace(name[1] , "")
                return( 
                  <Li> <LinkSide key={index} to={`/produkty/dlaNiego/${name}`}>
                   {name.replace(reg , " ")}
                    </LinkSide>
                    </Li> )})}
                    
            </Ul>
            </Li>
            <Li ><LinkSide core  to="/produkty/dlaNiej">Dla niej:</LinkSide>
                <Ul>
                { Object.keys(forHer).map((name , index) =>{
                name=name[0].toUpperCase() + name ;
                name = name.replace(name[1] , "")
                return( 
                  <Li> <LinkSide key={index} to={`/produkty/dlaNiej/${name}`}>
                   {name.replace(reg , " ")}
                    </LinkSide>
                    </Li> )})}
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