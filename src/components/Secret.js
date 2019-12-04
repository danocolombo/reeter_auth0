import React, { Component } from 'react'

class Secret extends Component {
    render() {
        return (
            <div>
                <h2>Secret place</h2>
                <button onClick={this.props.auth.logout}>LOGOUT</button>
            </div>
        )
    }
}
export default Secret;