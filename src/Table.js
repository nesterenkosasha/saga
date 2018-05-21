import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
// import { withRouter } from 'react-router'



export default class Table extends Component {
  handelClick = (e, id) => {
    e.preventDefault()
    console.log("LINK", id)
    //this.props.history.push(`/users/${id}`)

  }

    render(){
        console.log(this.props)
        return(
          <div>
            <table className="tableRow">
              <tr>
                <th>№</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
              </tr>
                <tbody>
                  {
                    this.props.users.map(el => (
                      <tr className="tableRow" key={el.id}>
                      <td>{el.id}</td>
                      <td><Link to={`/users/${el.id}`}>{el.firstName}</Link></td>
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
    // export default withRouter(Table)
