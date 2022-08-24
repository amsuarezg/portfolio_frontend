import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // Router: Allows us to use the react router component. All components 
    // that are nested inside this component have access to the router
    <Router>
      <div className="App">

        {/* Switch: This component makes sure that only one Route shows at any one time */}
        <Switch>
          
          {/* We create a Route for each page that we have */}
          <Route path="/">
            <Inicio/>
          </Route>

          <Route path="/secciones">
            <Secciones/>      
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
