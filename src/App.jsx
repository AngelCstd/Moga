import './App.css'
import { NavBar } from "./Components/NavBar/NavBar.jsx";
import { TableStorage } from "./Components/TableStorage/TableStorage.jsx";
import {Route, Switch } from "wouter";

function App() {

  return (<>
      <NavBar/>
      <Switch>
        <Route path="/" component={TableStorage} />
      </Switch>
      
  </>)
}

export default App
