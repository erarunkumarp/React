import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
