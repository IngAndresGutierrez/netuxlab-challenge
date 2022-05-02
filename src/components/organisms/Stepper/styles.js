/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    boxShadow: '0px 3px 6px #00000029',
    height: 100,
    backgroundColor: '#fff',
  },
  logo: {
    margin: 20,
  },
  buttons: {
    marginTop: 20,
    marginLeft: 50,
  },
  continueButton: {
    width: 230,
    borderRadius: 20,
    fontWeight: 700,
  },
}))
