/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#d0cece!important",
  },
  headerWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  logoWrapper: {
    display: "flex",
    width: '20%',
    [theme.breakpoints.down("sm")]: {
      width: 'auto',
    },
  },
  logoWrapperLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logoImageLetter: {
    maxWidth: 40,
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 30,
      marginRight: 0
    },
  },
  logoImageText: {
    maxWidth: 150,
    [theme.breakpoints.down("md")]: {
      maxWidth: 100,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
  },
  navWrapper: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down("lg")]: {
      width: '40%',
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  topMenu: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  topMenuItem: {
    padding: "0 20px",
  },
  topMenuItemLink: {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "black",
    outline: "none",
    fontSize: 18,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  iconsWrapper: {
    width: '15%',
    [theme.breakpoints.down("lg")]: {
      width: '20%',
    },
    [theme.breakpoints.down("md")]: {
      margin: "5px 0!important",
    },
    [theme.breakpoints.down("sm")]: {
      width: 'auto',
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    marginTop: 4,
  },
  iconsItem: {
    padding: "0 10px",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      transform: "scale(0.75)",
    },
  },
  buttonWrapper: {
    width: '15%',
    [theme.breakpoints.down("lg")]: {
      width: 'auto',
    },
  },
  connectButton: {
    backgroundColor: "black!important",
    borderRadius: "0!important",
    textTransform: "capitalize!important",
    fontSize: "18px!important",
    height: "40px!important",
    fontWeight: "300!important",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px!important",
      height: "35px!important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px!important",
      height: "30px!important",
    },
  },
  buttonMobileWrapper: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  mobileIcon: {
    fontSize: "50px!important",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px!important",
    },
  },
}));

export default useStyles;
