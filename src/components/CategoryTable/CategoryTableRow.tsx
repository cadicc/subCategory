import React, { useState, useEffect } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Minus from "../../icons/minus";
import Plus from "../../icons/plus";
import { Category } from "../../entities/Category";
import { useStyles } from "./style";
import Dot from "../../icons/dot";

interface Props {
  categories: Category[];
  categorySelected: any[];
  setCategorySelected: (categorySelected: any) => void;
}

const CategoryTableRow = (props: Props) => {
  const [open, setOpen] = useState<any>([]);
  const [lastIndexOfCategorySelected, setLastIndexOfCategorySelected] =
    useState("");

  const { classes } = useStyles();

  useEffect(() => {
    if (props.categorySelected.length !== open.length) {
      setOpen(
        props.categorySelected
          .map((cate) => cate.id)
          .filter((selected) => open.includes(selected))
      );
    }
  }, [open, props.categorySelected]);

  useEffect(() => {
    if (props.categorySelected.length > 0) {
      setLastIndexOfCategorySelected(
        props.categorySelected[props.categorySelected.length - 1].id
      );
    }
  }, [props.categorySelected]);

  const handleExpand = (e: any, category: any) => {
    if (open.find((id: string) => id === category.id)) {
      setOpen(open.filter((id: string) => id !== category.id));
    } else {
      setOpen([...open, category.id || ""]);
    }

    if (
      props.categorySelected.find(
        (categorySelected) =>
          categorySelected.id === category.id &&
          categorySelected.category_level === category.category_level
      )
    ) {
      if (category.category_level === "sublist") {
        return props.setCategorySelected(
          props.categorySelected.filter(
            (categorySelected) =>
              categorySelected.category_level !== "sublist" &&
              categorySelected.category_level !== "item"
          )
        );
      } else if (category.category_level === "subcategory") {
        return props.setCategorySelected(
          props.categorySelected.filter(
            (categorySelected) => categorySelected.category_level === "parent"
          )
        );
      } else if (category.category_level === "parent") {
        return props.setCategorySelected([]);
      }

      props.setCategorySelected(
        props.categorySelected.filter(
          (categorySelected) => categorySelected.id !== category.id
        )
      );
    } else {
      if (
        props.categorySelected.find(
          (cateSelected) => cateSelected.category_level === "item"
        )
      ) {
        props.setCategorySelected(
          props.categorySelected.map((categorySelected) =>
            categorySelected.category_level === "item" &&
            category.category_level === "item"
              ? category
              : categorySelected
          )
        );
      }
      if (
        props.categorySelected.find(
          (cateSelected) =>
            cateSelected.category_level === category.category_level
        )
      ) {
        return;
      }

      props.setCategorySelected([
        ...props.categorySelected,
        {
          id: category.id || "",
          category_name: category.category_name || "",
          category_level: category.category_level || "",
          item_name: category.item_name || "",
        },
      ]);
    }
  };

  return (
    <>
      {props.categories ? (
        props.categories.map((category, index) => (
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
              padding: 0,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            key={index}
          >
            {category.category_level === "parent" ? (
              <ListItemButton
                onClick={(e) => handleExpand(e, category)}
                selected={lastIndexOfCategorySelected === category.id}
              >
                <div className={classes.categoryParentRow}>
                  <ListItemIcon>
                    {open.find((id: string) => id === category.id) ? (
                      <Minus />
                    ) : (
                      <Plus />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={category.category_name} />
                </div>
                <p className={classes.productColumn}>
                  {category.product_count}
                </p>
              </ListItemButton>
            ) : (
              <></>
            )}
            {category.sub_category ? (
              category.sub_category.map((subCategory) => (
                <Collapse
                  in={open.find((id: string | undefined) => id === category.id)}
                  timeout="auto"
                  unmountOnExit
                  key={subCategory.id}
                >
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={(e) => handleExpand(e, subCategory)}
                      selected={lastIndexOfCategorySelected === subCategory.id}
                    >
                      <div className={classes.subCategoryRow}>
                        <ListItemIcon>
                          {open.find((id: string) => id === subCategory.id) ? (
                            <Minus />
                          ) : (
                            <Plus />
                          )}
                        </ListItemIcon>
                        <ListItemText primary={subCategory.category_name} />
                      </div>
                      <p className={classes.productColumn}>
                        {subCategory.product_count}
                      </p>
                    </ListItemButton>
                    {subCategory.sub_list ? (
                      subCategory.sub_list.map((subList) => (
                        <Collapse
                          in={open.find(
                            (id: string | undefined) => id === subCategory.id
                          )}
                          timeout="auto"
                          unmountOnExit
                          key={subList.id}
                        >
                          <List component="div" disablePadding>
                            <ListItemButton
                              sx={{ pl: 8 }}
                              onClick={(e) => handleExpand(e, subList)}
                              selected={
                                lastIndexOfCategorySelected === subList.id
                              }
                            >
                              <div className={classes.subListRow}>
                                <ListItemIcon>
                                  {open.find(
                                    (id: string) => id === subList.id
                                  ) ? (
                                    <Minus />
                                  ) : (
                                    <Plus />
                                  )}
                                </ListItemIcon>
                                <ListItemText primary={subList.category_name} />
                              </div>
                              <p className={classes.productColumn}>
                                {subList.product_count}
                              </p>
                            </ListItemButton>
                            {subList.items ? (
                              subList.items.map((item) => (
                                <Collapse
                                  in={open.find(
                                    (id: string | undefined) =>
                                      id === subList.id
                                  )}
                                  timeout="auto"
                                  unmountOnExit
                                  key={item.id}
                                >
                                  <List component="div" disablePadding>
                                    <ListItemButton
                                      sx={{ pl: 18 }}
                                      onClick={(e) => handleExpand(e, item)}
                                      selected={
                                        lastIndexOfCategorySelected === item.id
                                      }
                                    >
                                      <div className={classes.itemtRow}>
                                        <ListItemIcon>
                                          <Dot />
                                        </ListItemIcon>
                                        <ListItemText
                                          primary={item.item_name}
                                        />
                                      </div>
                                      <p className={classes.productColumn}>
                                        {item.items_count}
                                      </p>
                                    </ListItemButton>
                                  </List>
                                </Collapse>
                              ))
                            ) : (
                              <></>
                            )}
                          </List>
                        </Collapse>
                      ))
                    ) : (
                      <></>
                    )}
                  </List>
                </Collapse>
              ))
            ) : (
              <></>
            )}
          </List>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryTableRow;
