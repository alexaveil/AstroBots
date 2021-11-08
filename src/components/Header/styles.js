/* import external modules */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#d0cece!important',
  },
  headerWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      margin: '5px 0!important'
    }
  },
  logoImageLetter: {
    maxWidth: 60,
    marginRight: 20
  },
  logoImageText: {
    maxWidth: 200
  },
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
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
    outline: 'none',
    fontSize: 22,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  iconsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      margin: '5px 0!important'
    }
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10
  },
  iconsItem: {
    padding: '0 10px'
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      margin: '5px 0!important'
    }
  },
  connectButton: {
    backgroundColor: 'black!important',
    borderRadius: '0!important',
    textTransform: "capitalize!important",
    fontSize: "18px!important",
    height: "40px!important"
  },
}))

export default useStyles
