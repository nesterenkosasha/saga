import React, { Component } from 'react';
import '../../App.css'
export default class Table extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div>
        <table className="tableRow">
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
              {
                this.props.users.map(el => (
                  <tr className="tableRow" key={el.id}>
                  <td>{el.id}</td>
                  <td><a href="#">{el.firstName}</a></td>
                  <td>{el.lastName}</td>
                  <td>{el.age}</td>
                  </tr>
                ))
              }
        </table>
    </div>
  )
  }
}
