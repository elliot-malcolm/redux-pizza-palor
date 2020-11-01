import React, {Component} from 'react';
// import { render } from 'react-dom';
import { connect } from 'react-redux';

class MenuItem extends Component {
    render(){
        return(
            <>
            {this.props.item.name}
            <p>{this.props.item.description}</p>
            </>
        )
    }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(MenuItem);