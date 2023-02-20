import { createId } from "../../../../helper";

export const defaultCategory = [
  {
    category_name: "Main Category",
    product_count: "20",
    id: createId(30),
    category_level: "parent",
    sub_category: [
      {
        category_name: "Sub Category",
        product_count: "35",
        id: createId(30),
        category_level: "subcategory",
        sub_list: [
          {
            category_name: "Sub category level 1",
            product_count: "50",
            id: createId(30),
            category_level: "sublist",
            items: [
              {
                item_name: "Category item 1",
                items_count: "25",
                id: createId(30),
              },
              {
                item_name: "Category item 2",
                items_count: "22",
                id: createId(30),
              },
              {
                item_name: "Category item 3",
                items_count: "23",
                id: createId(30),
              },
              {
                item_name: "Category item 4",
                items_count: "24",
                id: createId(30),
              },
            ],
          },
          {
            category_name: "Sub category level 2",
            product_count: "60",
            id: createId(30),
            category_level: "sublist",
            items: [
              {
                item_name: "Category item 1",
                items_count: "11",
                id: createId(30),
              },
              {
                item_name: "Category item 2",
                items_count: "12",
                id: createId(30),
              },
              {
                item_name: "Category item 3",
                items_count: "13",
                id: createId(30),
              },
              {
                item_name: "Category item 4",
                items_count: "14",
                id: createId(30),
              },
            ],
          },
        ],
      },
    ],
  },
];
