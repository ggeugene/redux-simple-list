import { ADD_ITEM } from '../actions/index'
import { combineReducers } from 'redux'

const INITIAL_STATE = []

const items = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ]
    default:
      return state
  }
}

export default combineReducers({
  items,
})
