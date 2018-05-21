import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getOneUser } from './actions';
import { withRouter } from 'react-router'
//import AddNewUser from './AddNewUser.js'
import { toDelete } from './actions/index.js'
import './App.css';


class UserId extends Component {
    handelCloseClick = (e) => {
        e.preventDefault()
       // this.props.userOpen(false)
       // console.log("\\", this.props.popUpOpen(false))
       this.props.history.push('/users')
    }

    handelUpdate = () => {
        this.firstName.value = ""
        
        console.log(this.firstName.value)
    }
    handelChangeToInput = (e) => {
        e.preventDefault()

        console.log("id",e.target.id)

       // this.props.changeToInput(id)
    }

    handelDeleteClick = (e, id) => {
        e.preventDefault()
        this.props.toDelete(id)
    }

    render(){
       console.log("userID", this.props)
        let user = this.props.reducerUsers.find(u => u.id === Number(this.props.match.params.id))
        return(
            <div calssName="x">
                {
                    user && <div className="popUp">
                    <button onClick={this.handelCloseClick} className="btnDel">x</button>
                    <form action="#" 
                    // onSubmit={this.handelUpdate} 
                    className="popUpForm">
                    <div id="firstName" onClick={this.handelChangeToInput}>{user.firstName}</div>
                    <div>{user.lastName}</div>
                    <div>{user.age}</div>
                    <div>{user.visits}</div>
                    <div>{user.progress}</div>
                    <div>{user.status}</div>
                    </form>  
                    </div> || null

                }
            </div>
        
    )
}
} 

const mapStateToProps = (state) => {
    return{
        reducerUsers: state.reducerUsers,
        reducerOpen: state.reducerOpen,
        reducerchangeToInput: state.reducerchangeToInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toDelete,
    changeToInput: () => dispatch({
        type: "changeToInput",
        payload: "input"
    })
    }    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserId))

//    userOpen : (value) => dispatch({
    //     type: "userOpen",
    //     payload: value



    {/* <input value={user.firstName} className="input"
    onFocus={this.handelUpdate}
    ref={input => this.firstName = input}
    type="text" name="firstName"/> 
    
    <input ref={input => this.lastName = input} 
    value={user.lastName} className="input"
    type="text" name="lastName" />   
    <input ref={input => this.age = input}
    value={user.age}  className="input"
    type="text" name="age" />   
    <div>
    <button className="btnInput">UPDATE</button>
    <button className="btnInput"
     onClick={(e) => this.handelDeleteClick(e, user.id)}
    >DELETE</button>
    </div> */}