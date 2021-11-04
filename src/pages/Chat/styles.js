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
  },
  chatWrapper: {
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  sidebar: {
    backgroundColor: "#11121b",
    borderRight: "1px solid rgb(255 255 255 / 15%)",
    width: "25%",
    padding: 40,
    display: "flex",
    flexDirection: "column",
  },
  userWrapper: {
    display: "flex",
    alignItems: "center",
  },
  userAvatar: {
    marginRight: 20,
    height: 50
  },
  userAvatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  userName: {
    color: 'white',
    fontSize: 18
  },
  robotWrapper: {
    marginTop: 60,
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
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  topPanel: {
    height: 80,
    backgroundColor: "#11121b",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 10px",
  },
  icon: {
    color: "#fff",
  },
  messagesWraper: {
    height: "100%",
    padding: 50,
    display: "flex",
    flexDirection: "column",
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
    padding: "0 50px",
  },
  messageInput: {
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
