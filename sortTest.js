let categories = [
  {
    name: "Accessories",
    id: 1,
    parent_id: 20,
  },
  {
    name: "Watches",
    id: 57,
    parent_id: 1,
  },
  {
    name: "Men",
    id: 20,
    parent_id: null,
  },
  {
    name: "Women",
    id: 30,
    parent_id: null,
  },
  {
    name: "Cars",
    id: 23,
    parent_id: 20,
  },
];

function sortCategories(categories, parent) {
  let category = {};
  categories
    .filter((c) => c.parent_id === parent)
    .forEach((c) => {
      category[JSON.stringify(c)] = sortCategories(categories, c.id);
    });
  return category;
}

console.log(JSON.stringify(sortCategories(categories, null), null, 2));
