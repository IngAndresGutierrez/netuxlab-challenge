/* import external modules */
import { Grid } from '@material-ui/core'

/* import internal modules */
import { useStyles } from './styles'
import UserDataForm from '../../organisms/UserDataForm'
import ImageTurnProcess from '../../atoms/ImageTurnProcess'

/** @description This is a functional component user data form
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name UserDataFormLayout
 *  @returns {Component} Returns the user data form
 **/

const UserDataFormLayout = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.root}
      justifyContent="center"
    >
      <Grid item xs={12} md={5}>
        <UserDataForm />
      </Grid>
      <Grid item xs={12} md={7} className={classes.imageProcess}>
        <ImageTurnProcess />
      </Grid>
    </Grid>
  )
}

export default UserDataFormLayout
