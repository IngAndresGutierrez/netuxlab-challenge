/* import external modules */
import Pdf from 'react-to-pdf'
import { createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Typography } from '@material-ui/core'

/* import internal modules */
import Logo from '../../atoms/Logo'
import { useStyles } from './styles'
import {
  setHandleDialog,
  setHandleStepper,
} from '../../../redux/actions/common/common'
import { setClearDataUser, setUser } from '../../../redux/actions/user/user'

/** @description This is a functional component main view about my turn
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name DataTurn
 *  @returns {Component} Returns the main about my data turn component
 **/

const DataTurn = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const ref = createRef()
  const dataTurn = useSelector((state) => state.user.user)

  const newTurn = () => {
    dispatch(setHandleDialog(false))
    dispatch(setHandleStepper(0))
    dispatch(setUser({}))
    dispatch(setClearDataUser())
  }

  return (
    <>
      <div ref={ref}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
        >
          <Grid item xs={7}>
            <Logo />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
        >
          <Grid item xs={9}>
            <Typography
              variant="h5"
              component="h5"
              align="center"
              color="primary"
              className={classes.title}
            >
              ¡Has solicitado tu {<br />} turno con éxito!
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
        >
          <Grid item xs={9}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              className={classes.root}
            >
              <Typography align="center" color="textSecondary">
                Nombre
              </Typography>
              <Typography align="center">{`${dataTurn.names} ${dataTurn.lastNames}`}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              className={classes.root}
            >
              <Typography align="center" color="textSecondary">
                Sede
              </Typography>
              <Typography align="center">{`${dataTurn?.turn?.siteName}, ${dataTurn?.turn?.siteAddress}`}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              className={classes.root}
            >
              <Typography align="center" color="textSecondary">
                Fecha
              </Typography>
              <Typography align="center">{dataTurn?.turn?.date}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
        >
          <Grid item xs={9}>
            <Pdf targetRef={ref} filename="my_turn.pdf">
              {({ toPdf }) => (
                <Button
                  autoFocus
                  color="primary"
                  onClick={toPdf}
                  variant="filled"
                  style={{ backgroundColor: '#1F9547', color: '#fff' }}
                  className={classes.downloadPdfButton}
                >
                  Download PDF
                </Button>
              )}
            </Pdf>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
        >
          <Grid item xs={9}>
            <Button
              autoFocus
              color="primary"
              onClick={newTurn}
              variant="outlined"
              className={classes.newTurnButton}
            >
              Solicitar nuevo turno
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default DataTurn
