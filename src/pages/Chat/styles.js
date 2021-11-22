/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#00010d",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  chatWrapper: {
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
    padding: '0 50px',
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      padding: 0,
    },
  },
  sidebar: {
    backgroundColor: "#11121b",
    borderRight: "1px solid rgb(255 255 255 / 15%)",
    flex: '0 0 400px',
    minWidth: 400,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      flex: '0 0 350px',
      minWidth: 350,
      padding: 30,
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
  },
  sidebarMobile: {
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      display: "block",
      width: "100%",
      height: "100%",
      zIndex: 9
    },
  },
  userWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  userName: {
    color: 'white',
    fontSize: 18
  },
  closeSidebar: {
    display: 'none',
    [theme.breakpoints.down("md")]: {
      display: "flex"
    },
  },
  closeSidebarBtn: {
    padding: "0!important"
  },
  robotWrapper: {
    marginTop: 100,
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      marginTop: 40,
      maxWidth: '60%',
      width: '100%',
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: '100%',
    },
  },
  robotName: {
    textAlign: "center",
    color: "#fff",
    padding: "10px 0",
    fontSize: 18,
  },
  robotImage: {
    width: "100%",
  },
  progressesWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 0",
  },
  progressItem: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
  },
  progressItemText: {
    fontSize: 16,
    color: "white",
    width: "30%",
  },
  progressItemProgress: {
    width: "70%",
  },
  content: {
    flex: '1 1',
    display: "flex",
    flexDirection: "column",
    backgroundSize: "contain",
  },
  topPanel: {
    height: 80,
    backgroundColor: "#11121b",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 10px",
  },
  topOpenSidebar: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  topUser: {
    display: "none",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  topUserImage: {
    borderRadius: 20,
    width: 40,
    padding: 4,
  },
  topUserName: {
    color: "#FFFFFF",
    fontSize: 12
  },
  topSearchWrapper: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    }
  },
  icon: {
    color: "#fff",
  },
  messagesWraper: {
    height: "100%",
    padding: 50,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      padding: 20,
    },
  },
  messagePeriod: {
    marginBottom: 20
  },
  messageTitle: {
    color: "#D8D8D8",
    textAlign: "center",
    fontSize: 14
  },
  messageBlock: {
    display: "flex",
    flexDirection: "column",
    fontSize: 18
  },
  messageLeftWrapper: {
    width: "100%",
    display: "flex",
    marginBottom: 20,
  },
  messageLeftText: {
    backgroundColor: "#262730",
    color: "#FFFFFF",
    padding: '10px 20px',
    borderRadius: 10
  },
  messageRightWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  messageRightText: {
    backgroundColor: "#101492",
    color: "#FFFFFF",
    padding: '10px 20px',
    borderRadius: 10
  },
  bottomPanel: {
    height: 100,
    backgroundColor: "#11121b",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: '0 20px',
  },
  input: {
    backgroundColor: "#26272F",
    width: "100%",
    border: "none",
    padding: "10px 20px",
    borderRadius: 20,
    fontSize: 18,
    color: "#FFFFFF",
    outline: "none",
  },
}));

export default useStyles;
