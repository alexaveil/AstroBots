import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useHistory } from "react-router-dom";

import { DiscordIcon, OpenSeaIcon } from "../Icons";
import * as keys from "../../utils/keys";
import useStyles from "./styles";
import LogoWhiteImage from "../../assets/logo-white.png";

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.logoWrapper}>
        <img
          alt="Logo"
          src={LogoWhiteImage}
          className={classes.logoImage}
          onClick={() => history.push(keys.HOME)}
        />
      </div>
      <div className={classes.icons}>
        <div className={classes.iconsItem}>
          <DiscordIcon color="white" />
        </div>
        <div className={classes.iconsItem}>
          <TwitterIcon sx={{color: 'white'}} />
        </div>
        <div className={classes.iconsItem}>
          <OpenSeaIcon color="white" />
        </div>
      </div>
      <Typography variant="body2" color="white" align="center">
        {"© "}
        {new Date().getFullYear()}
        {" Astro Bots.  All rights reserved."}
      </Typography>
    </footer>
  );
};

export default Footer;
