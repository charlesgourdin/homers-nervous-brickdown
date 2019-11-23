import React from 'react';
import './Popuploose.css';
import bart_skate1 from '../images/bart_skate1.jpg';
import { Link } from 'react-router-dom';

class Popuploose extends React.Component {
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
          backgroundImage: `url(${bart_skate1})`,
          backgroundPositionX:'35%',
          backgroundSize: "cover",
          border: "1px solid black",
          width: '380px',
          height: '667px',
          position: 'absolute',
          zIndex: '1'
        }}
        isOpen={this.state.showModal}
        contentLabel="Minimal Modal Example"
      >
        <div className="contenu">
          <h1 className="looser">You're a looser!</h1>
          <div className="buttons">
            <button className="button_end1" onClick={restart}>RESTART</button>
            <button className="button_end1"><Link to="/">HOME PAGE</Link></button>
          </div>
        </div>
      </div >
    );
  }
}

export default Popuploose;


