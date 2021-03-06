import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import RedRobot from "../../assets/images/android-red.png";
import ChatBackground from "../../assets/images/chat-background.png";
import useStyles from "./styles";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 15,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: "white",
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [sidebarMobile, setSidebarMobile] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSidebarMobile = () => {
    setSidebarMobile(!sidebarMobile);
  };

  const handleSearch = () => {
    setHideSearch(!hideSearch);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className={classes.wrapper}>
      <div className={classes.chatWrapper}>
        <div
          className={`${classes.sidebar} ${
            sidebarMobile ? classes.sidebarMobile : ""
          }`}
        >
          <div className={classes.userWrapper}>
            <div className={classes.userName}>0xc32563q6sftw35tES</div>
            <div className={classes.closeSidebar}>
              <IconButton
                className={classes.closeSidebarBtn}
                component="span"
                onClick={handleSidebarMobile}
              >
                <ArrowForwardIosIcon
                  sx={{ fontSize: 25 }}
                  className={classes.icon}
                />
              </IconButton>
            </div>
          </div>
          <div className={classes.robotWrapper}>
            <div>
              <div className={classes.robotName}>Astro Bot #88</div>
              <img src={RedRobot} className={classes.robotImage} />
            </div>
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
          </div>
        </div>
        <div
          className={classes.content}
          style={{ backgroundImage: `url(${ChatBackground})` }}
        >
          <div className={classes.topPanel}>
            {hideSearch && (
              <>
                <div className={classes.topOpenSidebar}>
                  <IconButton component="span" onClick={handleSidebarMobile}>
                    <ArrowBackIosIcon
                      sx={{ fontSize: 25 }}
                      className={classes.icon}
                    />
                  </IconButton>
                </div>
                <div className={classes.topUser}>
                  <img src={RedRobot} className={classes.topUserImage} />
                  <div className={classes.topUserName}>Astro</div>
                </div>
              </>
            )}
            {!hideSearch && (
              <div className={classes.topSearchWrapper}>
                <input
                  placeholder={"Search a message"}
                  className={classes.input}
                />
              </div>
            )}
            <div className={classes.topPanelIcons}>
              <IconButton component="span" onClick={handleSearch}>
                <SearchIcon sx={{ fontSize: 25 }} className={classes.icon} />
              </IconButton>
              <IconButton component="span" onClick={handleClick}>
                <MoreVertIcon sx={{ fontSize: 25 }} className={classes.icon} />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Switch Astros</MenuItem>
              </Menu>
            </div>
          </div>
          <div className={classes.messagesWraper}>
            <div className={classes.messagePeriod}>
              <div className={classes.messageTitle}>Yesterday</div>
              <div className={classes.messageBlock}>
                <div className={classes.messageRightWrapper}>
                  <div className={classes.messageRightText}>What's 2+2?</div>
                </div>
                <div className={classes.messageLeftWrapper}>
                  <div className={classes.messageLeftText}>
                    The answer of 2+2 is 4
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.messagePeriod}>
              <div className={classes.messageTitle}>Today</div>
              <div className={classes.messageBlock}>
                <div className={classes.messageRightWrapper}>
                  <div className={classes.messageRightText}>How are you?</div>
                </div>
                <div className={classes.messageLeftWrapper}>
                  <div className={classes.messageLeftText}>I'm fine</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bottomPanel}>
            <input placeholder={"Type a message"} className={classes.input} />
            <IconButton>
              <SendIcon sx={{ fontSize: 30 }} className={classes.icon} />
            </IconButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chat;
