import {BrowserRouter, Routes,  Route} from 'react-router-dom';

// import General Components
import NavBar from "./components/navBar/NavBar";

// Import Pages
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter> 
          <NavBar />

          <Routes>
              <Route path='' element={<Header/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;