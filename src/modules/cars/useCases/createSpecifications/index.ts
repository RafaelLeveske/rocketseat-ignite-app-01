import SpecificationsRepository from "../../repositories/implementations/CategoriesRepositories";
import CreateSpecificationController from "./CreateSpecificationController";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationsUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationsUseCase
);

export { createSpecificationController };
