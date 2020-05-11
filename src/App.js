import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Sale from './Pages/Sale/Sale';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/AboutUs/AboutUs';
import Root from './Pages/Root/Root';
import NavBar from './Components/NavBar/NavBar';


 const App = ()=>(
    <BrowserRouter>
    <>
    <NavBar/>
    <Switch>

       <Route exact path="/">
       <Root/>
       </Route>

       <Route  path="/sale">
       <Sale/>
       </Route>

       <Route  path="/about_us">
       <AboutUs/>
       </Route>

       <Route  path="/products">
       <Products/>
       </Route>

    </Switch>
    </>
    </BrowserRouter>
);

export default App;