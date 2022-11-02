
import './App.css';
import Home from './Home';
import Fetch from './Fetch';
import RegistForm from './Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">  
            <Home />
          </Route>
          <Route path="/fetch">
            <Fetch />
          </Route>
          <Route path="/register">
            <RegistForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
