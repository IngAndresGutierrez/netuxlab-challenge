/* import internal modules */
import MyTurnLayout from '../components/templates/MyTurnLayout'
import Copyright from '../components/atoms/Copyright'

/** @description This is a functional component main view about my turn
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name MyTurn
 *  @returns {Component} Returns the main view about my turn component view
 **/

const MyTurnView = () => {
  return (
    <>
      <MyTurnLayout />
      <Copyright />
    </>
  )
}

export default MyTurnView
