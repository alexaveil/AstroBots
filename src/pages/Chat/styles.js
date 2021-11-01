/* import external modules */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#00010C",
    height: '96vh',
    width: '100%'
  },
  chatWrapper: {
    paddingTop: '110px'
  },
  sidebar: {
    backgroundColor: "#11121A"
  },
  robotImage: {
    width: '100%'
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
