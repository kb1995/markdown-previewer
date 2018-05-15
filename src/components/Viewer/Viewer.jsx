import React, { Component } from 'react';
import {} from './Viewer.styled'

class Viewer extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.markdown }}>
            </div>
        );
    }
}

export default Viewer;