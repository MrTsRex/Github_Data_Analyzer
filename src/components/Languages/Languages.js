import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class Languages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownSrc: [
            `TopX Languages Query will come here`
            ].join(''),

            htmlMode: 'raw'
        };
    }
    render () {
        return (
            <div className="container">
                <ReactMarkdown source={this.state.markdownSrc} />
            </div>
        )
    }
}

export default Languages