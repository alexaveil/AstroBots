import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Zoom from "@mui/material/Zoom";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { Header, Footer } from "../../components";
import MainRobot from "../../assets/images/android-black-and-gold.png";
import RedRobot from "../../assets/images/android-red.png";
import Team1 from "../../assets/images/team-1.png";
import Team2 from "../../assets/images/team-2.png";
import Team3 from "../../assets/images/team-3.png";
import Team4 from "../../assets/images/team-4.png";
import Team5 from "../../assets/images/team-5.png";
import Team6 from "../../assets/images/team-6.png";

import useStyles from "./styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  backgroundColor: "transparent!important",
  color: "white",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
}));

const AccordionSummary = styled((props) => {
  const { expanded } = props;
  return (
    <MuiAccordionSummary
      expandIcon={
        !!expanded ? (
          <RemoveIcon sx={{ fontSize: "1.5rem", color: "white" }} />
        ) : (
          <AddIcon sx={{ fontSize: "1.5rem", color: "white" }} />
        )
      }
      {...props}
    />
  );
})(() => ({
  paddingLeft: 0,
  paddingRight: 0,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: 0,
  paddingRight: 0,
}));

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 30,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: "white",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    handleChangeMotion();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeMotion = () => {
    setMotion((prev) => !prev);
  };

  return (
    <>
      <Header />
      <main>
        <section className={classes.sectionOne}>
          <div className={classes.robotWrapper}>
            <Zoom
              in={motion}
              style={{ transitionDelay: motion ? "1300ms" : "0ms" }}
            >
              <div className={classes.welcomeWrapper}>Welcome</div>
            </Zoom>
            <img src={MainRobot} className={classes.robotImage} />
          </div>
        </section>
        <section className={classes.sectionTwo}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <div className={classes.sectionTwoContent}>
                  <div className={classes.mainTitle}>
                    <span>The Most</span>
                    <br />
                    <span className={classes.mainTitleRed}>
                      advanced AI bots
                    </span>
                  </div>
                  <div className={classes.mainText}>
                    <p>
                      Powered by Open AI’s GPT-3, Astro Bots are able to
                      <br /> give you fast and advanced answers to your
                      <br /> questions while having fun and very deep
                      <br /> conversations.
                    </p>
                    <p>
                      Open AI was founded by Elon Musk and GPT-3 is
                      <br /> the most advanced language generator, trained with
                      <br />
                      over 175 billion parameters.
                    </p>
                    <p>
                      Each Astro’s goal is to be your own unique personal
                      <br />
                      assistant that will initially answer all of your questions
                      <br />
                      and chat with you but will later also help you learn,
                      <br /> and assist you with your everyday tasks.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={classes.robotWrapper}>
                  <img src={RedRobot} className={classes.redRobotImage} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={classes.sectionThree}>
          <Container>
            <Grid container>
              <div className={classes.sectionThreeTitleWrapper}>
                <div className={classes.sectionThreeTitle}>
                  Astro Bots is a collection of 8,888 original artworks of over
                  more than 10,000,000 possible variations
                </div>
                <div className={classes.sectionThreeSubTitle}>
                  Every Astro Bot is an original artwork built with a huge
                  collection of different unique variations of bodies,
                  backgrounds, accessories, clothing and tattoos living
                  eternally on the Ethereum blockchain. Every Astro is unique
                  and special, however some are rarer than others.
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
                  Each Astro has its own personality created by a set of
                  characteristics. You’ll get different answers and engage in
                  different conversations based on the Astro you own and its
                  personality.
                </div>
              </div>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={5}
                className={classes.redRobotImageWrapper}
              >
                <img src={RedRobot} className={classes.redRobotImage} />
              </Grid>
              <Grid item xs={12} sm={7}>
                <div className={classes.progressesWrapper}>
                  <div className={classes.progressItem}>
                    <div className={classes.progressItemText}>Empathy</div>
                    <BorderLinearProgress
                      className={classes.progressItemProgress}
                      variant="determinate"
                      value={50}
                    />
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressItemText}>Kindness</div>
                    <BorderLinearProgress
                      className={classes.progressItemProgress}
                      variant="determinate"
                      value={30}
                    />
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressItemText}>Intelligence</div>
                    <BorderLinearProgress
                      className={classes.progressItemProgress}
                      variant="determinate"
                      value={70}
                    />
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressItemText}>Sarcasm</div>
                    <BorderLinearProgress
                      className={classes.progressItemProgress}
                      variant="determinate"
                      value={50}
                    />
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressItemText}>Ellocuence</div>
                    <BorderLinearProgress
                      className={classes.progressItemProgress}
                      variant="determinate"
                      value={20}
                    />
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressItemText}>Creative</div>
                    <BorderLinearProgress
                      className={classes.progressItemProgress}
                      variant="determinate"
                      value={80}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section id="about" className={classes.sectionFour}>
          <Container>
            <Grid container>
              <div className={classes.sectionFourTitleWrapper}>
                <div className={classes.sectionFourTitle}>The Team</div>
              </div>
            </Grid>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 2, sm: 6, md: 12 }}
            >
              <Grid item xs={12} sm={4}>
                <img src={Team1} className={classes.itemTeamImage} />
                <div className={classes.itemTeamName}>Name</div>
                <div className={classes.itemTeamRole}>Role</div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={Team2} className={classes.itemTeamImage} />
                <div className={classes.itemTeamName}>Name</div>
                <div className={classes.itemTeamRole}>Role</div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={Team3} className={classes.itemTeamImage} />
                <div className={classes.itemTeamName}>Name</div>
                <div className={classes.itemTeamRole}>Role</div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={Team4} className={classes.itemTeamImage} />
                <div className={classes.itemTeamName}>Name</div>
                <div className={classes.itemTeamRole}>Role</div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={Team5} className={classes.itemTeamImage} />
                <div className={classes.itemTeamName}>Name</div>
                <div className={classes.itemTeamRole}>Role</div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={Team6} className={classes.itemTeamImage} />
                <div className={classes.itemTeamName}>Name</div>
                <div className={classes.itemTeamRole}>Role</div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section id="faq" className={classes.sectionFive}>
          <Container>
            <Grid container>
              <div className={classes.sectionFourTitleWrapper}>
                <div className={classes.sectionFourTitle}>Faq</div>
              </div>
            </Grid>
            <Grid container>
              <Grid item sm={12}>
                <div className={classes.sectionFiveContentWrapper}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expanded={expanded === "panel1"}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>How can I get an Astro Bot?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expanded={expanded === "panel2"}
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>How many Astros can I mint?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expanded={expanded === "panel3"}
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>How can I chat with my Astro?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expanded={expanded === "panel4"}
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>
                        Where can I find my Astro’s personality?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expanded={expanded === "panel5"}
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>
                        What’s the smart contract address?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={12}>
                <div className={classes.joinContentWrapper}>
                  <Grid container>
                    <Grid item sx={12} sm={8}>
                      <div className={classes.joinTitle}>
                        Join the community
                      </div>
                      <div className={classes.joinText}>
                        Meet the community, join our discord to get the
                        <br />
                        latest news, announcements and to hang out a bit.
                      </div>
                      <Button
                        variant="contained"
                        size="large"
                        className={classes.joinButton}
                      >
                        Join our discord
                      </Button>
                    </Grid>
                    <Grid item sx={12} sm={4}>
                      <img src={Team4} className={classes.itemTeamImage} />
                    </Grid>
                  </Grid>
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
