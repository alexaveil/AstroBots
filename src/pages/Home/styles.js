/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sectionGray: {
    backgroundColor: "#d0cece",
    margin: "-1px 0",
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
    padding: "8px 25px",
    position: "absolute",
    top: "35%",
    right: "4%",
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
  sectionWrapper: {
    margin: "-1px 0",
    padding: "50px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0",
    },
  },
  sectionSmallWrapper: {
    maxWidth: 900,
    width: "100%",
    margin: "0 auto",
  },
  sectionBlack: {
    backgroundColor: "#000000",
  },
  sectionDarkBlue: {
    backgroundColor: "#08051d",
  },
  sectionTwoContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  mainTitleWrapper: {
    width: "100%",
    textAlign: "center",
    marginBottom: 30,
  },
  mainTitle: {
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textTransform: "uppercase",
  },
  textWhite: {
    color: "white",
  },
  textRed: {
    color: "#d10000",
  },
  textYellow: {
    color: "#ffc500",
  },
  textStory: {
    textAlign: "center",
    fotnStyle: "italic"
  },
  redRobotImage: {
    maxWidth: 500,
    width: "100%",
  },
  mintItem: {
    "&:before": {
      display: "none",
    },
  },
  mintConnectorFirst: {
    position: "absolute",
    height: 30,
    top: -10,
  },
  mintConnector: {
    margin: "-15px 0",
  },
  mintIconWrapper: {
    backgroundColor: "transparent!important",
    margin: "0!important",
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
    fontSize: 14,
  },
  roadmapItem: {
    backgroundColor: "#101492",
    color: "white",
    margin: "20px 0",
    padding: "30px 40px",
    textAlign: "center",
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px",
    },
  },
  roadmapItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 10,
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
      paddingTop: 20,
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
    maxWidth: 100,
    width: '100%'
  },
  progressItemProgress: {
    width: "100%",
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
  faqItemTitle: {
    fontWeight: "bold!important",
  },
  joinTitle: {
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px!important",
    },
  },
  joinText: {
    color: "white",
    fontSize: 16,
    margin: "30px 0",
  },
  joinButton: {
    borderRadius: "0!important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px!important",
    },
  },
  joinImageWrapper: {
    position: "relative",
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
  },
}));

export default useStyles;
