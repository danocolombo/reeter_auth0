import React, { Component } from 'react';
import Auth from '../Auth';

class CallBack extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }
    render() {
        return (
            <div>
                <h3>Loading...</h3>
                <button onClick={this.props.logout}>LOGOUT</button>
            </div>
        )
    }
}
export default CallBack;