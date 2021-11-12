import CategoriesRepository from "../../repositories/CategoriesRepositories";
import CreateCategoriesController from "./CreateCategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoriesUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoriesController = new CreateCategoriesController(
  createCategoriesUseCase
);

export { createCategoriesController };
