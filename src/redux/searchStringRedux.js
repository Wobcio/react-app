
// action names
const UPDATE_SEARCHING = 'app/cards/searching/UPDATE_SEARCHING'

// action creators
export const updateSearching = payload => ({type: UPDATE_SEARCHING, payload});


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHING:
        return action.payload
      default:
        return statePart;
    }
}

export default searchStringReducer;
  