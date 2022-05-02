/* import internal modules */
import {
  HANDLE_STEPPER,
  HANDLE_UTIL_ALERT,
  HANDLE_UTIL_DIALOG,
  HANDLE_SELECTED_THEME,
} from '../../types/types'

const initialState = {
  handleAlert: { message: '', status: false, severity: 'success' },
  handleSelectedTheme: false,
  handleDialog: false,
  handleStepper: 0,
}

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_UTIL_ALERT:
      return Object.assign({}, state, {
        handleAlert: action.payload.handleAlert,
      })

    case HANDLE_UTIL_DIALOG:
      return Object.assign({}, state, {
        handleDialog: action.payload.handleDialog,
      })

    case HANDLE_SELECTED_THEME:
      return Object.assign({}, state, {
        handleSelectedTheme: action.payload.status,
      })

    case HANDLE_STEPPER:
      return Object.assign({}, state, {
        handleStepper: action.payload.handleStepper,
      })

    default:
      return state
  }
}

export default CommonReducer
