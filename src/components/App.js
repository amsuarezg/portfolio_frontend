import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import Secciones from './Secciones/Secciones';

function App() {
  return (
    // Router: Allows us to use the react router component. All components 
    // that are nested inside this component have access to the router
    <Router>
      <div className="App">
        {/* Switch: This component makes sure that only one Route shows at any one time */}
        <Routes>
          {/* We create a Route for each page that we have */}
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/secciones" element={<Secciones/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
