import * as React from 'react'
import './App.css'
import LoadButton from "./components/LoadButton/LoadButton"
import Params from "./components/Params/container"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Params/>
        <LoadButton/>
      </div>
    );
  }
}

export default App;
