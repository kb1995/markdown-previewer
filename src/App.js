import React, { Component } from 'react';
import TextArea from './components/TextArea/TextArea'
import Viewer from './components/Viewer/Viewer'
import {Div} from './App.styled'

class App extends Component {
  render() {
    return (
      <Div center>
        <TextArea/>
        <Viewer/>
      </Div>
    );
  }
}

export default App;
