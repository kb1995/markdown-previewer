import React, { Component } from 'react';
import TextArea from './components/TextArea/TextArea'
import Viewer from './components/Viewer/Viewer'
import { Div } from './App.styled'
import marked from 'marked'

class App extends Component {
  state = { 
    text: '',
    markdown: '',
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      markdown: marked(e.target.value)
    })
  }
  render() {
    return (
      <Div center>
        <TextArea handleChange = {this.handleChange} />
        <Viewer markdown = {this.state.markdown}></Viewer>
      </Div>
    );
  }
}

export default App;
