
const reducerFilter = (state = {}, action) => {
    console.log("ACTIONS", action)
    const { type, payload } = action
    switch(type){
        case "filter" : {
            console.log("reducerFilter", payload)
            return payload
        }
         
    }
    return state
    }
    export default reducerFilter;
     