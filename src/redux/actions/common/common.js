/* import internal modules */
import {
  HANDLE_STEPPER,
  HANDLE_UTIL_ALERT,
  HANDLE_UTIL_DIALOG,
  HANDLE_SELECTED_THEME,
} from '../../types/types'

export const setHandleStepper = (handleStepper) => ({
  type: HANDLE_STEPPER,
  payload: { handleStepper },
})

export const setHandleAlert = (handleAlert) => ({
  type: HANDLE_UTIL_ALERT,
  payload: { handleAlert },
})

export const setHandleDialog = (handleDialog) => ({
  type: HANDLE_UTIL_DIALOG,
  payload: { handleDialog },
})

export const setHandleSelectedTheme = (status) => ({
  type: HANDLE_SELECTED_THEME,
  payload: { status },
})
