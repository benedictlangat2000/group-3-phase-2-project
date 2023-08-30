
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import {Routes, Route} from 'react-router-dom'
import SignupLogin from './SignupLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/:index' element={<ProductDetails/>}/>
         <SignupLogin/>
    </Routes>
  


export default App;
