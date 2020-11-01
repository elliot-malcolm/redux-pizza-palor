import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import CustomerInformation from '../CustomerInformation/CustomerInformation';
import Checkout from '../Checkout/Checkout';
import { connect } from 'react-redux';

class App extends Component {

  state={
    menu: [],
  }

  componentDidMount = () => {
    this.getMenu();
  }

  getMenu = () => {
    axios.get( '/api/pizza' ).then((response) =>{
      console.log('pies ', response.data);
      this.props.dispatch({
        type: 'PIZZA_MENU_LOAD', payload: response.data
      })
    }).catch((error) => {
      alert( 'error on pies' )
      console.log(error);
    })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img alt='delish' src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <>
        <Menu />
        <CustomerInformation />
        <Checkout />
        </>
      </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(App);
