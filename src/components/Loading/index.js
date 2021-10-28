/* import external modules */
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

/* import internal modules */
import useStyles from './styles'

const Loading = (props) => {
  const classes = useStyles()

  return (
    <Box sx={classes.root}>
      <CircularProgress color="primary" {...props} />
    </Box>
  )
}

export default Loading
