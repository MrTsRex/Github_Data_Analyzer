import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownSrc: [
            `TopX Users Query will come here`
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

export default Users