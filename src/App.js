import './App.css';
import { QueryClientProvider, QueryClient} from 'react-query';
import Home from './Home';
import Fetch from './Fetch';
import RQUserPage from './RQUser';
import RegistForm from './Registration';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/fetch'>Fetch page</Link>
            </li>
            <li>
              <Link to='/register'>Registration page</Link>
            </li>
            <li>
              <Link to='/rqfetch'>Fetch with RQ</Link>
            </li>
          </ul>
        </nav>
      </div>
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
          <Route path="/rqfetch">
            <RQUserPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
