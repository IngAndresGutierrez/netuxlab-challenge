/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

/* import internal modules */
import Logo from '../../../assets/my_turn/logo.png'

export const useStyles = makeStyles((theme) => ({
  logo: {
    width: '100%',
    height: 54,
    background: `url(${Logo}) no-repeat`,
  },
}))
