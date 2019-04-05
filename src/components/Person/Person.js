import React, { Component } from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name}<br/>I'm <b>{props.age}</b> years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>

    );
}

// class Person extends Component{
//     render(){
//         return(
//             <div>
//                 <p>My name is {this.props.name} and I'm {this.props.age} years old.</p>
//                 <p>{this.props.children}</p>
//             </div>

//         );
//     }
// }

export default person;
