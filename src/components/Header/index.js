import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { DiscordIcon, OpenSeaIcon } from "../Icons";
import useStyles from "./styles";
import LogoBlackLetter from "../../assets/images/logo-black-letter.png";
import LogoBlackText from "../../assets/images/logo-black-text.png";

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <div className={classes.logoWrapper}>
            <a href="/" className={classes.logoWrapperLink}>
              <img src={LogoBlackLetter} className={classes.logoImageLetter} />
              <img src={LogoBlackText} className={classes.logoImageText} />
            </a>
          </div>
          <div className={classes.navWrapper}>
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
          </div>
          <div className={classes.iconsWrapper}>
            <div className={classes.icons}>
              <div className={classes.iconsItem}>
                <DiscordIcon width={28} height={25} />
              </div>
              <div className={classes.iconsItem}>
                <TwitterIcon sx={{ fontSize: 30 }} />
              </div>
              <div className={classes.iconsItem}>
                <OpenSeaIcon width={25} height={25} />
              </div>
            </div>
          </div>
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              className={classes.connectButton}
              onClick={() => {}}
            >
              Connect Wallet
            </Button>
          </div>
          <div className={classes.buttonMobileWrapper}>
            <IconButton component="span" onClick={handleClick}>
              <MenuIcon className={classes.mobileIcon} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Roadmap</MenuItem>
              <MenuItem onClick={handleClose}>Faq</MenuItem>
            </Menu>
          </div>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
