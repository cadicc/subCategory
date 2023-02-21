import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Breadcrumbs, Button, ButtonBase, Input } from "@mui/material";
import { Category } from "../../entities/Category";

interface Props {
  setCategory: (value: string) => any;
  categorySelected: Category[];
  categories: Category[];
}

const SearchCategory = (props: Props) => {
  const [newCategory, setNewCategory] = useState("");
  const [searchNewCategory, setSearchNewCategory] = useState("");
  const [parentCategory, setParentCategory] = useState<any>({});
  const [subCategory, setSubCategory] = useState<any>({});
  const [subListCategory, setSubListCategory] = useState<any>({});
  const { classes, cx } = useStyles();

  const handleAddNewCategory = (e: any) => {
    setNewCategory(e.target.value);
    setSearchNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    props.setCategory(newCategory);
    setSearchNewCategory("");
  };

  useEffect(() => {
    if (
      props.categorySelected &&
      props.categorySelected.find(
        (categorySelected) =>
          categorySelected.category_level &&
          categorySelected.category_level === "parent"
      )
    ) {
      setParentCategory(
        props.categorySelected.find(
          (categorySelected) => categorySelected.category_level === "parent"
        )
      );
    } else {
      setParentCategory({});
    }

    if (
      props.categorySelected &&
      props.categorySelected.find(
        (categorySelected) =>
          categorySelected.category_level &&
          categorySelected.category_level === "subcategory"
      )
    ) {
      setSubCategory(
        props.categorySelected.find(
          (categorySelected) =>
            categorySelected.category_level === "subcategory"
        )
      );
    } else {
      setSubCategory({});
    }

    if (
      props.categorySelected &&
      props.categorySelected.find(
        (categorySelected) =>
          categorySelected.category_level &&
          categorySelected.category_level === "sublist"
      )
    ) {
      setSubListCategory(
        props.categorySelected.find(
          (categorySelected) => categorySelected.category_level === "sublist"
        )
      );
    } else {
      setSubListCategory({});
    }
  }, [props.categorySelected]);

  console.log(props.categorySelected);

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
          {props.categorySelected.length > 0 ? (
            <div
              className={cx(classes.searchParentCategory, classes.breadcrumbs)}
            >
              <Breadcrumbs separator="/" aria-label="breadcrumb">
                {parentCategory.id ? (
                  <Button
                    variant="contained"
                    className={classes.breadcrumbsBtn}
                  >
                    {parentCategory.category_name}
                  </Button>
                ) : (
                  <></>
                )}
                {parentCategory.id && subCategory.id && (
                  <Button
                    variant="contained"
                    className={classes.breadcrumbsBtn}
                  >
                    {subCategory.category_name}
                  </Button>
                )}
                {parentCategory.id && subCategory.id && subListCategory.id && (
                  <Button
                    variant="contained"
                    className={classes.breadcrumbsBtn}
                  >
                    {subListCategory.category_name}
                  </Button>
                )}
              </Breadcrumbs>
              <Input
                disableUnderline={true}
                className={cx(classes.search, classes.noBorder)}
              />
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
