import React, {useState}  from "react";
import { Btn , Wrapper , P} from './SliderStyled';
import SliderItem from './SliderItem/SliderItem';
import { connect } from "react-redux";
const Slider = ({data , men , sex}) => {
    

 const tab=[data.zapachy[0] , data.zapachy[1] , data.zapachy[2] , data.zapachy[3] , data.zapachy[4] ,  data.zapachy[5] ];
 const [x , setX]=useState( 0);
 const moveFm=(right)=>{
  if(right===true){x<= -500 ? setX(0) : setX(x- 100);
  }else{  x>= 0 ? setX(-500) : setX(x+ 100)}
 }
return(
    <>
        <Wrapper>
    
    {tab.map((item , index)=><SliderItem men={men} key={index} index={index} x={x} data={item}/>)}
 
    <Btn onClick={()=>moveFm()}><P>&lt;</P></Btn>
    <Btn right onClick={()=>moveFm(true)}><P>&gt;</P></Btn>

    </Wrapper> 
    
    </>);
}
const mapStateToProps=(state ,ownProps)=>({
    data: state[ownProps.sex],
})
export default connect(mapStateToProps , {}) (Slider);