import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: IRequest) {
    const categoryAlreadyExits = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExits) {
      throw new Error("Categoria já existe");
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}
