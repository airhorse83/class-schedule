import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return(
            <div className='library-course'>
                <label className="library-course__title">Problem Solving</label>
                

                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ultrices nisl. Nulla nec sem suscipit, aliquam turpis sed, egestas risus. Integer laoreet sapien arcu, dapibus consectetur ligula feugiat et.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;