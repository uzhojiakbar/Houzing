import React, { Component } from "react";
import './style.css'
import { Featured } from "./design";
import { Title, Componentname,Search } from "./design";

class MyProperties extends Component {
    render() {
        return <>
            <Featured className="assdas">
                <Title>
                    <Componentname>My properties</Componentname>
                    <Search  placeholder="Search" type="text" />
                </Title>
            </Featured>
        </>
    }
}

export default MyProperties;