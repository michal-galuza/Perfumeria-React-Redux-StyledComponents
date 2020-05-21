import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Sale from './Pages/Sale/Sale';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/AboutUs/AboutUs';
import Root from './Pages/Root/Root';
import NavBar from './Components/NavBar/NavBar';
import ProductPage from './Components/ProductPage/ProductPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
 const App = ()=>(
    <BrowserRouter >
    <>
    <NavBar/>
    <Switch>

       <Route exact path="/" component={Root}/>
       <Route  path="/sale" component={Sale}/>
       <Route  path="/about_us" component={AboutUs}/>
       <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:Id" component={ProductPage}/>
      <Route component={ErrorPage}/>
    </Switch>
    </>
    </BrowserRouter>
);

export default App;