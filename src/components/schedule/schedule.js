import React, { Component } from 'react';
import Gradient from '../gradient';

class Schedule extends Component {
    render() {
        return(
            <div className='schedule'>
                <Gradient />    
                <h1 className="schedule_title">My schedule</h1>
                
            </div>
        )
    }
}

export default Schedule;