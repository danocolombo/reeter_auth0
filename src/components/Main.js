import React, { Component } from 'react'

class Main extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    Hello, {this.props.name}<br/>
                    Do you want to see the secret area? <a href="/secret">Click Here</a>
                </p>
                <div>
                    <hr/>
                    Please login first
                    <hr/>
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
            </div>
        )
    }
}
export default Main;