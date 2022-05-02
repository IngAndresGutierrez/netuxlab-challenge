/* import internal modules */
import { useStyles } from './styles'

/** @description This is a functional component image process
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name ImageTurnProcess
 *  @returns {Component} Returns the image process component
 **/

const ImageTurnProcess = () => {
  const classes = useStyles()

  return <div className={classes.image} />
}

export default ImageTurnProcess
