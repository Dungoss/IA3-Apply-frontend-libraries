
import './App.css';
import Home from './Home';
import Fetch from './Fetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
        </Switch>

      </div>
    </Router>
  );
}

export default App;
