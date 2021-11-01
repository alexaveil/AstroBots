/* import external modules */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#d0cece!important',
  },
  headerWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '5px 0!important'
    }
  },
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '5px 0!important'
    }
  },
  iconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '5px 0!important'
    }
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '5px 0!important'
    }
  },
  connectButton: {
    backgroundColor: 'black!important',
    borderRadius: '0!important'
  },
}))

export default useStyles
