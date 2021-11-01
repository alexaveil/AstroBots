import React from "react";

import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
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

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main>
        <section className={classes.sectionOne}>
          <div className={classes.robotWrapper}>
            <div className={classes.welcomeWrapper}>Welcome</div>
            <img src={MainRobot} className={classes.robotImage} />
          </div>
        </section>
        <section className={classes.sectionTwo}>
          <div className={classes.sectionTwoLeft}>
            <div className={classes.sectionTextWrapper}>
              <div className={classes.mainTitle}>
                <span>The Most</span>
                <span className={classes.mainTitleRed}>advanced AI bots</span>
              </div>
              <div className={classes.mainText}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries
                </p>
                <p>
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </p>
              </div>
            </div>
          </div>
          <div className={classes.sectionTwoRight}>
            <div className={classes.robotWrapper}>
              <img src={RedRobot} className={classes.redRobotImage} />
            </div>
          </div>
        </section>
        <section className={classes.sectionThree}>
          <Container>
            <Grid container>
              <div className={classes.sectionThreeTitleWrapper}>
                <div className={classes.sectionThreeTitle}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
                <div className={classes.sectionThreeSubTitle}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </div>
              </div>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <div className={classes.itemImage}>
                  <img src={RedRobot} className={classes.redRobotImage} />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={`${classes.itemImage} ${classes.itemImageBig}`}>
                  <img src={RedRobot} className={classes.redRobotImage} />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={classes.itemImage}>
                  <img src={RedRobot} className={classes.redRobotImage} />
                </div>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container>
              <div className={classes.sectionThreeTitleWrapper}>
                <div className={classes.sectionThreeTitle}>Personality</div>
                <div className={classes.sectionThreeSubTitle}>
                  Each Bot has its own personality created by a set of
                  characteristics. You'll get different answers and engage in
                  different conversations based on on the Bot you own and its
                  personality.
                </div>
              </div>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={5} className={classes.redRobotImageWrapper}>
                <img src={RedRobot} className={classes.redRobotImage} />
              </Grid>
              <Grid item xs={12} sm={7}>
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
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
