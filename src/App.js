import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/search/:query" component={Search} />
          <Route path="/category/:query" component={Category} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
