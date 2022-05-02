/* import internal modules */
import { Typography } from '@material-ui/core'
import Copyright from '../components/atoms/Copyright'

/** @description This is a functional component for not found page
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name NotFound
 *  @returns {Component} Returns the not found component view
 **/

const NotFound = () => {
  return (
    <>
      <Typography component="h4" variant="h4" align="center">
        Page Not Found
      </Typography>
      <Copyright />
    </>
  )
}

export default NotFound
