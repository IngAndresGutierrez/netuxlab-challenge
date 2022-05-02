/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 15,
    marginLeft: 15,
  },
  formControl: {
    minWidth: 330,
    margin: theme.spacing(1),
  },
  title: {
    fontWeight: 700,
  },
  siteInfoContainer: {
    textAlign: 'left',
    marginLeft: 50,
    marginTop: 20,
  },
}))
