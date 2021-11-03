import { Router } from "express";

import CategoriesRepository from "../modules/cars/repositories/CategoriesRepositories";
import CreateCategoryService from "../modules/cars/services/CreateCategoryService";
import ListCategoryService from "../modules/cars/services/ListCategoriesService";

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
