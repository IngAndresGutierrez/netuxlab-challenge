/* import external modules */
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

/* import internal modules */
import theme from './theme'
import Router from './router'
import Loading from './components/atoms/Loading'
import SnackBar from './components/molecules/SnackBar'
import { store, persistor } from './redux/storeConfig/store'

/** @description This is a functional component for redux, redux persist configuration and rooter called
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name App
 *  @returns {Component} Returns the configuration and router
 **/

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router />
          <SnackBar />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
