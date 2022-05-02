/* import internal modules */
import {
  HANDLE_USER,
  HANDLE_SAVE_DATA_USER,
  HANDLE_CLEAR_DATA_USER,
} from '../../types/types'

export const setUser = (user) => ({
  type: HANDLE_USER,
  payload: { user },
})

export const setSaveDataUser = () => ({
  type: HANDLE_SAVE_DATA_USER,
  payload: {},
})

export const setClearDataUser = () => ({
  type: HANDLE_CLEAR_DATA_USER,
  payload: {},
})
