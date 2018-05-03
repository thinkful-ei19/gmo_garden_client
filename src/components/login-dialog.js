import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';



export default class Login extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  

  render() {
    const inputStyle = {
      display: 'inline-block',
      width: '100%',
      padding: '1%'
    };
    const { open } = this.state;
    const Content = (
      <div>
      <label htmlFor="pname"><strong>Player Name</strong></label>
      <input style={inputStyle} type="text" placeholder="Enter Player Name" name="pname" required />
  
      <label style={inputStyle} htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
          <br/>
             
      <button style={inputStyle} type="button"><Link to="/game">Start Game</Link></button>
      
      </div>
    );
    return (
      <Route>
      <div className="example">
        
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Start Game
        </button>{' '}
        
        This is modal to login and start game.
       
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Welcome to Whack a Weeds</h2>
          {Content}
        </Modal>
      </div>
      </Route>
    );
  }
}