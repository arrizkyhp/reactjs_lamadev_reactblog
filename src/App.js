import TopBar from "layouts/TopBar/";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Settings from "pages/Settings";
import Single from "pages/Single";
import Write from "pages/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/post/:postId">
          <Single />
        </Route>
        <Route exact path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route exact path="/settings">
          {user ? <Settings /> : <Login />}
        </Route>
      </Switch>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </Router>
  );
}

export default App;
