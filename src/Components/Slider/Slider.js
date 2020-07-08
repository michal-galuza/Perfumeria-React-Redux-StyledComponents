import React, {useState}  from "react";
import { Btn , Wrapper , P} from './SliderStyled';
import SliderItem from './SliderItem/SliderItem';
import { connect } from "react-redux";
const Slider = ({data}) => {
    let number=4;
 const [x , setX]=useState( 0);
 const tab=[data.zapachy[2] , data.zapachy[5] , data.zapachy[1] , data.zapachy[0] , data.zapachy[3] ,  data.zapachy[4]]
return(
    <>
        <Wrapper>
    
    {tab.map((item , index)=><SliderItem x={x} data={item}/>)}
 
    <Btn onClick={()=>setX(x+200)}><P>&lt;</P></Btn>
    <Btn right onClick={()=>setX(x-200)}><P>&gt;</P></Btn>

    </Wrapper> 
    
    </>);
}
const mapStateToProps=state=>({
    data: state.dlaNiej,
})
export default connect(mapStateToProps , {}) (Slider);