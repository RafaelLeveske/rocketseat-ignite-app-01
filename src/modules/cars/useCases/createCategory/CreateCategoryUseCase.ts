import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export default class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ description, name }: IRequest) {
    const categoryAlreadyExits = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExits) {
      throw new Error("Categoria já existe");
    }

    const category = await this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}
