import React, { Component } from 'react';
import {Output} from './Viewer.styled'

class Viewer extends Component {
    render() {
        return (
            <Output dangerouslySetInnerHTML={{ __html: this.props.markdown }}>
            </Output>
        );
    }
}

export default Viewer;