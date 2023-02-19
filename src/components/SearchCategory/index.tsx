import React from "react";
import { useStyles } from "./style.ts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Input } from "@mui/material";

const SearchCategory = () => {
  const { classes, cx } = useStyles();
  return (
    <Grid2>
      <div className={classes.searchLine}>
        <div className={classes.searchCategory}>
          <Input
            disableUnderline={true}
            className={cx(
              classes.search,
              classes.searchNewCategory,
              classes.noBorderRight
            )}
            placeholder="Add new category item"
          />
          <Input
            disableUnderline={true}
            className={cx(classes.search, classes.searchParentCategory)}
            placeholder="Search for parent category here or select on hierarchy..."
          />
        </div>
        <Button className={classes.addButton} size="large">
          Add
        </Button>
      </div>
    </Grid2>
  );
};

export default SearchCategory;
