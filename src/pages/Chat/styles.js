/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#00010C",
    height: "96vh",
    width: "100%",
  },
  chatWrapper: {
    paddingTop: "110px",
    paddingLeft: 30,
    paddingRight: 30,
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  sidebar: {
    backgroundColor: "#11121A",
    borderRight: "1px solid rgb(255 255 255 / 30%)",
    height: "82vh",
    width: "25%",
    padding: "0 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    fontWeight: "bold",
    color: "white",
    width: "30%",
  },
  progressItemProgress: {
    width: "70%",
  },
  content: {
    width: "70%",
    height: "82vh",
    display: "flex",
    flexDirection: "column",
  },
  topPanel: {
    height: 60,
    backgroundColor: "#11121A",
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
    padding: 40,
    display: "flex",
    flexDirection: "column",
  },
  messagePeriod: {
    marginBottom: 20
  },
  messageTitle: {
    color: "#D8D8D8",
    textAlign: "center",
  },
  messageBlock: {
    display: "flex",
    flexDirection: "column",
  },
  messageLeftWrapper: {
    width: "100%",
    display: "flex",
  },
  messageLeftText: {
    backgroundColor: "#26272F",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 10
  },
  messageRightWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  messageRightText: {
    backgroundColor: "#0D1A8C",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 10
  },
  bottomPanel: {
    height: 80,
    backgroundColor: "#11121A",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
  },
  messageInput: {
    backgroundColor: "#26272F",
    width: "100%",
    border: "none",
    padding: "10px 20px",
    borderRadius: 20,
    color: "#FFFFFF",
    outline: "none",
  },
}));

export default useStyles;
