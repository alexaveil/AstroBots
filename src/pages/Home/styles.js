/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sectionOne: {
    backgroundColor: "#d0cece",
    height: "100vh",
  },
  robotWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: "100%"
  },
  welcomeWrapper: {
    backgroundColor: "#ecebeb",
    fontSize: 20,
    padding: '10px 15px',
    position: "absolute",
    top: '45%',
    right: '30%',
    borderRadius: 10
  },
  robotImage: {
    maxWidth: 700,
    width: "100%"
  },
  sectionTwo: {
    height: "60vh",
    display: 'flex',
  },
  sectionTwoLeft: {
    width: "55%",
    height: "100%",
    display: 'flex',
    justifyContent: 'flex-end',
  },
  sectionTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 100,
    width: "60%",
  },
  mainTitle: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "uppercase",
  },
  mainTitleRed: {
    color: "#d10000",
  },
  sectionTwoRight: {
    width: "45%",
    height: "100%",
    backgroundColor: "#d10000",
    display: 'flex',
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
