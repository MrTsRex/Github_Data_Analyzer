import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import {Bar, Line, Pie} from 'react-chartjs-2';

var name = 'name';
var ZingChart = require('zingchart-react').core;


class Languages extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            
           
            }
        );
    }

    componentDidUpdate(){
        console.log('***********');
        console.log(this.props.data[0]);
        name = this.props.data[0].LANGUAGE_NAME;
        console.log(name);

    }

    render () {
        return (
            <div className="container">
                <div>
                 {this.props.data.length > 0 ? this.props.data[0].LANGUAGE_NAME : null} 
                </div>
                {this.props.data.length > 0 ?<ZingChart id="myChart" height="300" width="600" data={



                    {
                      "type": "bar",
                      "title": {
                        "text": "Top Languages!"
                      },
                      "plot": {
                        "value-box": {
                          "text": "%v"
                        },
                        "tooltip": {
                          "text": "%v"
                        }
                      },
                      "legend": {
                        "toggle-action": "hide",
                        "header": {
                          "text": "Legend Header"
                        },
                        "item": {
                          "cursor": "pointer"
                        },
                        "draggable": true,
                        "drag-handler": "icon"
                      },
                      "scale-x": {
                        "values": [
                          this.props.data[0].LANGUAGE_NAME,
                          this.props.data[1].LANGUAGE_NAME,
                          "Fri"
                        ]
                      },
                      "series": [
                        {
                          "values": [this.props.data[0].OCCURS,this.props.data[1].OCCURS,this.props.data[2].OCCURS],
                          "text": "Languages"
                        }
                      ]
                    }



                } /> : null
            } 
            <ReactMarkdown source={this.state.markdownSrc} />
            </div>
        )
    }
}

export default Languages