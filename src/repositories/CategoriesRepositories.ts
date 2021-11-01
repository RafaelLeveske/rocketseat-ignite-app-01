import Category from "../models/Category";

export default class CategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }

  create({ name, description }): Category {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);

    console.log(this.categories);

    return category;
  }

  findByName(name: string): Category {
    const findCategoryByName = this.categories.find(
      (element) => element.name === name
    );

    return findCategoryByName;
  }

  list(): Category[] {
    console.log(this.categories);

    return this.categories;
  }
}
