import React, { Component } from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';

class Schedule extends Component {
    render() {
        return(
            <div className='schedule'>
                <Gradient />    
                <h1 className="schedule_title">My schedule</h1>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>               
                <ScheduleCourse title={'Problem Solving'}/>
                
            </div>
        )
    }
}

export default Schedule;