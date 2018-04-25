import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';
// var name = 'name';
import './Languages.css';
var ZingChart = require('zingchart-react').core;


class Languages extends Component {
    constructor(props) {
        super(props);
        this.handleChangeRepo = this.handleChangeRepo.bind(this);
        this.handleChangeByteCount = this.handleChangeByteCount.bind(this);
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

    handleChangeRepo(event) {   
        var num = event.target.value;
        var temp_arr=[];
        var temp_arr1=[];
        axios.get('http://localhost:3000/languages/top/'+num)
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        for(var i=0; i<num; i++){
                temp_arr.push(this.state.responseData[i].LANGUAGE_NAME);
                temp_arr1.push(this.state.responseData[i].OCCURS);
            } 
        this.setState({arr:temp_arr});
        this.setState({arr1:temp_arr1});
        })
         .catch((error) => {
        console.log(error);
         })
        this.setState({value: event.target.value});
        
    } 

    handleChangeByteCount(event) {   
        var num = event.target.value;
        var temp_arr=[];
        var temp_arr1=[];
        axios.get('http://localhost:3000/lang/totalbytes/'+num)
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        for(var i=0; i<num; i++){
                temp_arr.push(this.state.responseData[i].LANGUAGE_NAME);
                temp_arr1.push(this.state.responseData[i].TOTAL_BYTES_PER_LANG);
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
              <div class="button-container"> 
               <form onSubmit={this.handleSubmit}>
                    <label>
                      Pick a number for topx Repo: 
                      <select value={this.state.value} onChange={this.handleChangeRepo}>
                        <option value="0">0</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                      </select>
                    </label>
                   
                </form>  
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Pick a number for topx byte count: 
                      <select value={this.state.value} onChange={this.handleChangeByteCount}>
                        <option value="0">0</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                      </select>
                    </label>
                   
                </form>  
               
               </div>
                                      
                    <ZingChart  id="myChart" className="center" height="300" width="1350" 
                        data={

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
                                "values": this.state.arr,
                                "label":{
                                     "text": "LANGUAGES"
                                    }
                              },    
                              "series": [
                                {
                                  "values": this.state.arr1,
                                  "text": "REPO-COUNT"
                                }
                              ]
                            }
                        }
                    />                                      
            </div>
        )
    }
}

export default Languages