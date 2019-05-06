import * as React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import ParamsPage from "./pages/ParamsPage";
import SettingsPage from "./pages/SettingsPage";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route path='/' exact={true} component={ParamsPage}/>
        <Route path="/settings" component={SettingsPage} />
      </BrowserRouter>
    );
  }
}

export default App;
