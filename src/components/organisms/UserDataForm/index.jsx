/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Grid,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* import internal modules */
import { useStyles } from './styles'
import { setUser } from '../../../redux/actions/user/user'
import {
  setHandleAlert,
  setHandleDialog,
} from '../../../redux/actions/common/common'

/** @description This is a functional component user data form
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name UserDataForm
 *  @returns {Component} Returns the user data form
 **/

const UserDataForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
    names: '',
    lastNames: '',
    documentType: '',
    documentNumber: '',
  })
  const turn = {
    siteName: 'Cruz verde - Manizales',
    siteAddress: ' Cra 23 # 45 - 89, Centro',
    date: '12-12-2022 08:00 a.m.',
  }
  const clicksButtonContinue = useSelector((state) => state.user.flagCount)
  const flagClearData = useSelector((state) => state.user.flagClear)

  useEffect(() => {
    if (clicksButtonContinue >= 1) {
      fieldsValidations()
    }
  }, [clicksButtonContinue])

  useEffect(() => {
    if (flagClearData) {
      clearData()
    }
  }, [flagClearData])

  const clearData = () => {
    const newData = {
      names: '',
      lastNames: '',
      documentType: '',
      documentNumber: '',
    }
    setUserInfo(newData)
  }

  const saveDataUserFunction = () => {
    const { names, lastNames, documentType, documentNumber } = userInfo

    if (names && lastNames && documentType && documentNumber) {
      dispatch(setUser({ ...userInfo, turn }))
      dispatch(setHandleDialog(true))
    }

    if (!names || !lastNames || !documentType || !documentNumber) {
      dispatch(
        setHandleAlert({
          status: true,
          severity: 'warning',
          message: 'All fields are required',
        })
      )
    }
  }

  const fieldsValidations = () => {
    saveDataUserFunction()
  }

  const handleChange = (event) => {
    const value = event.target.value
    setUserInfo({
      ...userInfo,
      [event.target.name]: value,
    })
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={10}>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            className={classes.title}
          >
            Ingresa tus datos
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <FormControl className={classes.formControl}>
            <InputLabel id="document-type-select-label">
              Document Type
            </InputLabel>
            <Select
              name="documentType"
              onChange={handleChange}
              value={userInfo.documentType}
              labelId="document-type-select-label"
            >
              <MenuItem value={'Cédula ciudadanía'}>Cédula ciudadanía</MenuItem>
              <MenuItem value={'Cédula extrangería'}>
                Cédula extranjería
              </MenuItem>
              <MenuItem value={'Pasaporte'}>Pasaporte</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <FormControl className={classes.formControl}>
            <TextField
              name="documentNumber"
              label="Document Number"
              onChange={handleChange}
              value={userInfo.documentNumber}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <FormControl className={classes.formControl}>
            <TextField
              name="names"
              label="Names"
              value={userInfo.names}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <FormControl className={classes.formControl}>
            <TextField
              name="lastNames"
              label="Last Names"
              onChange={handleChange}
              value={userInfo.lastNames}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container className={classes.siteInfoContainer}>
        <Grid item xs={10}>
          <Typography>{turn.siteName}</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography color="textSecondary" variant="body2">
            {turn.siteAddress}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography color="textSecondary" variant="body2">
            {turn.date}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserDataForm
