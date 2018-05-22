const reducerAuth = (state = false, action) => {
    console.log("ACTIONS", action)
    const { type } = action
    switch(type){
      case "authSuccess" : {
          return true
        }
      case "authFail" : {
          return false
        }    
    }
    return state
  }
  export default reducerAuth;
 