import * as React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import ParamsPage from "./pages/ParamsPage";

const Index = () => <h2>Home</h2>

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route path='/' exact={true} component={ParamsPage}/>
        <Route path="/index" component={Index} />
      </BrowserRouter>
    );
  }
}

export default App;
