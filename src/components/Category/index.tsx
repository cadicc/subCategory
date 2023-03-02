import React, { useState } from "react";
import { useStyles } from "./style";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import SearchCategory from "../SearchCategory/index";
import CategoryTable from "../CategoryTable/index";
import { Category } from "../../entities/Category";
import { defaultCategory } from "./common/defaultCategory";

const CategoryContainer = () => {
  const { classes } = useStyles();
  const [category, setCategory] = useState<Category[]>(defaultCategory);
  const [categorySelected, setCategorySelected] = useState<Category[]>([]);
  const [searchCategory, setSearchCategory] = useState("");

  return (
    <Grid2 className={classes.categoryContainer}>
      <div className={classes.categoryBox}>
        <h2>Category</h2>
        <div>
          <SearchCategory
            categories={category}
            categorySelected={categorySelected}
            setCategory={setCategory}
            setSearchCategory={setSearchCategory}
          />
          {searchCategory.length === 0 ? (
            <CategoryTable
              categories={category}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          ) : (
            <CategoryTable
              categories={category.filter((category) =>
                category.category_name?.includes(searchCategory)
              )}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          )}
        </div>
      </div>
    </Grid2>
  );
};
export default CategoryContainer;
