import React, { Component } from "react";
import './style.css'
import data from "../../Mock/data";
import { Featured } from "./design";
import { Title, Componentname, Search, Table } from "./design";
import { Thead, Th, Tbody, Td, ListingTitle, ListingTxt, ListingName, ListingPrice, ListingInfo } from "./design";
import trash from '../../Assets/icons/imgs/trash.svg'
import edit from '../../Assets/icons/imgs/edit.svg'


class MyProperties extends Component {
    state = {
        list: data,
        search: ''
    }
    
    render() {
        let Delete = (id) => {
            let res = this.state.list.filter((val)=>val.id!==id)
            this.setState({list: res})
        }

        console.log(this.state.search);
        return <>
            <Featured className="assdas">
                <Title>
                    <Componentname>My properties</Componentname>
                    <Search onChange={(e) => this.setState({ search : e.target.value})} placeholder="Search" type="text" />
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
                            this.state.list.map((value) => (
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
                                                <p className="title">{value.name}
                                                    {
                                                        value.forsale ? <span className="forsale">for sale</span> : null
                                                    }
                                                </p>
                                                <p className="country">{value.country}</p>
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
                                        <div className="btns">
                                            <button>
                                                <img onClick={() => Delete(value.id)} src={trash} alt="" />
                                            </button>
                                            <button>
                                                <img src={edit} alt="" />
                                            </button>
                                        </div>
                                    </ListingTxt>
                                </Td>
                            ))
                        }
                    </Tbody>
                </Table>
            </Featured>
        </>
    }
}

export default MyProperties;