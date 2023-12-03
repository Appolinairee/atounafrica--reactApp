import {BrowserRouter, Routes,  Route} from 'react-router-dom';

// import Components
import NavBar from "./components/navBar/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter> 
          <NavBar />

          <Routes>
              <Route path='' key="home"/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;