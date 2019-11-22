import React from 'react';
import './Parameters.css';
import ReactModal from 'react-modal';
import {
  IoMdClose,
  IoMdCog,
  IoMdHelp,
  IoIosVolumeHigh
} from 'react-icons/io';
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import totoUrl from '../musique/toto.mp3'
import Duff from '../images/Duff.png'
import homer_donuts from '../images/homer_donuts.png'
import homer_donuts_dooble from '../images/homer_donuts_dooble.png'
import homer_tab_clic1 from '../images/homer_tab_clic1.png'
import homer_tab_reverse from '../images/homer_tab_reverse.png'
import heart from '../images/heart.png'

class Parameters extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      isPlaying: false,
    };
    this.toto = new Audio(totoUrl);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleOpenModal2() {
    this.setState({ showModal2: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleCloseModal2() {
    this.setState({ showModal2: false });
  }

  manageAudio = () => {
    if (this.state.isPlaying) {
      this.toto.pause();
    } else {
      this.toto.play()
    }
    this.setState({ isPlaying: !this.state.isPlaying })
  }


  render() {
    return (
      <div className="block">
        <button onClick={this.handleOpenModal}><IoMdHelp /></button>
        <button onClick={this.handleOpenModal2}><IoMdCog /></button>

        <ReactModal
          style={{
            content: {
              background: "linear-gradient(180deg, rgba(3,141,247,1) 0%, rgba(120,194,251,1) 50%, rgba(251,251,251,1) 100%)",
              width: '70%',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }
          }}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}>


          <h1 class="title">Tutorial</h1>
            <div className="alignItem"><img src={homer_tab_clic1} alt='Donuts' className="homer_tab_clic1" /><p>= throw the ball</p></div>
            <div className="alignItems"><img src={homer_donuts} alt='Donuts' className="homer_donuts" />→<img src={homer_donuts_dooble} alt='Donuts' className="homer_donuts_dooble" /></div>
            <div className="alignItems"><img src={Duff} alt='Duff' className="dufftutorial" /> = <img src={homer_tab_reverse} alt='Donuts' className="homer_tab_reverse" /></div>
            <div className="alignItems"><TiArrowLeftThick className="iconsFlèche" /><p> = go to left</p></div>
            <div className="alignItems"><TiArrowRightThick className="iconsFlèche" /><p> = go to right</p></div>
            <div className="alignItems"><img src={heart} alt='heart' className="heartlife" /><p> = life</p></div>
            <button className = 'myButton' onClick={this.handleCloseModal} style={{}}><IoMdClose />Close</button>
        </ReactModal>

        <ReactModal
          style={{
            content: {
              background: "linear-gradient(180deg, rgba(3,141,247,1) 0%, rgba(120,194,251,1) 50%, rgba(251,251,251,1) 100%)",
              width: '70%',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
          isOpen={this.state.showModal2}
          onRequestClose={this.handleCloseModal2}
        >

          <h1 class="title">Parameters</h1>
          <p class="x"><button onClick={this.manageAudio}><IoIosVolumeHigh className="iconSong" /></button>Music on/off</p>
          <button className = 'myButton' onClick={this.handleCloseModal2} style={{}}><IoMdClose />Close</button>
        </ReactModal>

      </div>
    );
  }
}

export default Parameters;