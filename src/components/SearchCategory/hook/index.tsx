import { Category } from "../../../entities/Category";
import { createId, createNum } from "../../../helper";

const addItem = (
  category: Category[],
  categorySelected: any[],
  searchNewCategory: string
) => {
  return category.map((category) =>
    category.category_level === categorySelected[0].category_level &&
    category.id === categorySelected[0].id &&
    category.sub_category
      ? {
          ...category,
          sub_category: category.sub_category.map((subCategory) =>
            subCategory.category_level === categorySelected[1].category_level &&
            subCategory.id === categorySelected[1].id &&
            subCategory.sub_list
              ? {
                  ...subCategory,
                  sub_list: subCategory.sub_list.map((subList) =>
                    subList.category_level ===
                      categorySelected[2].category_level &&
                    subList.id === categorySelected[2].id
                      ? {
                          ...subList,
                          items: subList.items?.concat({
                            item_name: searchNewCategory,
                            category_level: "item",
                            items_count: createNum(2),
                            id: createId(30),
                          }),
                        }
                      : subList
                  ),
                }
              : subCategory
          ),
        }
      : category
  );
};

const addSubList = (
  category: Category[],
  categorySelected: any[],
  searchNewCategory: string
) => {
  return category.map((category) =>
    category.category_level === categorySelected[0].category_level &&
    category.id === categorySelected[0].id &&
    category.sub_category
      ? {
          ...category,
          sub_category: category.sub_category.map((subCategory) =>
            subCategory.category_level === categorySelected[1].category_level &&
            subCategory.id === categorySelected[1].id
              ? {
                  ...subCategory,
                  sub_list: subCategory.sub_list?.concat({
                    category_name: searchNewCategory,
                    category_level: "sublist",
                    product_count: createNum(2),
                    id: createId(30),
                    items: [],
                  }),
                }
              : subCategory
          ),
        }
      : category
  );
};

const addSubCategory = (
  category: Category[],
  categorySelected: any[],
  searchNewCategory: string
) => {
  return category.map((category) =>
    category.category_level === categorySelected[0].category_level &&
    category.id === categorySelected[0].id &&
    category.sub_category
      ? {
          ...category,
          sub_category: category.sub_category.concat({
            category_name: searchNewCategory,
            category_level: "subcategory",
            product_count: createNum(2),
            id: createId(30),
            sub_list: [],
          }),
        }
      : category
  );
};

const addParentCategory = (category: Category[], searchNewCategory: string) => {
  return category.concat({
    category_level: "parent",
    category_name: searchNewCategory,
    id: createId(30),
    product_count: createNum(2),
    sub_category: [],
  });
};

export const hookAddCategory = () => {
  return { addItem, addSubList, addSubCategory, addParentCategory };
};
