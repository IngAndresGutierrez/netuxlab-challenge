/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  newTurnButton: {
    marginTop: 20,
    borderRadius: 20,
    marginBottom: 20,
    width: 300,
  },
  title: {
    marginTop: 40,
    fontWeight: 700,
  },
}))
