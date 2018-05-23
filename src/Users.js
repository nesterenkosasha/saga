import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getUsers, popUpOpen, addNewUser, filter, shouldToFilter } from './actions';
import Table from './Table.js'
import Loading from './Loading.js'
import AddNewUser from './AddNewUser.js'
import PropTypes from 'prop-types';


class Users extends Component {
    constructor(props){
        super(props)
            this.state={
                input: "",
                select: "firstName"    
        }
    }

    componentDidMount(){
        this.props.getUsers()
      }

      componentWillReceiveProps(nextProps){   
        const shoudFetchUsers = (
            this.props.reducerFilter.input === nextProps.reducerFilter.input
            && this.props.reducerFilter.select === nextProps.reducerFilter.select
        );

        if(!shoudFetchUsers) {
            this.props.filter(nextProps.reducerFilter);
        }

      }

      handelOpenClick = (e) => {
        e.preventDefault()
        this.props.popUpOpen(true)
      }
      handelSelect = (e) => {
          const state = this.setState({select: e.target.value})
      }
      handelInput = (e) => {
        this.setState({input: e.target.value})
      }
      handelSelectSubmit = (e) => {
          e.preventDefault()
          this.props.shouldToFilter(this.state)
       }

    render(){
        if(this.props.reducerAuth){
            return(               
            <div className="main" >
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
        } else {
            return null
        }
        
    }
}
const mapStateToProps = state => {
    return {
        users: state.reducerUsers,
        isLoading: state.reducerPanding,
        reducerPopUp: state.reducerPopUp,
        reducerAuth: state.reducerAuth,
        reducerFilter: state.reducerFilter
    }
}

const mapDispatchToProps = {
    getUsers,
    popUpOpen,
    filter,
    shouldToFilter
};

export default connect (mapStateToProps, mapDispatchToProps)(Users)

Users.propTypes = {    
    users: PropTypes.array,
    isLoading: PropTypes.bool,
    reducerPopUp: PropTypes.bool,
    reducerAuth: PropTypes.bool,
    reducerFilter: PropTypes.object,
    getUsers: PropTypes.func,
    popUpOpen: PropTypes.func,
    filter: PropTypes.func,
    shouldToFilter: PropTypes.func
}