import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CategoryService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ description, name }: IRequest) {
    const categoryAlreadyExits = this.specificationRepository.findByName(name);

    if (categoryAlreadyExits) {
      throw new Error("Categoria já existe");
    }

    const category = this.specificationRepository.create({
      name,
      description,
    });

    return category;
  }
}
