import React, {Component} from 'react';

export default class Login extends Component {

    state = {
        users:[
            {
                user:"Pesho",
                pass:"123"
            },
            {
                user:"Gosho",
                pass:"123"
            },
            {
                user:"Tosho",
                pass:"123"
            }
        ],
        user:"",
        pass:"",
        loginError:false
    }

    render() {

        const loginError = this.state.loginError ? <h1>Greshka</h1> : ""

        return (
            <div>
                <input value={this.state.user} onChange={(e) => {this.setState({...this.state, user:e.target.value})}}/>
                <input type="password" value={this.state.pass} onChange={(e) => {this.setState({...this.state, pass:e.target.value})}}/>
                <button onClick={() => {this.handleSubmit()}}>login</button>
                <br/>
                {loginError}
            </div>
        );
    }

    handleSubmit() {
        let hasUser = this.state.users.find((user) => {return user.user === this.state.user && user.pass === this.state.pass});
        if (!hasUser) {
            this.setState({...this.state, loginError:true})
        }
    }
}