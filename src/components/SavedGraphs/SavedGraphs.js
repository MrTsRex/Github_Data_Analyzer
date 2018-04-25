import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
var ZingChart = require('zingchart-react').core;
class SavedGraphs extends Component {
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
         
        
        var temp_arr=[];
        var temp_arr1=[];
        axios.get('http://localhost:3000/repository/licenselang')
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        for(var i=0; i<this.state.responseData.length; i++){
                temp_arr.push(this.state.responseData[i].LICENSE);
                temp_arr1.push(this.state.responseData[i].LANG_PER_LICENSE);
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

  

    render () {
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <div>  Look for Licences on GITHUB:<br/>
                    </div>
                    <input type="submit" value="Submit" onClick={this.handleClick}/>
                </form>

                {this.state.responseData.length > 0 && this.state.arr.length > 0 ?
                                      
                    <ZingChart  id="myChart" className="center" height="300" width="1350" data={

                    {
                      "type": "bar",
                      "title": {
                        "text": "LICENCES ON GITHUB!"
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
                        "item":{  
                          "font-angle":-25,
                          "offset-x":"7px",
                          "max-chars": 9 
                        } 
                      },    
                      "series": [
                        {
                          "values": this.state.arr1,
                          "text": "LICENCES"
                        }
                      ]
                    }



                } /> : null
            } 
            </div>
        )
    }
}
export default SavedGraphs