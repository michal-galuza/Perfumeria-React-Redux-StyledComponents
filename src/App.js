import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Sale from './Pages/Sale/Sale';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/AboutUs/AboutUs';
import Root from './Pages/Root/Root';
import NavBar from './Components/NavBar/NavBar';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ProductsCategory from './Pages/Products/ProductsCategory/ProductsCatergory';
import ProductsList from './Pages/Products/ProductsList/ProductsList';
import ProductPage from './Pages/Products/ProductPage/ProductPage';
 const App = ()=>(
    <BrowserRouter >
    <>
    <NavBar/>
    <Switch>

       <Route exact path="/" component={Root}/>
       <Route  path="/promocje" component={Sale}/>
       <Route  path="/oNas" component={AboutUs}/>
       <Route exact path="/produkty" component={Products}/>
       <Route exact  path="/produkty/:type" component={ProductsCategory}/>
       <Route  exact path="/produkty/:type/:category" component={ProductsList} />
       <Route  exact path="/produkty/:type/:category/:index" component={ProductPage} />
      <Route component={ErrorPage}/>
    </Switch>
    </>
    </BrowserRouter>
);

export default App;