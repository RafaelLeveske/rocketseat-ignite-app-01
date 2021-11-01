import CategoriesRepository from "../repositories/CategoriesRepositories";

interface IRequest {
  name: string;
  description: string;
}

export default class CategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ description, name }: IRequest) {
    const categoryAlreadyExits = this.categoriesRepository.findByName(name);

    console.log(categoryAlreadyExits);
    if (categoryAlreadyExits) {
      throw new Error("Categoria já existe");
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}
