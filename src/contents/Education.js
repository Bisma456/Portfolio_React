import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Software Engineering" where="Virtual University" from="Nov 2020" to="Present"/>
            <Widecard title="HSC" where="Govt. Degree Girls College 11-B" from="2018" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    