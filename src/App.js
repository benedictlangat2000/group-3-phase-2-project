
import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/:index' element={<ProductDetails/>}/>
    </Routes>
   
  );
}

export default App;
