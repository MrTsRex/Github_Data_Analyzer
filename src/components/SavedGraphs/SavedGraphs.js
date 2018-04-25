import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios';

class SavedGraphs extends Component {
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
        console.log(response);
        //this.setState({arr1:temp_arr1});
        })
         .catch((error) => {
        console.log(error);
        alert('No user found related to the entered name!');
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

export default SavedGraphs