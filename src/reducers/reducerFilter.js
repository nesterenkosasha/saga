
const reducerFilter = (state = {}, action) => {
    const { type, payload } = action
    switch(type){
        case "filter" : {
            return payload
        }
        case "shouldToFilter": {
            return payload
        }
         
    }
    return state
    }
export default reducerFilter;