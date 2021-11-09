import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useHistory } from "react-router-dom";

import { DiscordIcon, OpenSeaIcon } from "../Icons";
import * as keys from "../../utils/keys";
import useStyles from "./styles";
import LogoBlackLetter from "../../assets/images/logo-black-letter.png";
import LogoBlackText from "../../assets/images/logo-black-text.png";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const scrollToSection = (e) => {
    e.preventDefault();
    let scrollDiv = document.querySelector(e?.target?.hash);
    scrollDiv?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.header}
    >
      <Container>
        <Grid container className={classes.headerWrapper}>
          <Grid item xs={12} sm={6} md={4}>
            <a href="/" className={classes.logoWrapper}>
              <img src={LogoBlackLetter} className={classes.logoImageLetter} />
              <img src={LogoBlackText} className={classes.logoImageText} />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.navWrapper}>
            <nav>
              <ul className={classes.topMenu}>
                <li className={classes.topMenuItem}>
                  <a
                    className={classes.topMenuItemLink}
                    href="#about"
                    onClick={scrollToSection}
                  >
                    About
                  </a>
                </li>
                <li className={classes.topMenuItem}>
                  <a
                    className={classes.topMenuItemLink}
                    href="#roadmap"
                    onClick={scrollToSection}
                  >
                    Roadmap
                  </a>
                </li>
                <li className={classes.topMenuItem}>
                  <a
                    className={classes.topMenuItemLink}
                    href="#faq"
                    onClick={scrollToSection}
                  >
                    Faq
                  </a>
                </li>
              </ul>
            </nav>
          </Grid>
          <Grid item xs={12} sm={6} md={2} className={classes.iconsWrapper}>
            <div className={classes.icons}>
              <div className={classes.iconsItem}>
                <DiscordIcon width={35} height={30} />
              </div>
              <div className={classes.iconsItem}>
                <TwitterIcon sx={{ fontSize: 35}} />
              </div>
              <div className={classes.iconsItem}>
                <OpenSeaIcon width={30} height={30} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={2} className={classes.buttonWrapper}>
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
