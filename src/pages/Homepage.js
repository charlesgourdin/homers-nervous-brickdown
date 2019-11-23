import React, { Component } from 'react'
import './Homepage.css';
import { Link } from 'react-router-dom';
import Duff from '../images/Duff.png'
import homer_donuts from '../images/homer_donuts.png'
import homer_donuts_dooble from '../images/homer_donuts_dooble.png'
import homer_tab_clic1 from '../images/homer_tab_clic1.png'
import homer_tab_reverse from '../images/homer_tab_reverse.png'
import heart from '../images/heart.png'

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            displayMenu: false
        }
    }

    displayMenuOrHelp =()=> {
        this.setState({displayMenu: !this.state.displayMenu})
    }

    render() {
        return (
            <>
            <div className="Help" style={{display: this.state.displayMenu? 'block' : 'none'}}>
            <h1 className="title">Tutorial</h1>
            <div className="alignItems"><img src={homer_tab_clic1} alt='Donuts' className="homer_tab_clic1" /><p className="symbol">=</p><p> throw the ball</p></div>
            <div className="alignItems"><img src={Duff} alt='Duff' className="dufftutorial" /> <p className="symbol">=</p> <img src={homer_tab_reverse} alt='Donuts' className="homer_tab_reverse" /></div>
            <div className="alignItems"><img src={homer_donuts} alt='Donuts' className="homer_donuts" /><p className="symbol">→</p><img src={homer_donuts_dooble} alt='Donuts' className="homer_donuts_dooble" /></div>
            <div className="alignItems"><p className="symbol"> ← </p><p className="symbol"> = </p><p>go to left</p></div>
            <div className="alignItems"><p className="symbol"> → </p><p className="symbol"> = </p><p>go to right</p></div>
            <div className="alignItems"><img src={heart} alt='heart' className="heartlife" /><p className="symbol"> =</p><p> life</p></div>
            <button className="backToMenu" onClick={this.displayMenuOrHelp}>Main menu</button>
            </div>
            <div className="homepage">
                <button className="howtoplay" onClick={this.displayMenuOrHelp}>?</button>
                <div className="buttons_homepage">
                    <button className="linktogame"> <Link to ="/Game">Play</Link></button>
                    <button className="linktogame" onClick={this.props.onClick}> <Link to ="/Game">Time Trial</Link></button>
                </div>
            </div>
            </>
        );
    }
 }
 
 

export default Homepage;