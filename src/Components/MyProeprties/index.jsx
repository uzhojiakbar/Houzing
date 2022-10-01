import React, { Component } from "react";
import './style.css'

class MyProperties extends Component {
    render() {
        return <>
            <div className="Title">
                <div className="componentname">My properties</div>
                <div className="MainSearch">
                    <input type="text" />
                </div>
            </div>
        </>
    }
}

export default MyProperties;