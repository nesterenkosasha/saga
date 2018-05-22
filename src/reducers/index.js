export const reducerUsers = (state = [], action) => {
    console.log("ACTIONS", action)
    const { type, payload } = action
    switch(type){
      case "setUsers" : {
        return state = payload
      }
      case "addNewUserToreducer" : {
        console.log("addNewUserToreducer", payload)
        return [...state, payload]
      }
      case "deleteTodo": {
        const updated = state.filter(el => el.id !== +payload)
        return updated
      }
      case "updateUser": {
        console.log("reducer", payload)
      }
    }
    return state
  }

  export const reducerPanding = (state = "false", action) => {
   // console.log("ACTION", action)
    if(action.type == "spinerStart"){
        return state = action.payload
    }

    return state
  }

  export const reducerPopUp = (state = false, action) => {
    if(action.type == "popUpOpen"){
        return action.payload
    }
    return state
  }

  export const reducerOpen = (state = true, action) => {
    if(action.type == "userOpen"){
        return action.payload
    }
    return state
  }

  export const reducerchangeToInput = (state="", action) => {
    if(action.type == "changeToInput"){
        return action.payload
    }
    return state
  }
