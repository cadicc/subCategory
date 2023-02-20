import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { Category } from "../../entities/Category";
import CategoryTableRow from "./CategoryTableRow";
import { useStyles } from "./style";

interface Props {
  categories: Category[];
}

const CategoryTable = (props: Props) => {
  const { classes } = useStyles();

  console.log(props.categories);

  return (
    <Grid2>
      <div className={classes.tableHeader}>
        <span>Category name</span>
        <span>Products</span>
      </div>
      <div>
        <CategoryTableRow categories={props.categories} />
      </div>
    </Grid2>
  );
};
export default CategoryTable;
