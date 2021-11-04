import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useHistory } from "react-router-dom";

import { DiscordIcon, OpenSeaIcon } from "../Icons";
import * as keys from "../../utils/keys";
import useStyles from "./styles";
import LogoBlackImage from "../../assets/logo-black.png";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.header}
    >
      <Container>
        <Grid container className={classes.headerWrapper}>
          <Grid item xs={12} sm={1}>
            <div className={classes.logoWrapper}>
              <img
                alt="Logo"
                src={LogoBlackImage}
                className={classes.logoImage}
                onClick={() => history.push(keys.HOME)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.navWrapper}>
            <nav>
              <ul className={classes.topMenu}>
                <li className={classes.topMenuItem}>
                  <a className={classes.topMenuItemLink} href="#about">
                    About
                  </a>
                </li>
                <li className={classes.topMenuItem}>
                  <a className={classes.topMenuItemLink} href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className={classes.topMenuItem}>
                  <a className={classes.topMenuItemLink} href="#faq">
                    Faq
                  </a>
                </li>
              </ul>
            </nav>
          </Grid>
          <Grid item xs={12} sm={1} className={classes.iconsWrapper}>
            <div className={classes.icons}>
              <div className={classes.iconsItem}><DiscordIcon /></div>
              <div className={classes.iconsItem}><TwitterIcon /></div>
              <div className={classes.iconsItem}><OpenSeaIcon /></div>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.buttonWrapper}>
            <Button
              variant="contained"
              className={classes.connectButton}
              onClick={() => history.push(keys.CHAT)}
            >
              Connect Wallet
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
