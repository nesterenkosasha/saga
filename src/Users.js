import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getUsers, addNewUser } from './actions';
import Table from './Table.js'
import Loading from './Loading.js'
//import { Link } from "react-router-dom";
import AddNewUser from './AddNewUser.js'


class Users extends Component {
    componentDidMount(){
        this.props.fetch_start()
      }

      handelOpenClick = (e) => {
        e.preventDefault()
        this.props.popUpOpen(true)
      //  console.log("reducerPopUp", this.props.reducerPopUp)
      }

    render(){
    //    console.log("USERS", this.props)
        return(
            <div className="main" >
            <button className="btn"
            onClick={this.handelOpenClick}
            >
            ADD NEW USER
            </button>
            {
                this.props.reducerPopUp
                    ? <AddNewUser />
                    : null
            }
            <h1>Title: USERS</h1>
            {
                this.props.isLoading
                    ? <Loading />
                    : <Table users={this.props.users}/>                    
            }
          </div>
        )
    }
}
const mapStateToProps = state => {
    // console.log(state.reducerUsers)
    return {
        users: state.reducerUsers,
        isLoading: state.reducerPanding,
        reducerPopUp: state.reducerPopUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch_start: () => dispatch(getUsers()),
        popUpOpen: (value) => dispatch({
            type: "popUpOpen",
            payload: value
        })
    }
  };

export default connect (mapStateToProps, mapDispatchToProps)(Users)