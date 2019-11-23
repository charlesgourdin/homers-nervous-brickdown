import React from 'react';
import './Popupwin.css';
import lostgame from '../images/lostgame.jpg';
import { Link } from 'react-router-dom';

class Popupwin extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: true
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  render() {
    const { restart } = this.props
    return (
      <div
        style={{
            margin: 'auto',
            backgroundImage: `url(${lostgame})`,
            backgroundSize: "cover",
            border: "1px solid black",
            width: '380px',
            height: '667px',
            position:'absolute',
            zIndex:'1'
          }
        }
        isOpen={this.state.showModal}
      >
        <div className="contenu">
          <h1 className="looser1">You kicked Bart's ass!</h1>
          <div className="buttons">
            <button className="button_end" onClick={restart}>RESTART</button>
            <button className="button_end"><Link to="/">HOME PAGE</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popupwin;