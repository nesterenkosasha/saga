import React, { Component } from 'react';
import { connect } from 'react-redux'
import Admins from "./Admins"
import Menu from './Menu'
import PropTypes from 'prop-types';

class FirstPage extends Component{

    toRender = () => {
        if(this.props.reducerAuth === true){
            return <Menu />
        } else {
            return <Admins />
        }
    } 

    render(){
       return(
           <div>{this.toRender()}</div>
       )
    }    
}
  
const mapStateToProps = state => {
        return state
    }

export default connect (mapStateToProps)(FirstPage)

FirstPage.propTypes = {
    reducerAuth: PropTypes.bool
} 