import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Sale from './Pages/Sale/Sale';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/AboutUs/AboutUs';
import Root from './Pages/Root/Root';
import NavBar from './Components/NavBar/NavBar';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import BasketPage from './Pages/BasketPage/BasketPage';
import BasketIcon from './Components/BasketIcon/BasketIcon';
 const App = ()=>{
if(sessionStorage.getItem("items")===null){
   sessionStorage.setItem("items" , JSON.stringify( [] ))
}
 return(
    <BrowserRouter >
    <>
    <NavBar/>
    
    <Switch>

       <Route exact path="/" component={Root}/>
       <Route  path="/promocje" component={Sale}/>
       <Route  path="/oNas" component={AboutUs}/>
       <Route exact path="/koszyk" component={BasketPage}/>
       <Route exact path="/produkty" component={Products}/>
       <Route exact  path="/produkty/:type" component={Products}/>
       <Route  exact path="/produkty/:type/:category" component={Products} />
       <Route  exact path="/produkty/:type/:category/:index" component={ProductPage} />
      
      <Route component={ErrorPage}/>
    </Switch>
    <BasketIcon />
    </>
    </BrowserRouter>
);
 }
export default App;