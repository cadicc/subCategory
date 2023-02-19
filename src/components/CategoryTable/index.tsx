import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useStyles } from "./style";

const CategoryTable = () => {
  const { classes } = useStyles();
  return (
    <Grid2>
      <div className={classes.tableHeader}>
        <span>Category name</span>
        <span>Products</span>
      </div>
    </Grid2>
  );
};
export default CategoryTable;
