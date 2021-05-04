import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DeliveryDetails from './Components/DeliveryDetails/DeliveryDetails';
import Footer from './Components/Footer/Footer';
import MealDetails from './Components/MealDetails/MealDetails';
import Navbar from './Components/Navbar/Navbar';
import NewsDetails from './Components/News/NewsDetails/NewsDetails';
import AllMeals from './images/AllMeals/AllMeals';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/Signup/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const ProductInfoContext = createContext();
export const userContext = createContext();

function App() {
  const [productInfo , setProductInfo] = useState(  []);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <ProductInfoContext.Provider  value={[productInfo, setProductInfo]} >
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div>
       <BrowserRouter>
          <Navbar/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/meals/:id' component={MealDetails}/>
              <Route path='/meals' component={AllMeals}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/login' component={Login}/>
              <PrivateRoute path='/cart/delivery-details'>
                <DeliveryDetails/>
              </PrivateRoute>
              <Route path='/cart' component={Cart}/>
              <PrivateRoute path='/news/:NewsId'>
                <NewsDetails/>
              </PrivateRoute>

          </Switch>
          <Footer/>
       </BrowserRouter>
    </div>

        </userContext.Provider>
       
      </ProductInfoContext.Provider>
  );
}

export default App;
