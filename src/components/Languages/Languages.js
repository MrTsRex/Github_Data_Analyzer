import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import {Bar, Line, Pie} from 'react-chartjs-2';

// class Languages extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             markdownSrc: [
//             `TopX Languages Query will come here`
//             ].join(''),

//             htmlMode: 'raw'
//         };
//     }
class Languages extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = ({
            value: '5',
            chartData: {
                labels: ['1st','2nd','3rd','4th', '5th', '6th', '7th', '8th', '9th', '10th'],
                datasets: [
                {
                    label: 'Repository',
                    data: [ 1000, 2000, 3017, 1600, 2007, 7679, 2977, 2976, 2976, 2970],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                }
                ]
        
            //Top 10 watched Repository
           
            }
        });
    }

    handleChange(event) {
    //this.setState({value: event.target.value});
    //this.setState({chartData.datasets[0].label: 'Repository'+event.target.value});
    var num = event.target.value;
    var arr = [];
    for(var i=1; i<=num; i++){
        arr.push(i);
    }
    var dummyProperty = this.state;
    dummyProperty.chartData.labels = arr;
    dummyProperty.value = num;
    this.setState(dummyProperty);
    //this.setState({chartData: {labels: arr}});
  }

  handleSubmit(event) {
   // alert('graph generation: ' + this.state.value);
    event.preventDefault();
}
    componentDidUpdate(){
        console.log('***********');
        console.log(this.props.data[0]);

    }
    render () {
        return (
            <div className="container">
                <div>
                 {this.props.data.length > 0 ? this.props.data[0].LANGUAGE_NAME : null} 
                </div>
                Top {this.state.value} used Languages
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Pick a number:
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                      </select>
                    </label>
                   
                </form>                    
             <Bar
                data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
            />
            <ReactMarkdown source={this.state.markdownSrc} />
            </div>
        )
    }
}

export default Languages