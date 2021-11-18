/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sectionGray: {
    backgroundColor: "#d0cece",
    margin: "-1px 0",
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "70vh",
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
      fontSize: 16,
      padding: "5px 15px",
      top: "50%",
      right: "2%",
    },
  },
  chatButton: {
    position: "absolute!important",
    margin: "0 auto!important",
    left: 0,
    right: 0,
    bottom: "18%",
    backgroundColor: "#0D1A8C!important",
    borderRadius: "0!important",
    fontSize: "24px!important",
    textTransform: "capitalize!important",
    width: 160,
    [theme.breakpoints.down("sm")]: {
      width: 120,
      fontSize: "20px!important",
      bottom: "10%",
    },
  },
  robotImage: {
    maxWidth: 800,
    width: "100%",
    maxHeight: "100%",
    margin: "0 auto",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      maxWidth: 600,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
    },
  },
  sectionWrapper: {
    margin: "-1px 0",
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {
      padding: "20px 0",
    },
  },
  sectionSmallWrapper: {
    maxWidth: 900,
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      padding: "0px 40px",
    },
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
    maxWidth: "70%",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
      maxWidth: "100%",
    },
  },
  mainTitleWrapper: {
    width: "100%",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
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
    marginBottom: 20,
  },
  textRed: {
    color: "#d10000",
  },
  textYellow: {
    color: "#ffc500",
  },
  textStory: {
    textAlign: "center",
    fotnStyle: "italic",
  },
  contentImageWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  contentImage: {
    outline: "none",
    maxWidth: 500,
    width: "100%",
  },
  mintWrapper: {
    marginTop: 20
  },
  mintItem: {
    display: "flex",
    marginBottom: 20
  },
  mintItemIcon: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    border: "3px solid white",
    width: 100,
    height: 100,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  },
  mintItemColor1: {
    borderColor: "#0047FF"
  },
  mintItemColor2: {
    borderColor: "#000AFF"
  },
  mintItemColor3: {
    borderColor: "#6100FF"
  },
  mintItemColor4: {
    borderColor: "#8130E9"
  },
  mintItemContent: {
    flex: 1,
  },
  mintItemTitle: {
    color: "#0063ff",
    fontSize: 24,
    fontWeight: "bold",
    position: "relative",
    marginTop: 12,
    "&::after": {
      content: '""',
      position: "absolute",
      left: -20,
      right: 0,
      bottom: -5,
      height: 3,
      width: '101%',
      backgroundColor: "#101492",
    },
  },
  mintItemTitle1: {
    color: "#0047FF",
    "&::after": {
      backgroundColor: "#0047FF",
    }
  },
  mintItemTitle2: {
    color: "#000AFF",
    "&::after": {
      backgroundColor: "#000AFF",
    }
  },
  mintItemTitle3: {
    color: "#6100FF",
    "&::after": {
      backgroundColor: "#6100FF",
    }
  },
  mintItemTitle4: {
    color: "#8130E9",
    "&::after": {
      backgroundColor: "#8130E9",
    }
  },
  mintItemText: {
    padding: "20px 0",
    color: "white",
    fontSize: 16,
  },
  sectionRoadmap: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 120px",
  },
  roadmapWrapper: {
    paddingBottom: 50,
  },
  roadmapItem: {
    border: "5px solid #101492",
    color: "white",
    margin: "30px 0",
    padding: "30px 40px",
    textAlign: "center",
    position: "relative",
    "&::after": {
      content: '""',
      display: "flex",
      position: "absolute",
      bottom: -65,
      left: 0,
      right: 0,
      margin: "0 auto",
      height: 60,
      width: 5,
      backgroundColor: "#101492",
    },
    "&:last-child": {
      "&::after": {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px",
    },
  },
  roadmapItemTitleWrapper: {
    width: '100%',
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  roadmapItemTitle: {
    position: "absolute",
    top: -25,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "#101492",
    width: 'auto',
    padding: '10px 10px',
    "&::before": {
      content: '""',
      display: "flex",
      position: "absolute",
      left: -30,
      top: 0,
      borderStyle: 'solid',
      borderWidth: '0 0 47px 30px',
      borderColor: 'transparent transparent #101492 transparent',
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      },
    },
    "&::after": {
      content: '""',
      position: "absolute",
      borderStyle: 'solid',
      right: -30,
      top: 0,
      borderWidth: '47px 0 0 30px',
      borderColor: 'transparent transparent transparent #101492',
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  itemImage: {},
  progressesWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 50,
    paddingBottom: 0,
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
    width: "100%",
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
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.down("md")]: {
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
