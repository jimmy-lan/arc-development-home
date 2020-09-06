import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { ElevationScroll } from "../common";

export default function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        {/* The reason to include the Toolbar component is to make sure that
      things span horizontally, not stack up vertically. */}
        <Toolbar>
          <Typography>Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
