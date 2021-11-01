import { Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepositories";
import CreateCategoryService from "../services/CreateCategoryService";
import ListCategoryService from "../services/ListCategoriesService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { description, name } = request.body;

  const createCategories = new CreateCategoryService(categoriesRepository);

  const categories = createCategories.execute({ description, name });

  return response.status(200).json(categories);
});

categoriesRoutes.get("/", (request, response) => {
  const listCategories = new ListCategoryService(categoriesRepository);

  const categories = listCategories.execute();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
