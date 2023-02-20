import React, { useState } from "react";
import { useStyles } from "./style";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import SearchCategory from "../SearchCategory/index";
import CategoryTable from "../CategoryTable/index";
import { Category } from "../../entities/Category";
import { defaultCategory } from "./common/defaultCategory";

const CategoryContainer = () => {
  const { classes } = useStyles();
  const [categoryList, setCategoryList] = useState("");
  const [category, setCategory] = useState<Category[]>(defaultCategory);

  return (
    <Grid2 className={classes.categoryContainer}>
      <div className={classes.categoryBox}>
        <h2>Category</h2>
        <div>
          <SearchCategory setCategory={setCategoryList} />
          <CategoryTable categories={category} />
        </div>
      </div>
    </Grid2>
  );
};
export default CategoryContainer;
