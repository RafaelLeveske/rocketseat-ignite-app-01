import { ICategory } from "../models/Category";
import CategoriesRepository from "../repositories/CategoriesRepositories";

export default class ListCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute(): ICategory[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
