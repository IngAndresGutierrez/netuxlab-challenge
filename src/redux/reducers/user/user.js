/* import internal modules */
import {
  HANDLE_USER,
  HANDLE_SAVE_DATA_USER,
  HANDLE_CLEAR_DATA_USER,
} from '../../types/types'

const initialState = {
  user: {},
  flagCount: 0,
  flagClear: 0,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_USER:
      return Object.assign({}, state, { user: action.payload.user })

    case HANDLE_SAVE_DATA_USER:
      return Object.assign({}, state, { flagCount: state.flagCount + 1 })

    case HANDLE_CLEAR_DATA_USER:
      return Object.assign({}, state, { flagClear: state.flagClear + 1 })

    default:
      return state
  }
}

export default UserReducer
