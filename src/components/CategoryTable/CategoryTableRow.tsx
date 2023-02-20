import React, { useState } from "react";
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

interface Props {
  categories: Category[];
}

const CategoryTableRow = (props: Props) => {
  const [open, setOpen] = useState<any>([]);

  const { classes } = useStyles();

  const handleExpand = (e: any, category: Category) => {
    if (open.find((id: string) => id === category.id)) {
      setOpen(open.filter((id: string) => id !== category.id));
    } else {
      setOpen([...open, category.id || ""]);
    }
    console.log(category.id);
  };
  return (
    <>
      {props.categories ? (
        props.categories.map((category) => (
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
              padding: 0,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {category.category_level === "parent" ? (
              <ListItemButton onClick={(e) => handleExpand(e, category)}>
                <ListItemIcon>
                  {open.find((id: string) => id === category.id) ? (
                    <Minus />
                  ) : (
                    <Plus />
                  )}
                </ListItemIcon>
                <ListItemText primary={category.category_name} />
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
                >
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={(e) => handleExpand(e, subCategory)}
                    >
                      <ListItemIcon>
                        {open.find((id: string) => id === subCategory.id) ? (
                          <Minus />
                        ) : (
                          <Plus />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={subCategory.category_name} />
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
                        >
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 8 }}>
                              <ListItemIcon>
                                <Plus />
                              </ListItemIcon>
                              <ListItemText primary={subList.category_name} />
                              <p className={classes.productColumn}>
                                {subList.product_count}
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
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryTableRow;
