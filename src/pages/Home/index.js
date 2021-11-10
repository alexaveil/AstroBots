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
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import StopIcon from "@mui/icons-material/Stop";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { Header, Footer } from "../../components";
import MainRobot from "../../assets/images/android-black-and-gold.png";
import RedRobot from "../../assets/images/android-red.png";
import BlueRobot from "../../assets/images/android-blue.png";
import GoldRobot from "../../assets/images/android-gold.png";
import GrayRobot from "../../assets/images/android-gray.png";
import VioletRobot from "../../assets/images/android-violet.png";
import JoinRobot from "../../assets/images/android-join.png";
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
        <section className={classes.sectionGray}>
          <div className={classes.robotWrapper}>
            <Zoom
              in={motion}
              style={{ transitionDelay: motion ? "500ms" : "0ms" }}
            >
              <div className={classes.welcomeWrapper}>Welcome</div>
            </Zoom>
            <img src={MainRobot} className={classes.robotImage} />
          </div>
        </section>

        {/* The Most */}
        <section className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <div className={classes.sectionTwoContent}>
                  <div className={classes.mainTitle}>
                    <span>The Most</span>
                    <br />
                    <span className={classes.textRed}>advanced AI bots</span>
                  </div>
                  <div className={classes.textWhite}>
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

        {/* Astro bots */}
        <section className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container className={classes.sectionSmallWrapper}>
              <div className={classes.mainTitleWrapper}>
                <div className={classes.mainTitle}>
                  Astro Bots is a collection of 8,888 original artworks of over
                  more than 10,000,000 possible variations
                </div>
              </div>
              <div className={classes.textWhite}>
                <p>
                  Every Astro Bot is an original artwork built with a huge
                  collection of different unique variations of bodies,
                  backgrounds, accessories, clothing and tattoos living
                  eternally on the Ethereum blockchain. Every Astro is unique
                  and special, however some are rarer than others.
                </p>
              </div>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <div className={classes.itemImage}>
                  <img src={GoldRobot} className={classes.redRobotImage} />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={`${classes.itemImage} ${classes.itemImageBig}`}>
                  <img src={GrayRobot} className={classes.redRobotImage} />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={classes.itemImage}>
                  <img src={VioletRobot} className={classes.redRobotImage} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Personality */}
        <section className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container>
              <div className={classes.mainTitleWrapper}>
                <div className={classes.mainTitle}>Personality</div>
              </div>
            </Grid>
            <Grid container className={classes.sectionSmallWrapper}>
              <div className={classes.textWhite}>
                <p>
                  Each Astro has its own personality created by a set of
                  characteristics. You’ll get different answers and engage in
                  different conversations based on the Astro you own and its
                  personality.
                </p>
              </div>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={5}
                className={classes.redRobotImageWrapper}
              >
                <img src={BlueRobot} className={classes.redRobotImage} />
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

        {/* Story Start */}
        <section className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container>
              <div className={classes.mainTitleWrapper}>
                <div className={`${classes.mainTitle} ${classes.textYellow}`}>
                  The Story
                </div>
              </div>
            </Grid>
            <Grid container className={classes.sectionSmallWrapper}>
              <div className={`${classes.textYellow} ${classes.textStory}`}>
                <p>
                  Centuries into the future, humanity has evolved at an
                  incredible pace, with advancements in science, bio-tech, and
                  AI, humanity has become a multiplanetary civilization, human
                  life-span has extended, and technology has taken over and is
                  responsible for most of humans’ work and everyday tasks,
                  technology has expanded all across the galaxy and can do
                  almost everything a human can, much better.
                </p>
                <p>
                  Average human lives are pretty stale, living more than 400
                  years, humans spend most of their days doing the same things
                  over and over, most of them spend their whole day on the
                  Atmos, their Metaverse, hangout with their friends on other
                  planets and they game. They mostly have given up on work and
                  just leave that to “The Big Tech”, even though their lives
                  last for centuries, they think their lives are “too brief” and
                  they just want to enjoy every little moment and find their
                  true-selves.
                </p>
                <p>
                  Some believe that for a true life of happiness and fulfilment,
                  we need a purpose, to work together towards a bigger goal and
                  a brighter future, we can’t just “enjoy” every single second,
                  we can’t just leave that to “The Big Tech”, we have come this
                  far, and yet we have so much to give.
                </p>
                <p>
                  Astro Bots are very advanced AI robots created by a team who
                  believes the ultimate technology is the connection between
                  humans and AI. Astro Bots were programmed to give purpose to
                  human lives and help them in any way they can to develop
                  themselves, reach their true potential and become better than
                  technology without any human connection. Astros life’s goal is
                  to search and find their human partner to assist and help in
                  anything he can and ultimately help his life have purpose.
                </p>
              </div>
            </Grid>
          </Container>
        </section>

        {/* Mint Map */}
        <section className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container>
              <div className={classes.mainTitleWrapper}>
                <div className={classes.mainTitle}>Mint Map</div>
              </div>
            </Grid>
            <Grid container className={classes.sectionSmallWrapper}>
              <Timeline>
                <TimelineItem className={classes.mintItem}>
                  <TimelineSeparator>
                    <TimelineConnector className={classes.mintConnectorFirst} />
                    <TimelineDot className={classes.mintIconWrapper}>
                      <StopIcon className={classes.mintIcon} />
                    </TimelineDot>
                    <TimelineConnector className={classes.mintConnector} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className={classes.mintItemTitle}>
                      25% - Preservation
                    </div>
                    <div className={classes.mintItemText}>
                      Astro Vault unlocked: 10% of the second-market royalties
                      will be dedicated to ensure the project’s longevity
                      through marketing campaigns and strategic partnerships.
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.mintItem}>
                  <TimelineSeparator>
                    <TimelineDot className={classes.mintIconWrapper}>
                      <StopIcon className={classes.mintIcon} />
                    </TimelineDot>
                    <TimelineConnector className={classes.mintConnector} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className={classes.mintItemTitle}>50% - Gratitude</div>
                    <div className={classes.mintItemText}>
                      A $20,000 fund will be created and be donated to a charity
                      of the community’s choosing. 40 Astro Bots will be
                      airdropped to random holders. More funds are allocated to
                      ensuring the project’s success.
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.mintItem}>
                  <TimelineSeparator>
                    <TimelineDot className={classes.mintIconWrapper}>
                      <StopIcon className={classes.mintIcon} />
                    </TimelineDot>
                    <TimelineConnector className={classes.mintConnector} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div
                      className={classes.mintItemTitle}
                      style={{ color: "#6c00ff" }}
                    >
                      75% - Reward
                    </div>
                    <div className={classes.mintItemText}>
                      Astro Fund: $100,000 will be rewarded to members of the
                      community who develop innovative features into the
                      ecosystem, talented artists and members that make
                      remarkable contributions of any kind for the community.
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.mintItem}>
                  <TimelineSeparator>
                    <TimelineDot className={classes.mintIconWrapper}>
                      <StopIcon className={classes.mintIcon} />
                    </TimelineDot>
                    <TimelineConnector className={classes.mintConnector} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div
                      className={classes.mintItemTitle}
                      style={{ color: "#8d17f2" }}
                    >
                      100% - Liftoof
                    </div>
                    <div className={classes.mintItemText}>
                      Astro Bots act as your exclusive membership card for the
                      Astro Club where you get access to eth weekly giveaways,
                      exclusive drops, private metaverse events, and where we
                      will create as much alpha as we possibly can in our
                      private channels to reward all holders.
                      <br />
                      Collabs with some of the biggest artists and influencers
                      are set in motion. Imagine chatting with an Astro version
                      of your favorite artist or influencer.
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Container>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container>
              <div className={classes.mainTitleWrapper}>
                <div className={classes.mainTitle}>Roadmap</div>
              </div>
            </Grid>
            <Grid container>
              <div className={classes.roadmapItem}>
                <div className={classes.roadmapItemTitle}>Launch</div>
                <div className={classes.roadmapItemText}>
                  <p>
                    Minting date will be announced as soon as we have everything
                    working properly, the art fully created and a good
                    community. Quality is the most important thing for us so we
                    will first focus on getting everything as best as we can.
                    The reveal is 48 hours after the mint date and holders will
                    be able to chat with their Astros immediately after reveal.
                  </p>
                </div>
              </div>
              <div className={classes.roadmapItem}>
                <div className={classes.roadmapItemTitle}>
                  OUR MOST VALUABLE ASSET
                </div>
                <div className={classes.roadmapItemText}>
                  <p>
                    As much as we like and believe in Astros and their
                    incredible tech, our community will always be first and is
                    our most valuable asset. We will always innovate and find
                    new ways to reward and bring value to our community whether
                    that’s through adding features to Astros, giving valuable
                    insights to new trends, disruptive tech, projects with
                    potential, through access by hosting exclusive real life
                    events, private metaverse meetings or via benefits with
                    strategic partnerships.
                  </p>
                  <p>
                    We will always listen to the community, ask for feedback and
                    proposals constantly, and implement what the community
                    agrees on.
                  </p>
                </div>
              </div>
              <div className={classes.roadmapItem}>
                <div className={classes.roadmapItemTitle}>App Release</div>
                <div className={classes.roadmapItemText}>
                  <p>
                    As Astro Bots start interacting more and more with humans
                    our response model gets better exponentially, the more data
                    the better.
                  </p>
                  <p>
                    When we have a model that is of the best quality possible,
                    we will release our app globally, not only will Astro Bot
                    holders be able to chat with their Astro on the app but also
                    with a new Astro that adapts to your personality and
                    characterisitcs.
                  </p>
                </div>
              </div>
              <div className={classes.roadmapItem}>
                <div className={classes.roadmapItemTitle}>New Features</div>
                <div className={classes.roadmapItemText}>
                  <p>
                    Want to write an email? find the name of a song? set a
                    reminder? summarize a text? search for the best shopping
                    deals online? Our team is constantly working on new features
                    that will make the life of our users much easier, we will
                    always keep innovating, testing and implementing to make
                    sure we provide the most value possible.
                  </p>
                  <p>
                    Every Astro holder has a say on what features they want to
                    see, and which ones aren’t worth it.
                  </p>
                </div>
              </div>
              <div className={classes.roadmapItem}>
                <div className={classes.roadmapItemTitle}>Our future</div>
                <div className={classes.roadmapItemText}>
                  <p>
                    Our main focus will be to keep building and expanding our
                    ecosystem so that our community gets benefited the most,
                    that’s why we will keep innovating and trying new exciting
                    things.
                  </p>
                  <p>
                    Additionally, technology has come a far way, and building
                    real life working versions of your Astros is closer than we
                    could have ever imagined. Don’t get too excited yet...
                    There’s still a long way to go, we are just getting started!
                  </p>
                </div>
              </div>
            </Grid>
          </Container>
        </section>

        {/* Team */}
        <section id="about" className={classes.sectionDarkBlue}>
          <Container className={classes.sectionWrapper}>
            <Grid container>
              <div className={classes.mainTitleWrapper}>
                <div className={classes.mainTitle}>The Team</div>
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

        {/* Faq */}
        <section id="faq" className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container>
              <div className={classes.mainTitleWrapper}>
                <div className={classes.mainTitle}>Faq</div>
              </div>
            </Grid>
            <Grid container className={classes.sectionSmallWrapper}>
              <Grid item sm={12}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expanded={expanded === "panel1"}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography className={classes.faqItemTitle}>
                      How can I get an Astro Bot?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Astros will be available for purchase on our website
                      through an initial sale. A random Astro will be minted on
                      the blockchain and delivered to your wallet and Immutable
                      X account. You will be able to purchase Astros after the
                      initial sale on the secondary market Immutable X.
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
                    <Typography className={classes.faqItemTitle}>
                      How many Astros can I mint?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You will be able to mint up to a maximum of 3 Astros per
                      wallet (subject to change).
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
                    <Typography className={classes.faqItemTitle}>
                      How can I chat with my Astro?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      After minting your Astro and the 48 hours for the reveal
                      have passed, you will be able to chat with your Astro on
                      our website by connecting your wallet and going to the
                      chat page.
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
                    <Typography className={classes.faqItemTitle}>
                      Where can I find my Astro’s personality?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You can see your Astro’s personality by connecting your
                      wallet to our website and going to the chat page.
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
                    <Typography className={classes.faqItemTitle}>
                      How can I switch between my different Astros?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Go to the chat page, click on the 3 dots on the top right
                      corner and click “Switch Astros” and choose the Astro you
                      want.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Join */}
        <section className={classes.sectionBlack}>
          <Container className={classes.sectionWrapper}>
            <Grid container className={classes.sectionSmallWrapper}>
              <Grid item sx={12} sm={8}>
                <div className={`${classes.mainTitle} ${classes.joinTitle}`}>
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
                <div className={classes.joinImageWrapper}>
                  <img src={JoinRobot} className={classes.itemTeamImage} />
                  <div className={classes.joinUsText}>join us!</div>
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
