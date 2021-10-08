import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/category/:query" component={CategoryPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
