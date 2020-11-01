import React, {Component} from 'react';
// import { render } from 'react-dom';
import { connect } from 'react-redux';
import './MenuItem.css';

class MenuItem extends Component {
    render(){
        return(
            <div className = "itemWrapper">
                <img alt={this.props.item.name} src={this.props.item.image_path}/>
                <p className="name">{this.props.item.name}</p>
                <p className="price">{this.props.item.price}</p>
                <p className="description">{this.props.item.description}</p>
                <button>Add</button>
            </div>
        )
    }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(MenuItem);