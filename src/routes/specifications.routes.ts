import { Router } from "express";

import SpecificationRepository from "../modules/cars/repositories/SpecificationsRepositories";
import CreateSpecificationService from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { description, name } = request.body;

  const createSpecification = new CreateSpecificationService(
    specificationRepository
  );

  const specification = createSpecification.execute({ description, name });

  return response.status(200).json(specification);
});

// specificationsRoutes.get("/", (request, response) => {
//   const listCategories = new ListCategoryService(categoriesRepository);

//   const categories = listCategories.execute();

//   return response.status(200).json(categories);
// });

export { specificationsRoutes };
