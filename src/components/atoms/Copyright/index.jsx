/* import external modules */
import { Typography } from '@material-ui/core'

/** @description This is a functional component for copyright
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Copyright
 *  @returns {Component} Returns the copyright component
 **/

const Copyright = () => {
  const currentDate = new Date().getFullYear()

  return (
    <Typography
      align="center"
      variant="body2"
      color="textSecondary"
      style={{ marginBottom: 40, marginTop: 30 }}
    >
      {'Copyright © Netux Lab Challenge '}
      {currentDate}
      {'. '}
      {'All rights reserved.'}
    </Typography>
  )
}

export default Copyright
