import React, { Component } from 'react';
import {TypingArea} from './TextArea.styled'

class TextArea extends Component {
    render() {
        return (
            <TypingArea onChange = {this.props.handleChange.bind(this)}/>
        );
    }
}

export default TextArea;