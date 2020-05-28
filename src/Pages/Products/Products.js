import React  from 'react';
import {Link } from 'react-router-dom';





const Products =({ match})=>{
console.log(match )
return(
<>
<Link to={`${match.url}/dlaNiej`}><h2>Dla niej</h2></Link>
<Link to={`${match.url}/dlaNiego`}><h2>Dla niego</h2></Link>
</>
)}

export default Products;