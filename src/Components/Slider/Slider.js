import React, {useState}  from "react";
import { Btn , Wrapper , P} from './SliderStyled';
import SliderItem from './SliderItem/SliderItem';
import { connect } from "react-redux";
const Slider = ({data , men}) => {
    

 const tab=[data.zapachy[0] , data.zapachy[1] , data.zapachy[2] , data.zapachy[3] , data.zapachy[4] ,  data.zapachy[5] ];
 let number=tab.length;
 const [x , setX]=useState( 0);
 const moveFm=(right)=>{
   
  if(right===true){
      
   x<= -500 ? setX(0) : setX(x- 100);
   console.log(x)
  }else{
    x>= 0 ? setX(-500) : setX(x+ 100) ;
    console.log(x)
  }
 }
 console.log(window.innerWidth);
return(
    <>
        <Wrapper>
    
    {tab.map((item , index)=><SliderItem men={men} key={index} index={index} x={x} data={item}/>)}
 
    <Btn onClick={()=>moveFm()}><P>&lt;</P></Btn>
    <Btn right onClick={()=>moveFm(true)}><P>&gt;</P></Btn>

    </Wrapper> 
    
    </>);
}
const mapStateToProps=state=>({
    data: state.dlaNiej,
})
export default connect(mapStateToProps , {}) (Slider);