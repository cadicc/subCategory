import React, { ReactElement } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import { useStyles } from "./style";

interface Props {
  children: ReactElement[] | ReactElement;
}

const Layout = (props: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Grid2 className={classes.backgroundGrey}>
        <Container maxWidth="lg" className={classes.fullHeight}>
          {props.children}
        </Container>
      </Grid2>
    </>
  );
};

export default Layout;
