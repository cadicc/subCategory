import React, { useState } from "react";
import { useStyles } from "./style.ts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import SearchCategory from "../SearchCategory/index.tsx";
import CategoryTable from "../CategoryTable/index.tsx";

const Category = () => {
  const { classes } = useStyles();
  const [categoryList, setCategoryList] = useState();

  console.log(categoryList);

  return (
    <Grid2 className={classes.categoryContainer}>
      <div className={classes.categoryBox}>
        <h2>Category</h2>
        <div>
          <SearchCategory setCategory={setCategoryList} />
          <CategoryTable />
        </div>
      </div>
    </Grid2>
  );
};
export default Category;
