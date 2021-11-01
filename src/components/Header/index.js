import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useHistory } from "react-router-dom";

import { DiscordIcon } from "../Icons";
import * as keys from "../../utils/keys";
import useStyles from "./styles";
import LogoImage from "../../assets/logo.png";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      className={classes.header}
    >
      <Container>
        <Grid container className={classes.headerWrapper}>
          <Grid item xs={12} sm={3}>
            <div className={classes.logoWrapper}>
              <Avatar alt="Logo" src={LogoImage} onClick={() => history.push(keys.HOME)} />
              <Typography variant="h6" color="inherit" noWrap sx={{ m: 1 }}>
                ASTRO BOTS
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.navWrapper}>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                About
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Roadmap
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Faq
              </Link>
            </nav>
          </Grid>
          <Grid item xs={12} sm={1} className={classes.iconsWrapper}>
            <div className={classes.icons}>
              <DiscordIcon />
              <TwitterIcon />
            </div>
          </Grid>
          <Grid item xs={12} sm={3} lg={2} className={classes.buttonWrapper}>
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
