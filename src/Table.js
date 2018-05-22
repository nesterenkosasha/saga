import React, { Component } from 'react';
import './App.css';
 import { withRouter } from 'react-router'



class Table extends Component {
  handelClick = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/users/${id}`)

  }

    render(){
        return(
          <div>
            <table className="tableRow">
            <thead>
              <tr>
                <th>№</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
              </tr>
              </thead>
                <tbody>
                  {
                    this.props.users.map(el => (
                      <tr className="tableRow" key={el.id} onClick={(e) => this.handelClick(e, el.id)}>
                      <td>{el.id}</td>
                      <td>{el.firstName}</td>
                      <td>{el.lastName}</td>
                      <td>{el.age}</td>
                      </tr>
                    ))
                  }
                </tbody>
            </table>
        </div>
      )
      }
    }
     export default withRouter(Table)
