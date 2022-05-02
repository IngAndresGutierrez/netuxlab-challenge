/* import internal modules */
import { useStyles } from './styles'

/** @description This is a functional component logo
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Logo
 *  @returns {Component} Returns the logo component
 **/

const Logo = () => {
  const classes = useStyles()

  return <div className={classes.logo} />
}

export default Logo
