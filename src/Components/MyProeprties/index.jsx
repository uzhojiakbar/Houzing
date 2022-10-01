import React, { Component } from "react";
import './style.css'
import { Featured } from "./design";
import { Title, Componentname, Search, Table } from "./design";

class MyProperties extends Component {
    render() {
        return <>
            <Featured className="assdas">
                <Title>
                    <Componentname>My properties</Componentname>
                    <Search  placeholder="Search" type="text" />
                </Title>
                <Table >
                    <tr>
                        <th>Listing Title</th>
                        <th>Data Published</th>
                        <th>Status</th>
                        <th>View</th>
                        <th>Action</th>
                    </tr>
                </Table>
            </Featured>
        </>
    }
}

export default MyProperties;