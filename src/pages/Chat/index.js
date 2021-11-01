import React from "react";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";

import { Header, Footer } from "../../components";
import MainRobot from "../../assets/android-black-and-gold.png";
import RedRobot from "../../assets/android-red.png";
import useStyles from "./styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'transparent',
    border: '0.5px solid rgba(255, 255, 255, 0.5)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: 'white',
  },
}));


const Chat = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main>
        <section className={classes.wrapper}>
          <Container>
            <Grid container className={classes.chatWrapper}>
              <Grid item sm={4} className={classes.sidebar}>
                <Grid item>
                  <img src={RedRobot} className={classes.robotImage} />
                </Grid>
                <Grid item>
                  <div className={classes.progressesWrapper}>
                    <div className={classes.progressItem}>
                      <div className={classes.progressItemText}>Empathy</div>
                      <BorderLinearProgress className={classes.progressItemProgress} variant="determinate" value={50} />
                    </div>
                    <div className={classes.progressItem}>
                      <div className={classes.progressItemText}>Kindness</div>
                      <BorderLinearProgress className={classes.progressItemProgress} variant="determinate" value={30} />
                    </div>
                    <div className={classes.progressItem}>
                      <div className={classes.progressItemText}>Intelligence</div>
                      <BorderLinearProgress className={classes.progressItemProgress} variant="determinate" value={70} />
                    </div>
                    <div className={classes.progressItem}>
                      <div className={classes.progressItemText}>Sarcasm</div>
                      <BorderLinearProgress className={classes.progressItemProgress} variant="determinate" value={50} />
                    </div>
                    <div className={classes.progressItem}>
                      <div className={classes.progressItemText}>Ellocuence</div>
                      <BorderLinearProgress className={classes.progressItemProgress} variant="determinate" value={20} />
                    </div>
                    <div className={classes.progressItem}>
                      <div className={classes.progressItemText}>Creative</div>
                      <BorderLinearProgress className={classes.progressItemProgress} variant="determinate" value={80} />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid item sm={8} className={classes.content}>
                <div className={classes.topPanel}></div>
                <div className={classes.messagesWraper}></div>
                <div className={classes.bottomPanel}></div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Chat;
