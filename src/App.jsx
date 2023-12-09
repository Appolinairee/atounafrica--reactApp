import {BrowserRouter, Routes,  Route} from 'react-router-dom';

// import General Components
import NavBar from "./components/navBar/NavBar";

// Import Pages
import Home from './pages/Home';
import ProductResult from './components/ProductResults/ProductResult';

const App = () => {
  return (
    <div>
      <BrowserRouter> 
          <NavBar />

          <Routes>
              <Route path='' element={<Home />} />
              <Route path='/research' element={<ProductResult />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;