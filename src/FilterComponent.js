import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {  } from './actions';


class FilterComponent extends Component {
    constructor(props){
        super(props)
            this.state={
                input: "",
                select: "firstName"    
        }
    }

      componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps", nextProps, this.state)

      }
      handelSelect = (e) => {
              this.setState({select: e.target.value})
          }
          handelInput = (e) => {
            this.setState({input: e.target.value})
          }
          handelSelectSubmit = (e) => {
              e.preventDefault()
            console.log("SAB",this.state)
            //this.props.filter(this.state)
          }

      
      render(){
          return(               
              <form onSubmit={this.handelSelectSubmit}>
                <select onChange={this.handelSelect}>
                    <option value="firstName">First name</option>
                    <option value="lastName">Last name</option>
                    <option value="age">age</option>
                    <option value="visits">visits</option>
                    <option value="progress">progress</option>
                    <option value="status">status</option>
                </select>
                <input type="text" onInput={this.handelInput}/>
                <button>SUBMIT</button>
            </form>
            
        )
    }    
}
const mapStateToProps = state => {
    return {
        users: state.reducerUsers,
        isLoading: state.reducerPanding,
        reducerPopUp: state.reducerPopUp,
        reducerAuth: state.reducerAuth
    }
}

// const mapDispatchToProps = {
//     getUsers,
//     popUpOpen,
//     filter
// };

export default connect ()(FilterComponent)

    //   handelOpenClick = (e) => {
    //     e.preventDefault()
    //     this.props.popUpOpen(true)
    //   }
    //   handelSelect = (e) => {
    //       this.setState({select: e.target.value})
    //   }
    //   handelInput = (e) => {
    //     this.setState({input: e.target.value})
    //   }
    //   handelSelectSubmit = (e) => {
    //       e.preventDefault()
    //     console.log("SAB",this.state)
    //     this.props.filter(this.state)
    //   }