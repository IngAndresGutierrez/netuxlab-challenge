/* import external modules */
import '@fontsource/roboto'
import { createTheme } from '@material-ui/core/styles'

/** @description This is a functional component for configuration theme Material UI
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name theme
 *  @returns {Component} Returns the configuration theme of Material UI component
 **/

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1F9547',
    },
    secondary: {
      main: '#3F3F41',
    },
    action: {
      disabledBackground: '#2d3580',
      disabled: '#E5E5E5',
    },
  },
})

export default theme
