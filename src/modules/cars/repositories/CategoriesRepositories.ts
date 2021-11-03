import Category from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

export default class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  findByName(name: string): Category {
    const findCategoryByName = this.categories.find(
      (element) => element.name === name
    );

    return findCategoryByName;
  }

  list(): Category[] {
    return this.categories;
  }
}
