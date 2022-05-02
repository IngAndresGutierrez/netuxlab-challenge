/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 45,
  },
  imageProcess: {
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))
