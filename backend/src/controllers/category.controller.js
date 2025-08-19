export const getCategories = (req, res) => {
  res.json([{ id: 1, name: "Food" }, { id: 2, name: "Travel" }]);
};

export const createCategory = (req, res) => {
  res.json({ message: "Category created", data: req.body });
};

export const updateCategory = (req, res) => {
  res.json({ message: `Category ${req.params.id} updated`, data: req.body });
};

export const deleteCategory = (req, res) => {
  res.json({ message: `Category ${req.params.id} deleted` });
};
