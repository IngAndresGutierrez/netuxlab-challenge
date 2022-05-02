/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Button,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/* import internal modules */
import { setHandleDialog } from '../../../redux/actions/common/common'

/** @description This is a functional component for generic alert dialog
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name AlertDialog
 *  @returns {Component} Returns the alert dialog component
 **/

const AlertDialog = ({
  title,
  children,
  contentText,
  iconOpenButton,
  showOpenButton,
  showCloseButton,
}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const handleDialog = useSelector((state) => state.common.handleDialog)

  useEffect(() => {
    handleDialogFunction()
  }, [handleDialog])

  const handleDialogFunction = () => {
    if (handleDialog) {
      setOpen(true)
    }
    if (!handleDialog) {
      setOpen(false)
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    dispatch(setHandleDialog(false))
  }

  return (
    <div>
      {!iconOpenButton && showOpenButton && (
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      )}
      {iconOpenButton && (
        <IconButton edge="end" color="inherit" onClick={handleClickOpen}>
          {iconOpenButton}
        </IconButton>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          {children}
        </DialogContent>
        {showCloseButton && (
          <DialogActions>
            <Button
              autoFocus
              color="primary"
              variant="contained"
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  )
}
export default AlertDialog
