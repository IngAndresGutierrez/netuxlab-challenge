/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

/* import internal modules */
import Image1 from '../../../assets/my_turn/image1.png'

export const useStyles = makeStyles((theme) => ({
  image: {
    top: 305,
    left: 610,
    height: 335,
    width: '100%',
    background: `url(${Image1}) no-repeat`,
  },
}))
