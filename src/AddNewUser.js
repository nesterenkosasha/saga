import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addNewUser } from './actions/index.js'


class AddNewUser extends Component {
    handelSubmit=(e) => {
        e.preventDefault()
        this.props.addNewUser(this.firstName.value, this.lastName.value, this.age.value)
        console.log(this.age.value, this.firstName.value, this.lastName.value)
    }

  render() {

      console.log(this.props)
    return (
        <div className="popUp">
        <form action="#" onSubmit={this.handelSubmit}>
        <input ref={input => this.firstName = input} handelSubmit
        placeholder="first name"
        type="text" name="firstName"/>   
        <input ref={input => this.lastName = input} 
        placeholder="last name"
        type="text" name="lastName" />   
        <input ref={input => this.age = input}
        placeholder="your age" 
        type="text" name="age" />   
        <button>OK</button>
        </form>        
          <p> Add New User... </p>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
        addNewUser: () => dispatch(addNewUser()) 
    }
  };


export default connect (null, mapDispatchToProps)(AddNewUser)