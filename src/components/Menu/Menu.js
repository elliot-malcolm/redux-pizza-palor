import React, {Component} from 'react';
// import { render } from 'react-dom';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';

class Menu extends Component {
    render(){
        return(
            <>
            {this.props.reduxState.pizzaMenu.map((item) => {
                return <li key={item.id}><MenuItem item={item}/></li>
            })}
            </>
        )
    }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Menu);