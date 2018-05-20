export const reducerUsers = (state = [], action) => {
    console.log("ACTIONS", action)
    const { type, payload } = action
    switch(type){
      case "setUsers" : {
        return state = payload
      }
    }
    return state
  }

  export const reducerPanding = (state = "false", action) => {
    console.log("ACTION", action)
    if(action.type == "spinerStart"){
        return state = action.payload
    }

    return state
  }