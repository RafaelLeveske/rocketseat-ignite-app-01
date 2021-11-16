import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ description, name }: IRequest) {
    const specificationAlreadyExits =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExits) {
      throw new Error("Especificação já existe");
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
