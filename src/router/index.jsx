/* import external modules */
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* import internal modules */
import Loading from '../components/atoms/Loading'
const LazyMyTurn = lazy(() => import('../pages/myTurn'))
const LazyPageNotFound = lazy(() => import('../pages/notFound'))

/** @description This is a functional component for main router app
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Router
 *  @returns {Component} Returns the main router component
 **/

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LazyMyTurn />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RouterComponent
