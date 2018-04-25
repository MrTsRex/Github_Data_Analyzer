import React, { Component } from 'react'
import './Home.css';
import ReactMarkdown from 'react-markdown'
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';
// var name = 'name';

var ZingChart = require('zingchart-react').core;
var num = 0;
class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = ({
            value: '0',
            y_ax: '',
            subtitle: "",
            arr:'',
            //arr1: [],
            responseData:[]
            }
        );
    }

    handleSubmit(event) {
            event.preventDefault();
        }

    handleClickSearch(event) {   
         
        console.log('hiii');
        //var temp_arr1=[];
        axios.get('http://localhost:3000/main/sum')
        .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data });
        console.log('here');
        console.log(this.state.responseData[0].TOTAL);
        alert('Total number of tuples: ' + this.state.responseData[0].TOTAL);
        //this.setState({arr1:temp_arr1});
        })
         .catch((error) => {
        console.log(error);
         })
        
        
    }


    render () {
        return (
            <div className="home">
                <form onSubmit={this.handleSubmit}>
                  <div>  Check number of tuples:<br/>
                    </div>
                    <input type="submit" value="Submit" onClick={this.handleClickSearch}/>
                </form>
            </div>
            

        )
    }
}

export default Home