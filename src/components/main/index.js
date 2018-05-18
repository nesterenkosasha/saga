import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions';
import Table from '../table'
import "../../App.css"
//import { loadItems, removeItem, toggleTodoDone } from '../actions';
import '../../App.css';

class Main extends React.Component{

  componentDidMount(){
    this.props.fetch_start()
  }

  render(){
    // if (this.props.todos.length === 0) {
    //   return <TodosStub />
    // }
    console.log("11", this.props)
    return(
      <div className="main">
      <div>Title</div>
      <Table users={this.props.users} />
      </div>
  )
  }
}
const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => {
  return {
    fetch_start: () => dispatch(getUsers())
  }
  // loadItems,
  // removeItem,
  // toggleTodoDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
