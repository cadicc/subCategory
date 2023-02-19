import React, { useState } from "react";
import { useStyles } from "./style.ts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Input } from "@mui/material";

interface Props {
  setCategory: (value: string) => any;
}

const SearchCategory = (props: Props) => {
  const [newCategory, setNewCategory] = useState("");
  const { classes, cx } = useStyles();

  const handleAddNewCategory = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    props.setCategory(newCategory);
  };

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
            onChange={(e) => handleAddNewCategory(e)}
          />
          <Input
            disableUnderline={true}
            className={cx(classes.search, classes.searchParentCategory)}
            placeholder="Search for parent category here or select on hierarchy..."
          />
        </div>
        <Button
          className={classes.addButton}
          size="large"
          onClick={handleAddCategory}
        >
          Add
        </Button>
      </div>
    </Grid2>
  );
};

export default SearchCategory;
