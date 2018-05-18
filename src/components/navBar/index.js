import React from 'react'
import '../../App.css';
import { connect } from 'react-redux';

class NavBar extends React.PureComponent{

  render(){
    return(
      <div className="navBar">
      NAVBAR
      </div>
    )
  }
}
// const mapDispatchToProps = (dispatch) => {
//   mapDispatchToProps
// };


export default connect()(NavBar);
