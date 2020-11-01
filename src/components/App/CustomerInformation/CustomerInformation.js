import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class CustomerInformation extends Component {
    render(){
        return(
            <div>
                <h1>CustomerInformation</h1>
            </div>
        )
    }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(CustomerInformation);