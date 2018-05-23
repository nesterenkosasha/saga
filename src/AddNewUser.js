import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addNewUser, popUpOpen } from './actions'
import PropTypes from 'prop-types';


class AddNewUser extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    handelSubmit=(e) => {
        e.preventDefault()
        const {firstName, lastName, age, visits, progress, status} = this.state
        if (firstName && lastName && age && visits && progress && status){
            this.props.addNewUser({ firstName, lastName, age, visits, progress, status })
            this.props.popUpOpen(false)        
        } else{
            alert ("Input is empty")
        }
    }
    handelCloseClick = (e) => {
        e.preventDefault()
        this.props.popUpOpen(false)
    }
    handelChange = (target) => {
        this.setState({[target.name]: target.value})
    }

  render() {
    return (  
        <div className="popUp">
            <button onClick={this.handelCloseClick} className="btnDel">x</button>
            <form action="#" onSubmit={this.handelSubmit} 
            onChange={({ target }) => this.handelChange(target)}
            className="popUpForm">
            <input placeholder="first name"  className="input"
            type="text" name="firstName"/>   
            <input placeholder="last name"  className="input"
            type="text" name="lastName"/>   
            <input placeholder="your age"  className="input"
            type="text" name="age"/>   
             <input placeholder="visits"  className="input"
            type="text" name="visits"/>
             <input placeholder="progress"  className="input"
            type="text" name="progress"/>
             <input placeholder="your status"  className="input"
            type="text" name="status"/>
            <button  className="btnInput">OK</button>
            </form>  
        </div>
    );
  }
}


const mapDispatchToProps = {
        addNewUser,
        popUpOpen
};

export default connect (null, mapDispatchToProps)(AddNewUser)

AddNewUser.propTypes = {    
    addNewUser: PropTypes.func,
    popUpOpen: PropTypes.func,
}