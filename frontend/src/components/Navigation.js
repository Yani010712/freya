
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "../theme/components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../theme/components/Toolbar";
import Button from "@material-ui/core/Button";
import { NavHashLink as NavLink } from "react-router-hash-link";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

const AppAppBar = ({ classes, showModal }) => (
  <>
    <AppBar id="AppBar" position="fixed">
      <Toolbar className={classes.toolbar}>
        <div className={classes.left}>
          <a href="#home">
            <img src="freya_logo.png" height="65px" alt="Freya Alliance" />
          </a>
        </div>
        <div className={classes.right}>
          <div className="left-nav-tabs">
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              component={NavLink}
              smooth
              to="/#home"
            >
              Home
            </Link>

            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              component={NavLink}
              smooth
              to="/#ourmission"
            >
              Our Mission
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              component={NavLink}
              smooth
              to="/#products"
            >
              Products
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              component={NavLink}
              smooth
              to="/#articles"
            >
              Tips
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              component={NavLink}
              smooth
              to="/#news"
            >
              News
            </Link>
          </div>
          <div className="right-nav-tabs">
            <Button variant="contained" className={classes.button} id="QuizNavBtn">
              <Link
                variant="h6"
                underline="none"
                className={classes.rightLink}
                component={NavLink}
                onClick={showModal}
                id="navbtn"
                smooth
                to="#"
              >
                Quiz
              </Link>
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
    <div className={classes.placeholder} />
  </>
);

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
