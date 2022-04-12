import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Journal from "./Components/Journal";
import Login from "./Components/Login";
import Result from "./Components/Result"
function App() {
  return (
    <div>
   
     <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/journal">
              <Journal/>
            </Route>
            <Route path="/result">
              <Result/>
            </Route>
        
            </Switch>
      </Router>
    </div>
  );
}

export default App;
