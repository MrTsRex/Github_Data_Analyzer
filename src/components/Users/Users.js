import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
var ZingChart = require('zingchart-react').core;

class Users extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.componentDidUpdate=this.componentDidUpdate.bind(this);
        this.state = ({
            name: ' ',
            arr: [],
            arr1: [],
            responseData:[]
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleClick(event) {   
         
        var tempname = document.getElementById("input").value;
        var temp_arr=[];
        var temp_arr1=[];
        axios.get('http://localhost:3000/users/knows/%25'+tempname+'%25')
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        for(var i=0; i<2; i++){
                temp_arr.push(this.state.responseData[i].REPO_NAME);
                temp_arr1.push(this.state.responseData[i].TOTAL_BYTES);
            } 
        this.setState({arr:temp_arr});
        this.setState({arr1:temp_arr1});
        })
         .catch((error) => {
        console.log(error);
         })
        this.setState({value: event.target.value});
        console.log(temp_arr);
        
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
                    Name:<br/>
                    <input id="input" type="text" name="Name" /><br/>
                    <input type="submit" value="Submit" onClick={this.handleClick}/>
                </form>  

                {this.state.responseData.length > 0 && this.state.arr.length > 0 ?
                                      
                    <ZingChart  id="myChart" className="center" height="300" width="1350" data={

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
                        "values": this.state.arr
                      },    
                      "series": [
                        {
                          "values": this.state.arr1,
                          "text": "Repository"
                        }
                      ]
                    }



                } /> : null
            } 
            </div>
        )
    }
}

export default Users