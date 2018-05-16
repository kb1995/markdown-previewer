import React, { Component } from 'react';
import { TypingArea, Div } from './TextArea.styled'

class TextArea extends Component {
    render() {
        return (
            <Div>
                <TypingArea value={this.props.text} onChange={this.props.handleChange.bind(this)} />
            </Div>

        );
    }
}

export default TextArea;