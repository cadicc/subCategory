import { Category } from "../../../entities/Category";
import { createId, createNum } from "../../../helper";

export const AddItem = (
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

export const AddSubList = (
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
                  }),
                }
              : subCategory
          ),
        }
      : category
  );
};
