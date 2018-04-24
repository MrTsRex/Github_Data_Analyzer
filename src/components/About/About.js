import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownSrc: [
            `GitHub is a web based hosting service for version control using Git. GitHub started in 2008 and has rapidly grown to become the largest store of repositories. It is majorly used for computer code as it provides access control and collaboration features. Currently GitHub is home to the largest community of open source developers in the world. There are more than 12 million user profiles on GitHub contributing to more than 31 million projects. This project aims to use the data and metadata available about various repositories and user profiles available on the internet  to manipulate them and draw useful results out of them.  Motivation:
    It is very important for people who are interested in Software Development or want to contribute to open source to be able to access useful data before getting started. Working on something without knowing its current usage and importance in industry might result in wastage on time. It would be very useful for these people if there was a portal available where they could get such useful insight. This insight could help them query information such as what are the top repositories at a particular time. For example currently repositories such as tensorflow/tensorflow, facebook/react, Fedora packages are few of the top repositories currently. An interested user might also want to know what is the most popular programming language in a particular frame of time or what technology is associated maximum number of times with another technology so that the person can learn more related technologies rather than picking up completely unrelated ones. Thus, there are more such requirements of people who will benefit from such a website. These requirements may also vary depending on whether the user is a beginner, intermediate or expert in his skillset. We will provide queries for insights useful to all kinds of users. 
`
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

export default About