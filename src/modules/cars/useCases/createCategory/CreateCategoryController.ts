import { Request, Response } from "express";

import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { description, name } = request.body;

    const category = this.createCategoryUseCase.execute({
      description,
      name,
    });

    return response.status(201).json(category);
  }
}
