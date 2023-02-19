import React from "react";
import { useStyles } from "./style.ts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import { Input } from "@mui/material";

const Category = () => {
  const { classes } = useStyles();
  return (
    <Grid2 className={classes.categoryContainer}>
      <div className={classes.categoryBox}>
        <h2>Category</h2>
        <Input disableUnderline={true} className={classes.search} />
      </div>
    </Grid2>
  );
};
export default Category;