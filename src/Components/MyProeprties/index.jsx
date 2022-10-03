import React, { Component } from "react";
import './style.css'
import data from "../../Mock/data";
import { Featured, NoResult } from "./design";
import { Title, Componentname, Search, Table } from "./design";
import { Thead, Th, Tbody, Td, ListingTitle, ListingTxt, ListingName, ListingPrice, ListingInfo } from "./design";
import trash from '../../Assets/icons/imgs/trash.svg'
import edit from '../../Assets/icons/imgs/edit.svg'
import noresult from '../../Assets/gif/search.gif'

class MyProperties extends Component {
    state = {
        list: data,
        search: '',
        selected: {},
    }

    render() {
        let Delete = (id) => {
            let res = this.state.list.filter((val) => val.id !== id)
            this.setState({ list: res })
        }
        let OnEdIt = (selected) => {
            this.setState({ selected })
        }
        let onCansel = () => {
            this.setState({selected:null})
        }
        let onSaveFINISH = (id) => {
            let res = this.state.list.map((v)=>v.id===id? this.state.selected:v)
            this.setState({list:res})
            onCansel()
        }
        return <>
            <Featured className="assdas">
                <Title>
                    <Componentname>My properties</Componentname>
                    <Search onChange={(e) => this.setState({ search: e.target.value })} placeholder="Search" type="text" />
                </Title>
                <Table >
                    <Thead>
                        <Th align='left'>Listing Title</Th>
                        <Th>Data Published</Th>
                        <Th>Status</Th>
                        <Th>View</Th>
                        <Th>Action</Th>
                    </Thead>
                    <Tbody>
                        {
                            this.state.list.length
                                ?
                                this.state.list.map((value) => value.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()) && (
                                    <Td>
                                        <ListingTitle>
                                            <div className="logo">
                                                <img className="logoimg" src={value.img} alt="" />
                                                {
                                                    value.featured ?
                                                        <p className="featured">
                                                            FEATURED
                                                        </p>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                            <ListingInfo>
                                                <ListingName>
                                                    <p className="title">
                                                        {
                                                        this.state.selected?.id===value.id
                                                                ?
                                                                <><input defaultValue={this.state.selected.name} onChange={(e) => { this.setState({ selected : {...this.state.selected, name: e.target.value}})}} type="text" /></> 
                                                                :
                                                                <>{value.name}</>
                                                        }
                                                        {
                                                            value.forsale 
                                                            ?
                                                            <span className="forsale">for sale</span> 
                                                            :
                                                            <span className="forsale">for sale</span>
                                                        }
                                                    </p>
                                                    <p className="country">
                                                        {
                                                            this.state.selected?.id===value.id
                                                            ? 
                                                            <><input defaultValue={this.state.selected.country} onChange={(e) => { this.setState({ selected: { ...this.state.selected, country: e.target.value } }) }} type="text" /></> 
                                                            :
                                                            <>{value.country}</>
                                                        }
                                                    </p>
                                                </ListingName>
                                                <ListingPrice>
                                                    <p className="price">
                                                        {value.price}
                                                    </p>
                                                    <p className="price1">
                                                        {value.price2}
                                                    </p>
                                                </ListingPrice>
                                            </ListingInfo>
                                        </ListingTitle>
                                        <ListingTxt>{value.Data}</ListingTxt>
                                        <ListingTxt>{value.status}</ListingTxt>
                                        <ListingTxt>{value.view}</ListingTxt>
                                        <ListingTxt>
                                            {
                                                this.state.selected?.id === value.id
                                                    ?<div className="btns">
                                                        <button onClick={() => onSaveFINISH(value.id)}>
                                                            {/* <img src={trash} alt="" /> */}
                                                            Save
                                                        </button>
                                                        <button onClick={onCansel} >
                                                            {/* <img src={edit} alt="" /> */}
                                                                Cancel
                                                        </button>
                                                    </div>
                                                    :
                                                    <div className="btns">
                                                        <button onClick={() => Delete(value.id)}>
                                                            <img src={trash} alt="" />
                                                        </button>
                                                        <button onClick={() => OnEdIt(value)}>
                                                            <img src={edit} alt="" />
                                                        </button>
                                                    </div>
                                            }
                                            
                                        </ListingTxt>
                                    </Td>
                                ))
                                :
                                <NoResult>
                                    <img src={noresult} alt="" />
                                    <p>Malumot mavjud emas</p>
                                </NoResult>
                        }
                    </Tbody>
                </Table>
            </Featured>
        </>
    }
}

export default MyProperties;