import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from './../redux/actions';

class FriendBox extends Component {
    // Constructor to create initial state, and bind functions to this
    constructor(props) {
        super(props);

        this.state = {
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Function that updates the value of userinput
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
        console.log(this.state.userInput)
    }
    handleSubmit() {
        this.props.addFriend(this.state.userInput);
        this.setState({
            userInput: ''
        })
    }

    render() {

        // JSX
        return (
            <div>
                <h3>Add a new friend:</h3>
                <input type="text" onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={ this.handleSubmit }>Click me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        friendsList: state.friends
    }
}
export default connect(mapStateToProps, { addFriend })(FriendBox);
