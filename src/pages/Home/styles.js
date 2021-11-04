/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sectionOne: {
    backgroundColor: "#d0cece",
    height: "95vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
      height: "85vh",
    }
  },
  robotWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: "100%",
    maxWidth: "700px",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      justifyContent: 'flex-end',
    },
  },
  welcomeWrapper: {
    backgroundColor: "#ecebeb",
    fontSize: 18,
    padding: '10px 25px',
    position: "absolute",
    width: 150,
    top: '35%',
    right: 20,
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      position: "relative",
      top: -20,
      right: 0,
      left: 0,
      margin: '0 auto'
    },
  },
  robotImage: {
    maxWidth: 800,
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      margin: '0 auto'
    },
  },
  sectionTwo: {
    height: "60vh",
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      height: "auto",
      flexDirection: "column"
    },
  },
  sectionTwoLeft: {
    width: "55%",
    height: "100%",
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('lg')]: {
      width: "100%",
      padding: 20
    },
  },
  sectionTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 100,
    width: "60%",
    [theme.breakpoints.down('lg')]: {
      width: "100%",
      padding: 0
    },
  },
  mainTitle: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "uppercase",
    [theme.breakpoints.down('sm')]: {
      alignItems: "center",
    },
  },
  mainTitleRed: {
    color: "#d10000",
  },
  sectionTwoRight: {
    width: "45%",
    height: "100%",
    backgroundColor: "#d10000",
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      width: "100%",
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
    },
  },
  redRobotImage: {
    maxWidth: 500,
    width: "100%",
  },
  sectionThree: {
    backgroundColor: "#000000",
    padding: '50px 0'
  },
  sectionThreeTitleWrapper: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0"
  },
  sectionThreeTitle: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    maxWidth: '80%',
    marginBottom: 20
  },
  sectionThreeSubTitle: {
    maxWidth: '80%',
    fontSize: 14
  },
  itemImage: {
    padding: 20
  },
  itemImageBig: {
    padding: 5
  },
  progressesWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    padding: '50px'
  },
  progressItem: {
    display: "flex",
    alignItems: 'center',
    margin: '10px 0'
  },
  progressItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 20
  },
  progressItemProgress: {
    width: '100%',
  }
}));

export default useStyles;
