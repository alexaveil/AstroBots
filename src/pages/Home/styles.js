/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sectionOne: {
    backgroundColor: "#d0cece",
    height: "95vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "72vh",
    },
  },
  robotWrapper: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
    maxWidth: "700px",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "flex-end",
    },
  },
  welcomeWrapper: {
    backgroundColor: "#ecebeb",
    fontSize: 20,
    padding: "6px 14px",
    position: "absolute",
    top: "35%",
    right: "5%",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: -20,
      left: 0,
      margin: "0 auto",
    },
  },
  robotImage: {
    maxWidth: 800,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
      margin: "0 auto",
    },
  },
  sectionTwo: {
    padding: "50px 0",
    backgroundColor: "#000000",
  },
  sectionTwoContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  },
  mainTitle: {
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textTransform: "uppercase",
  },
  mainTitleRed: {
    color: "#d10000",
  },
  mainText: {
    color: "white",
  },
  redRobotImage: {
    maxWidth: 500,
    width: "100%",
  },
  sectionThree: {
    backgroundColor: "#000000",
    padding: "50px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0",
    },
  },
  sectionThreeTitleWrapper: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      paddingBottom: "20px"
    },
  },
  sectionThreeTitleWrapperBig: {
    padding: "100px 0 50px"
  },
  sectionThreeTitleRoadmap: {
    paddingBottom: 0
  },
  mintWrapper: {
    color: "white",
    maxWidth: 900,
    margin: '0 auto',
  },
  mintItem: {
    '&:before': {
      display: "none",
    }
  },
  mintConnectorFirst: {
    position: "absolute",
    height: 30,
    top: -10
  },
  mintConnector: {
    margin: "-15px 0"
  },
  mintIconWrapper: {
    backgroundColor: "transparent!important",
    margin: '0!important'
  },
  mintIcon: {
    transform: "rotate(45deg)",
    color: "#0063ff",
  },
  mintItemTitle: {
    color: "#0063ff",
    fontSize: 24,
    fontWeight: "bold",
  },
  mintItemText: {
    padding: "20px 0",
    color: "rgb(255 255 255 / 50%)",
    fontSize: 14
  },
  roadmapWrapper: {
    maxWidth: 900,
    display: "flex",
    flexDirection: "column",
    margin: '0 auto'
  },
  roadmapItem: {
    backgroundColor: "#101492",
    color: "white",
    margin: "20px 0",
    padding: 20,
    textAlign: "center",
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  roadmapItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  sectionThreeTitle: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    maxWidth: "80%",
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  sectionThreeTitleYellow: {
    color: "#ffc500"
  },
  sectionThreeSubTitle: {
    maxWidth: "80%",
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  sectionThreeYellowTextWrapper: {
    textAlign: "center",
    color: "#ffc500"
  },
  itemImage: {
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  itemImageBig: {
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  progressesWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      paddingTop: 20
    },
  },
  progressItem: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  progressItemText: {
    fontSize: 18,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "white",
    paddingRight: 20,
  },
  progressItemProgress: {
    width: "100%",
  },
  sectionFour: {
    backgroundColor: '#08051d',
    padding: "50px 0",
  },
  sectionFourTitleWrapper: {
    width: "100%",
    textAlign: "center",
    marginBottom: 30
  },
  sectionFourTitle: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Helvetica Neue",
    fontSize: 30,
    fontWeight: "bold",
  },
  itemTeamImage: {
    width: "100%",
  },
  itemTeamName: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 25,
    marginTop: 20,
  },
  itemTeamRole: {
    color: "#d10000",
    textTransform: "uppercase",
    fontSize: 22,
  },
  sectionFive: {
    backgroundColor: '#000000',
    padding: "50px 0",
  },
  sectionFiveContentWrapper: {
    maxWidth: 900,
    width: '100%',
    margin: '0 auto'
  },
  joinContentWrapper: {
    maxWidth: 900,
    width: '100%',
    margin: '60px auto',
  },
  joinTitle: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Helvetica Neue",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: '0px!important',
    },
  },
  joinText: {
    color: "white",
    fontSize: 16,
    margin: '30px 0'
  },
  joinButton: {
    borderRadius: '0!important',
    [theme.breakpoints.down("sm")]: {
      marginBottom: '30px!important'
    },
  },
  joinImageWrapper: {
    position: "relative"
  },
  joinUsText: {
    backgroundColor: "#d8d8d8",
    fontSize: 16,
    padding: "6px 14px",
    position: "absolute",
    top: "22%",
    right: -20,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  }
}));

export default useStyles;
