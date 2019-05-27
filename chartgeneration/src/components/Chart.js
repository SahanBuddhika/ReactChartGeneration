import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    render(){
        return(
            <div className="chart">
               <Bar
                    data={data}
                    options={{
                        maintainAspectRatio:false
                    }}/>
            </div>
        )
    }
}

export default Chart;