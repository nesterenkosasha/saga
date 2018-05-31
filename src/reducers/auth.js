const reducerAuth = (state = false, action) => {+
    console.log(action)
    const { type } = action
    switch(type){
      case "auth" : {
          return true
        }
    }
    return state
  }
export default reducerAuth;