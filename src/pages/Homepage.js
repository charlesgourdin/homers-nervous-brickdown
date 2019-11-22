import React, { Component } from 'react'
import './Homepage.css';
import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {
        return (
            <div className="homepage">
                <div className="buttons_homepage">
                    <button className="linktogame"> <Link to ="/Game">Play</Link></button>
                    <button className="linktogame" onClick={this.props.onClick}> <Link to ="/Game">Time Trial</Link></button>
                </div>
            </div>
        );
    }
 }
 
 

export default Homepage;