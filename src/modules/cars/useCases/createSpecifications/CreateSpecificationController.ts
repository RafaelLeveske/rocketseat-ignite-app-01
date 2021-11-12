import { Request, Response } from "express";

import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

export default class CreateCategoryController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { description, name } = request.body;

    const category = this.createSpecificationUseCase.execute({
      description,
      name,
    });

    return response.status(200).json(category);
  }
}
