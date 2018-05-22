import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getOneUser } from './actions';
import { withRouter } from 'react-router'
//import AddNewUser from './AddNewUser.js'
import { toDelete, updateUser } from './actions/index.js'
import './App.css';


class UserId extends Component {
    handelCloseClick = (e) => {
        e.preventDefault()
       // this.props.userOpen(false)
       // console.log("\\", this.props.popUpOpen(false))
       this.props.history.push('/users')
    }

    handelUpdate = (e, id) => {
       // this.firstName.value = ""
       e.preventDefault()

        console.log(this.firstName.value, this.lastName.value, this.age.value)
        this.props.updateUser({
            id,
            firstName: this.firstName.value, 
            lastName: this.lastName.value, 
            age: this.age.value
        })
    }
    // handelChangeToInput = (e) => {
    //     e.preventDefault()

    //     console.log("id",e.target.id)

    // }

    handelDeleteClick = (e, id) => {
        e.preventDefault()
        this.props.toDelete(id)
    }

    render(){
       console.log("userID", this.props)
        let user = this.props.reducerUsers.find(u => u.id === Number(this.props.match.params.id))
        return(
            <div>
                {
                    user && <div className="popUp">
                    <button onClick={this.handelCloseClick} className="btnDel">x</button>
                    <form action="#" 
                    onSubmit={(e) => this.handelUpdate(e, user.id)} 
                    className="popUpForm">
                    First name: <input defaultValue={user.firstName} className="input"
                    // onInput={this.handelUpdate}
                    ref={input => this.firstName = input}
                    type="text" 
                    // name="firstName"
                    />                     
                    Last name: <input ref={input => this.lastName = input} 
                    defaultValue={user.lastName} className="input"
                    type="text" name="lastName" />   
                    <input ref={input => this.age = input}
                    defaultValue={user.age}  className="input"
                    type="text" name="age" />   
                    <div>
                    <button className="btnInput">UPDATE</button>
                    <button className="btnInput"
                     onClick={(e) => this.handelDeleteClick(e, user.id)}
                    >DELETE</button>
                    </div> 
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

const mapDispatchToProps = {
        toDelete,
        // changeToInput: () => dispatch({
        //     type: "changeToInput",
        //     payload: "input"
        // }),
        updateUser
        // : (obj) => dispatch({
        //     type: "updateUser",
        //     payload: obj
        // })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserId))

{/* <div id="firstName" onClick={this.handelChangeToInput}>{user.firstName}</div>
<div>{user.lastName}</div>
<div>{user.age}</div>
<div>{user.visits}</div>
<div>{user.progress}</div>
<div>{user.status}</div> */}


//    userOpen : (value) => dispatch({
    //     type: "userOpen",
    //     payload: value


