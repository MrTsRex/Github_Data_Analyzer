import React, { Component } from 'react'
import './Home.css';
import ReactMarkdown from 'react-markdown'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownSrc: [
            `This is the Homepage`
            ].join(''),

            htmlMode: 'raw'
        };
    }
    render () {
        return (
            <div className="home">
                <ReactMarkdown source={this.state.markdownSrc} />
            </div>
        )
    }
}

export default Home