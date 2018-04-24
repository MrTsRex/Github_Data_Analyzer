import React, { Component } from 'react'
import './Contact.css';
import ReactMarkdown from 'react-markdown'
import photo from './pic.jpg'

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownSrc: [
            `Address: 3515 SW 39th BLVD
                        FL, US 32608
            Product By: Akash Barve
                        Prateek Arora
                        Sandesh Joshi
                        Swarabarna Sarkar
            `
            ].join(''),

            htmlMode: 'raw'
        };
    }
    render () {
        return (
            <div className="row">
                <div className="logo">
                    <img src={photo} width="900" height="300"    />
                     <ReactMarkdown source={this.state.markdownSrc} />
                </div>
             </div>
        );
    }
}

export default Contact