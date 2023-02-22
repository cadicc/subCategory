import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Breadcrumbs, Button, ButtonBase, Input } from "@mui/material";
import { Category } from "../../entities/Category";

interface Props {
  setCategory: (value: string) => any;
  categorySelected: any[];
  categories: Category[];
}

const SearchCategory = (props: Props) => {
  const [newCategory, setNewCategory] = useState("");
  const [searchNewCategory, setSearchNewCategory] = useState("");
  const { classes, cx } = useStyles();

  const { categorySelected } = props;

  const handleAddNewCategory = (e: any) => {
    setNewCategory(e.target.value);
    setSearchNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (
      categorySelected[categorySelected.length - 1].category_level === "sublist"
    ) {
      console.log(categorySelected);
      console.log(props.categories);
      console.log(
        [...props.categories.map(
          (category) =>
            category.category_level === categorySelected[0].category_level &&
            category.id === categorySelected[0].id &&
            category.sub_category
        )]
      );
      console.log(searchNewCategory);
    }

    props.setCategory(newCategory);
    setSearchNewCategory("");
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
            value={searchNewCategory}
            placeholder="Add new category item"
            onChange={(e) => handleAddNewCategory(e)}
          />
          {categorySelected.length > 0 ? (
            <div
              className={cx(classes.searchParentCategory, classes.breadcrumbs)}
            >
              <Breadcrumbs separator="/" aria-label="breadcrumb">
                {categorySelected &&
                  categorySelected.map((categorySelected, index) => {
                    if (categorySelected.category_level === "parent") {
                      return (
                        <Button
                          variant="contained"
                          className={classes.breadcrumbsBtn}
                        >
                          {categorySelected.category_name}
                        </Button>
                      );
                    }
                    if (categorySelected.category_level === "subcategory") {
                      return (
                        <Button
                          variant="contained"
                          className={classes.breadcrumbsBtn}
                        >
                          {categorySelected.category_name}
                        </Button>
                      );
                    }
                    if (categorySelected.category_level === "sublist") {
                      return (
                        <Button
                          variant="contained"
                          className={classes.breadcrumbsBtn}
                        >
                          {categorySelected.category_name}
                        </Button>
                      );
                    }
                    if (categorySelected.category_level === "item") {
                      return (
                        <Button
                          variant="contained"
                          className={classes.breadcrumbsBtn}
                        >
                          {categorySelected.item_name}
                        </Button>
                      );
                    }
                  })}
              </Breadcrumbs>
              {!categorySelected.find((selected) => selected.item_name) ? (
                <Input
                  disableUnderline={true}
                  className={cx(classes.search, classes.noBorder)}
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <Input
              disableUnderline={true}
              className={cx(classes.search, classes.searchParentCategory)}
              placeholder="Search for parent category here or select on hierarchy..."
            />
          )}
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
