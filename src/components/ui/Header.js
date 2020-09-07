import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { ElevationScroll } from "../common";
import logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  logo: {
    height: "6em",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          {/* The reason to include the Toolbar component is to make sure that
      things span horizontally, not stack up vertically. */}
          <Toolbar disableGutters>
            <img alt="Poly Team Logo" className={classes.logo} src={logo} />
            <Tabs>
              <Tab label="home" />
              <Tab label="Services" />
              <Tab label="The Revolution" />
              <Tab label="About Us" />
              <Tab label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Push contents down to proper region so they are not covered by the header */}
      <div className={classes.toolbarMargin} />
    </>
  );
}
