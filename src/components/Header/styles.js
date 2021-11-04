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
  logoImage: {
    maxWidth: 60
  },
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '20px 0!important'
    }
  },
  topMenu: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  topMenuItem: {
    padding: '0 20px'
  },
  topMenuItemLink: {
    textTransform: "uppercase",
    textDecoration: "none",
    color: 'black',
    "&:hover": {
      textDecoration: "underline"
    }
  },
  iconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
  iconsItem: {
    padding: '0 10px'
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
