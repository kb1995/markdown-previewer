import React, { Component } from 'react';
import TextArea from './components/TextArea/TextArea'
import Viewer from './components/Viewer/Viewer'
import { Flex } from './App.styled'
import marked from 'marked'



class App extends Component {
  state = { 
    text: `# Github markdown previewer by Kristiyan.

- Feel free to check out my  <a href="https://github.com/kb1995" target="_blank">Github Profile</a>.

## Here is a short introduction to Github markdown

# Main heading
## Medium heading
### Small heading

You can quote with the > symbol
> This is a deep quote

You can create a list with - or *

- stage the changes
- create a commit
- push it to the remote repo

`,
    markdown: '',
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      markdown: marked(e.target.value)
    })
  }

  componentDidMount(){
    this.setState({
      markdown: marked(this.state.text)
    })
  }

  render() {
    return (
      <Flex>
        <TextArea text = {this.state.text} handleChange = {this.handleChange} />
        <Viewer markdown = {this.state.markdown}></Viewer>
      </Flex>
    );
  }
}

export default App;
