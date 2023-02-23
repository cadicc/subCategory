import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Category } from "../../entities/Category";
import CategoryTableRow from "./CategoryTableRow";
import { useStyles } from "./style";

interface Props {
  categories: Category[];
  setCategorySelected: (categorySelected: any) => void;
  categorySelected: Category[];
}

const CategoryTable = (props: Props) => {
  const { classes } = useStyles();

  return (
    <Grid2>
      <div className={classes.tableHeader}>
        <span>Category name</span>
        <span>Products</span>
      </div>
      <div>
        <CategoryTableRow
          categories={props.categories}
          categorySelected={props.categorySelected}
          setCategorySelected={props.setCategorySelected}
        />
      </div>
    </Grid2>
  );
};
export default CategoryTable;
