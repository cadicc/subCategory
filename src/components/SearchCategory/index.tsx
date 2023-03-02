import React, { useState, useCallback } from "react";
import { useStyles } from "./style";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Breadcrumbs, Button, Input } from "@mui/material";
import { Category } from "../../entities/Category";
import { hookAddCategory } from "./hook";
import { debounce } from "lodash";

interface Props {
  categorySelected: any[];
  categories: Category[];
  setCategory: (category: Category[]) => any;
  setSearchCategory: (value: string) => any;
}

const SearchCategory = (props: Props) => {
  const [searchNewCategory, setSearchNewCategory] = useState("");
  const [searchParentCategory, setSearchParentCategory] = useState("");
  const { classes, cx } = useStyles();

  const { categorySelected } = props;

  const { addItem, addSubCategory, addSubList, addParentCategory } =
    hookAddCategory();

  const handleAddNewCategory = (e: any) => {
    setSearchNewCategory(e.target.value);
  };

  const debounceSearchParentCategory = debounce((value: string) => {
    if (value.length > 0) {
      props.setSearchCategory(value);
    } else {
      props.setSearchCategory("");
    }
  }, 300);

  const handleAddCategory = useCallback(() => {
    if (searchNewCategory.length > 0) {
      if (categorySelected.length === 0) {
        props.setCategory(
          addParentCategory(props.categories, searchNewCategory)
        );
      }

      if (categorySelected.length > 0) {
        if (
          categorySelected[categorySelected.length - 1].category_level ===
            "sublist" ||
          categorySelected[categorySelected.length - 1].category_level ===
            "item"
        ) {
          props.setCategory(
            addItem(props.categories, categorySelected, searchNewCategory)
          );
        } else if (
          categorySelected[categorySelected.length - 1].category_level ===
          "subcategory"
        ) {
          props.setCategory(
            addSubList(props.categories, categorySelected, searchNewCategory)
          );
        } else if (
          categorySelected[categorySelected.length - 1].category_level ===
          "parent"
        ) {
          props.setCategory(
            addSubCategory(
              props.categories,
              categorySelected,
              searchNewCategory
            )
          );
        }
      }
    }

    setSearchNewCategory("");
  }, [
    searchNewCategory,
    categorySelected,
    props,
    addParentCategory,
    addItem,
    addSubList,
    addSubCategory,
  ]);

  const handleSearchParentCategorySelected = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchParentCategory(e.target.value);
    debounceSearchParentCategory(e.target.value);
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
              <Breadcrumbs
                separator="/"
                aria-label="breadcrumb"
                className={classes.btnActived}
              >
                {categorySelected &&
                  categorySelected.map((categorySelected) => {
                    if (categorySelected.category_level === "parent") {
                      return (
                        <Button
                          variant="contained"
                          className={cx(classes.breadcrumbsBtn)}
                          key={categorySelected.id}
                        >
                          {categorySelected.category_name}
                        </Button>
                      );
                    }
                    if (categorySelected.category_level === "subcategory") {
                      return (
                        <Button
                          variant="contained"
                          className={cx(classes.breadcrumbsBtn)}
                          key={categorySelected.id}
                        >
                          {categorySelected.category_name}
                        </Button>
                      );
                    }
                    if (categorySelected.category_level === "sublist") {
                      return (
                        <Button
                          variant="contained"
                          className={cx(classes.breadcrumbsBtn)}
                          key={categorySelected.id}
                        >
                          {categorySelected.category_name}
                        </Button>
                      );
                    }
                    if (categorySelected.category_level === "item") {
                      return (
                        <Button
                          variant="contained"
                          className={cx(classes.breadcrumbsBtn)}
                          key={categorySelected.id}
                        >
                          {categorySelected.item_name}
                        </Button>
                      );
                    }
                    return <></>;
                  })}
              </Breadcrumbs>
            </div>
          ) : (
            <Input
              disableUnderline={true}
              className={cx(classes.search, classes.searchParentCategory)}
              placeholder="Search for parent category here or select on hierarchy..."
              value={searchParentCategory}
              onChange={(e) => handleSearchParentCategorySelected(e)}
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
