import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getUsers, addNewUser } from './actions';
import Table from './Table.js'
import Loading from './Loading.js'
import { Link } from "react-router-dom";



class Users extends Component {
    componentDidMount(){
        this.props.fetch_start()
      }

    render(){
        console.log("USERS", this.props)
        return(
            <div className="main" >
            <button 
            // onClick={this.props.addNewUser}
            ><Link to="/addNewUser">ADD NEW USER</Link></button>
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
    console.log(state.reducerUsers)
    return {
        users: state.reducerUsers,
        isLoading: state.reducerPanding
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetch_start: () => dispatch(getUsers()),
    //   addNewUser,
    }
  };

export default connect (mapStateToProps, mapDispatchToProps)(Users)