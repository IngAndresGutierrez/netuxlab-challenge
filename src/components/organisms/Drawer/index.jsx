/* import external modules */
import clsx from 'clsx'
import {
  List,
  Drawer,
  AppBar,
  Toolbar,
  Avatar,
  Button,
  Divider,
  useTheme,
  ListItem,
  IconButton,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {
  Mail,
  Menu,
  Inbox,
  People,
  ChevronLeft,
  ChevronRight,
  AccountCircle,
} from '@material-ui/icons'
import { useState } from 'react'

/* import internal modules */
import useStyles from './styles'
import AlertDialog from '../AlertDialog'
import LogoImage from '../../../assets/logo.png'

/** @description This is a functional component for mini drawer
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name MiniDrawer
 *  @returns {Component} Returns the minidrawer component
 **/

const MiniDrawer = ({ children }) => {
  const theme = useTheme()
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const goToPage = (path) => {
    console.log('goToPage', path)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const goToRoute = (route) => {
    console.log('goToRoute', route)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Avatar
            alt="Logo"
            src={LogoImage}
            className={classes.avatar}
            onClick={() => goToPage('/')}
          />
          <Typography onClick={() => goToPage('/')} variant="h6" noWrap>
            Netux Lab Challenge
          </Typography>
          <div className={classes.grow} />
          <Button onClick={() => goToPage('/')} color="inherit">
            Login
          </Button>
          <Button onClick={() => goToPage('/subscription')} color="inherit">
            Plans
          </Button>
          <Button onClick={() => goToPage('/getapp')} color="inherit">
            Download
          </Button>
          <AlertDialog title="Handle user" iconOpenButton={<AccountCircle />}>
            <h3>user</h3>
          </AlertDialog>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <h2>Netux Lab</h2>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => goToRoute('/users')}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary={'Usuarios'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {['All mail'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default MiniDrawer
