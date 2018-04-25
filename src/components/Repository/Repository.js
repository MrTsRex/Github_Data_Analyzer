import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import axios from 'axios'
var ZingChart = require('zingchart-react').core;


class Repository extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.componentDidUpdate=this.componentDidUpdate.bind(this);
        this.state = ({
            value: '0',
            arr: [],
            arr1: [],
            responseData:[]
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {   
        var num = event.target.value;
        var temp_arr=[];
        var temp_arr1=[];
        axios.get('http://localhost:3000/repository/topxwatch/'+num)
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        for(var i=0; i<num; i++){
                temp_arr.push(this.state.responseData[i].REPO_NAME);
                temp_arr1.push(this.state.responseData[i].WATCH_COUNT);
            } 
        this.setState({arr:temp_arr});
        this.setState({arr1:temp_arr1});
        })
         .catch((error) => {
        console.log(error);
         })
        this.setState({value: event.target.value});
        
    } 

    // componentDidUpdate(){
    //     console.log('***********');
    //     console.log(this.state.responseData[0]);
    //     //name = this.props.data[0].LANGUAGE_NAME;
    //     // var num=event.target.value;
    //     console.log(name);
        
    //     console.log(this.state.arr);
    // }

    render () {
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Pick a number:
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                      </select>
                    </label>
                   
                </form>  

                
                                      
                    <ZingChart  id="myChart" className="center" height="500" width="1350"
                         data={

                            {
                              "type": "bar",
                              "title": {
                                "text": "Top Repository"
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
                                "values": this.state.arr,
                                  "label":{
                                     "text": "REPOSITORIES"
                                    },  
                                 "item":{  
                                    "font-angle":-25,
                                     "offset-x":"7px",
                                     "max-chars": 9 
                                   } 
                              },    
                              "series": [
                                {
                                  "values": this.state.arr1,
                                  "text": "WATCH COUNT"
                                }
                              ]
                            }
                        } 
                    /> 
             
            </div>
        )
    }
}

export default Repository