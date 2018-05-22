import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./App.css"

export default class Menu extends Component {
    render(){
        return(
            <div className="navBar" >
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/users">USERS</Link></li>
                        <li className="nav-item"><Link to="/admins">ADMINS</Link></li>
                    </ul>
            </div>
        )
    }
}