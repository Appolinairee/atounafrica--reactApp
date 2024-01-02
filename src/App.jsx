import {BrowserRouter, Routes,  Route} from 'react-router-dom';

// import General Components
import NavBar from "./components/navBar/NavBar";

// Import Pages
import Home from './pages/Home';
import ProductResult from './components/ProductResults/ProductResult';
import CategoriesPages from './components/CategoriesPage.jsx/CategoriesPages';
import ProductPresentation from './components/ProductPresentation/ProductPresentation';
import ProductPayment from './components/ProductPayment/ProductPayment';

const App = () => {
  return (
    <div>
      <BrowserRouter> 
          <NavBar />

          <Routes>
              <Route path='' element={<Home />} />
              <Route path='/research' element={<ProductResult />} />
              <Route path='/categories' element={<CategoriesPages />} />
              <Route path='/order' element={<ProductPresentation />} />
              <Route path='/payment' element={<ProductPayment />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;