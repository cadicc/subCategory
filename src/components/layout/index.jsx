import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useStyles } from "./style.ts";
import { Container } from "@mui/material";

const Layout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Grid2 className={classes.backgroundGrey}>
      <Container maxWidth="lg" className={classes.fullHeight}>
        {children}
      </Container>
    </Grid2>
  );
};

export default Layout;
