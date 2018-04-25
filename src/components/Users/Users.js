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
        axios.get('http://localhost:3000/user/langknown/%25'+tempname+'%25')
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        // for(var i=0; i<this.state.responseData.length; i++){
        //         temp_arr.push(this.state.responseData[i].REPO_NAME);
        //         temp_arr1.push(this.state.responseData[i].TOTAL_BYTES);
        //         if(i==10){
        //           break;
        //         }
        //     } 
        alert('The user named '+this.state.responseData[0].AUTHOR_ID+' knows ' + this.state.responseData[0].NO_LANG_BYUSER
          +' languages and has written'+this.state.responseData[0].TOTAL_BYTES +' bytes of code.' );
        
        })
         .catch((error) => {
        console.log(error);
        alert('No user found related to the entered name!');
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
                                      
                  
            
            </div>
        )
    }
}

export default Users