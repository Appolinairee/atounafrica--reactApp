import {BrowserRouter, Routes,  Route} from 'react-router-dom';

// import General Components
import NavBar from "./components/navBar/NavBar";

// Import Pages
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter> 
          <NavBar />

          <Routes>
              <Route path='' element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;