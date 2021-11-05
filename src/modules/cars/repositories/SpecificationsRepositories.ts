import Specification from "../models/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

export default class SpecificationsRepository
  implements ISpecificationRepository
{
  private specifications: s[];
  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    const findCategoryByName = this.specifications.find(
      (element) => element.name === name
    );

    return findCategoryByName;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(specification);
  }
}
