import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toDelete, updateUser } from './actions/index.js'
import './App.css';
import PropTypes from 'prop-types';


class UserId extends Component {
    constructor(props){
        super(props)
        this.state={}
    }      
    handelCloseClick = (e) => {
        e.preventDefault()
       this.props.history.push('/users')
    }

    handelUpdate = (e, user) => {
        e.preventDefault()
        const updatedUser = this.state
            this.props.updateUser(Object.assign({}, user, updatedUser))
            this.props.history.push('/users')
     }

    handelDeleteClick = (e, id) => {
        e.preventDefault()
        this.props.toDelete(id)
    }

    handelChange = (target) => {
        this.setState({[target.name]: target.value})
    }

    render(){
        let user = this.props.reducerUsers.find(u => u.id === Number(this.props.match.params.id))
        return(
            <div>
                {
                    user 
                        ? (<div className="popUp">
                            <button 
                            onClick={this.handelCloseClick}
                            className="btnDel">x</button>
                            <form action="#" 
                            onSubmit={(e) => this.handelUpdate(e, user)} 
                            onChange={({ target }) => this.handelChange(target)}
                            className="popUpForm">
                            First name: <input defaultValue={user.firstName} className="input"
                            type="text" 
                            name="firstName"
                            />                     
                            Last name: <input type="text" name="lastName"
                            defaultValue={user.lastName} className="input"/>   
                            Age: <input defaultValue={user.age}  className="input"
                            type="text" name="age" />
                            Visits: <input defaultValue={user.visits}  className="input"
                            type="text" name="visits" />
                            Progress: <input defaultValue={user.progress}  className="input"
                            type="text" name="progress" />
                            Status: <input defaultValue={user.status}  className="input"
                            type="text" name="status" />   
                            <div>
                            <button className="btnInput">UPDATE</button>
                            <button className="btnInput"
                            onClick={(e) => this.handelDeleteClick(e, user.id)}
                            >DELETE</button>
                            </div> 
                            </form>  
                            </div>
                        ) 
                        : null
                    }
            </div>      
    )
}
} 

const mapStateToProps = (state) => {
    return{
        reducerUsers: state.reducerUsers,
    }
}

const mapDispatchToProps = {
        toDelete,
        updateUser  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserId))

UserId.propTypes = {    
    reducerUsers: PropTypes.array,
    toDelete: PropTypes.func,
    updateUser: PropTypes.func
}