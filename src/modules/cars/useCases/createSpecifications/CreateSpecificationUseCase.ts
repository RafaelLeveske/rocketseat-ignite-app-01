import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export default class CreateSpecificationService {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExits =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExits) {
      throw new Error("Especificação já existe");
    }

    await this.specificationRepository.create({
      name,
      description,
    });
  }
}
