import React from "react";
import Formulario from "./Pages/Formulario";
import Succesful from "./Pages/Succesful";
import { DataProvider } from "./context/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <DataProvider>
          <Route exact path="/" component={Formulario} />
          <Route exact path="/registro-completado" component={Succesful} />
        </DataProvider>
      </Switch>
    </Router>
  );
}

export default App;
