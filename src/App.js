import React, { Component } from 'react';
import TextArea from './components/TextArea/TextArea'
import Viewer from './components/Viewer/Viewer'
import { Flex } from './App.styled'
import marked from 'marked'



class App extends Component {
  state = { 
    text: "",
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
      <Flex center>
        <TextArea text = {this.state.text} handleChange = {this.handleChange} />
        <Viewer markdown = {this.state.markdown}></Viewer>
      </Flex>
    );
  }
}

export default App;
