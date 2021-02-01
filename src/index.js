import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./routes/landing.page";
import { AppLayout } from "./routes/app.layout";
import { ProtectedRoute } from "./protected.route";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404"} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
