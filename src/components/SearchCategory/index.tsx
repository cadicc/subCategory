import React, { useState, useCallback, useEffect } from "react";
import { useStyles } from "./style";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Breadcrumbs, Button, Input } from "@mui/material";
import { Category } from "../../entities/Category";
import { AddItem, AddSubCategory, AddSubList } from "./hook";
import { debounce } from "lodash";
import { defaultCategory } from "../Category/common/defaultCategory";

interface Props {
  categorySelected: any[];
  categories: Category[];
  setCategory: (category: Category[]) => any;
}

const SearchCategory = (props: Props) => {
  const [searchNewCategory, setSearchNewCategory] = useState("");
  const [searchParentCategory, setSearchParentCategory] = useState("");
  const { classes, cx } = useStyles();

  const { categorySelected } = props;

  const handleAddNewCategory = (e: any) => {
    setSearchNewCategory(e.target.value);
  };

  const debounceSearchParentCategory = useCallback(
    debounce((value: string) => {
      if (value.length > 0) {
        return props.setCategory(
          props.categories.filter((category) =>
            category.category_name?.includes(value)
          )
        );
      } else {
        // Phần này cần xử lý thêm default category
        return props.setCategory(defaultCategory);
      }
    }, 300),
    [props.categories]
  );

  const handleAddCategory = () => {
    if (
      categorySelected[categorySelected.length - 1].category_level ===
        "sublist" ||
      categorySelected[categorySelected.length - 1].category_level === "item"
    ) {
      props.setCategory(
        AddItem(props.categories, categorySelected, searchNewCategory)
      );
    } else if (
      categorySelected[categorySelected.length - 1].category_level ===
      "subcategory"
    ) {
      props.setCategory(
        AddSubList(props.categories, categorySelected, searchNewCategory)
      );
    } else if (
      categorySelected[categorySelected.length - 1].category_level === "parent"
    ) {
      props.setCategory(
        AddSubCategory(props.categories, categorySelected, searchNewCategory)
      );
    }

    setSearchNewCategory("");
  };

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
