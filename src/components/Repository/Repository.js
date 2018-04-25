import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import axios from 'axios'
var ZingChart = require('zingchart-react').core;


class Repository extends Component {
    constructor(props) {
        super(props);
        this.handleClickRepoInclude = this.handleClickRepoInclude.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.componentDidUpdate=this.componentDidUpdate.bind(this);
        this.state = ({
            value: '0',
            y_ax: '',
            subtitle: "",
            arr: [],
            arr1: [],
            responseData:[]
            }
        );
    }
    

    handleClickRepoInclude(event) {   
        var tempname = document.getElementById("input").value;
        this.state.subtitle = "This graph shows the byte count of languages for a particular substring included in the Repository name";
        var temp_arr=[];
        var temp_arr1=[];
        this.state.y_ax = 'TOTAL-BYTES';
        axios.get('http://localhost:3000/users/knows/%25'+tempname+'%25')
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        console.log('here');
        console.log(response);
        
        for(var i=0; i<this.state.responseData.length; i++){
                temp_arr.push(this.state.responseData[i].REPO_NAME);
                temp_arr1.push(this.state.responseData[i].TOTAL_BYTES);
                if(i==15){
                  break;
                }
            } 
        this.setState({arr:temp_arr});
        this.setState({arr1:temp_arr1});
        })
         .catch((error) => {
            alert('No Repository found pertaining to the entered substring!');
            console.log(error);
            
         })
        this.setState({value: event.target.value});
        console.log(temp_arr);
        
    } 
    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {   
        var num = event.target.value;
        var temp_arr=[];
        var temp_arr1=[];
        this.state.y_ax= 'WATCH-COUNT';
        this.state.subtitle = "This graph shows the watch count of repositories in descending order";
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
            <div className = "forms"> 
                <form onSubmit={this.handleSubmit}>
                  <div>  Repository substring:<br/>
                    <input id="input" type="text" name="Name" /><br/>                   
                    </div>
                    <input type="submit" value="Submit" onClick={this.handleClickRepoInclude}/>
                </form>
                
                <span className="spacer">   |   </span>
                

                <div className="button-container" >                
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                      TopX Repos sorted by their watch count:
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

                </div>
            </div>  
                                      
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
                              subtitle:{
                                "text": this.state.subtitle,
                                "font-size": 15
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
                                  "text": this.state.y_ax
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