import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addNewUser, popUpOpen } from './actions/index.js'
//import { Link } from "react-router-dom";
import Table from './Table.js'


class AddNewUser extends Component {
    handelSubmit=(e) => {
        e.preventDefault()
        if (this.firstName.value && this.lastName.value && this.age.value){
            this.props.addNewUser({ firstName: this.firstName.value, 
            lastName: this.lastName.value, age: this.age.value })
        } else{
            alert ("Input is empty")
        }
        
            this.firstName.value =""
            this.lastName.value =""
            this.age.value =""
            
    }
    handelCloseClick = (e) => {
        e.preventDefault()
        this.props.popUpOpen(false)
    }

  render() {
    return (  
        <div className="popUp">
            <button onClick={this.handelCloseClick} className="btnDel">x</button>
            <form action="#" onSubmit={this.handelSubmit} 
            className="popUpForm">
            <input ref={input => this.firstName = input} handelSubmit
            placeholder="first name"  className="input"
            type="text" name="firstName"/>   
            <input ref={input => this.lastName = input} 
            placeholder="last name"  className="input"
            type="text" name="lastName" />   
            <input ref={input => this.age = input}
            placeholder="your age"  className="input"
            type="text" name="age" />   
            <button  className="btnInput">OK</button>
            </form>  
        </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
        addNewUser: (payload) => dispatch(addNewUser(payload)),
        popUpOpen: (value) => dispatch(popUpOpen(value))
    }
  };

  const mapStateToProps = state => {
    reducerPopUp: state.reducerPopUp
  };


export default connect (mapStateToProps, mapDispatchToProps)(AddNewUser)