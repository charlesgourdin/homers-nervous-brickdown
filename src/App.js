import React, { Component, Fragment } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Game from './pages/Game';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      counter: false
    }
  }

  clickCounter = () => {
    this.setState({
      counter : !this.state.counter
    })
    console.log('test')
  }

  render(){
    return(
      <div className="App">
      <BrowserRouter> 
       <Fragment>
         <Route path="/" exact render ={(props) => <Homepage {...props} onClick={this.clickCounter} />}
         />
         <Route 
         path="/Game" exact render ={(props) => <Game {...props} counter={this.state.counter} />}
         />
       </Fragment> 
      </BrowserRouter>  
   </div>
    )
  }
}

export default App;