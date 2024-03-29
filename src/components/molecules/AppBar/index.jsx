/* import external modules */
import {
  Menu,
  Avatar,
  Button,
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  Lock,
  GetApp,
  Person,
  MoreVert,
  ExitToApp,
  AccountCircle,
  MonetizationOn,
} from '@material-ui/icons'
import { useState } from 'react'

/* import internal modules */
import useStyles from './styles'
import LogoImage from '../../../assets/logo.png'

/** @description This is a functional component for main app bar
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name AppBar
 *  @returns {Component} Returns the app bar component
 **/

const AppBarComponent = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const goToPage = (path) => {
    console.log('goToPage')
  }

  const logoutFunction = () => {
    console.log('logoutFunction')
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => goToPage('/profile')}>
        <IconButton
          aria-label="profile"
          aria-controls="primary-search-profile-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Person />
        </IconButton>
        <Button className={classes.item} color="inherit">
          Profile
        </Button>
      </MenuItem>
      <MenuItem onClick={logoutFunction}>
        <IconButton
          aria-label="logout"
          aria-controls="primary-search-logout-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToApp />
        </IconButton>
        <Button className={classes.item} color="inherit">
          Log out
        </Button>
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="plans"
          aria-controls="primary-search-plans-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <MonetizationOn />
        </IconButton>
        <Button
          onClick={() => goToPage('/subscription')}
          className={classes.item}
          color="inherit"
        >
          Plans
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="get app"
          aria-controls="primary-search-get-app-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <GetApp />
        </IconButton>
        <Button
          onClick={() => goToPage('/getapp')}
          className={classes.item}
          color="inherit"
        >
          Download
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="login of current user"
          aria-controls="primary-search-login-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Lock />
        </IconButton>
        <Button
          onClick={logoutFunction}
          className={classes.item}
          color="inherit"
        >
          Login
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Button
          onClick={() => goToPage('/')}
          className={classes.item}
          color="inherit"
        >
          Profile
        </Button>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Logo"
            src={LogoImage}
            className={classes.avatar}
            onClick={() => goToPage('/home')}
          />
          <Typography
            onClick={() => goToPage('/home')}
            className={classes.title}
            variant="h6"
            noWrap
          >
            Netux Challenge
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.grow} />
            <Button
              onClick={() => goToPage('/subscription')}
              className={classes.item}
              color="inherit"
            >
              Plans
            </Button>
            <Button
              onClick={() => goToPage('/getapp')}
              className={classes.item}
              color="inherit"
            >
              Download
            </Button>
            <Button
              onClick={() => goToPage('/')}
              className={classes.itemLogin}
              color="inherit"
            >
              Sign in
            </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.handleUserButton}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

export default AppBarComponent
