import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, name } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const category = await createCategoryUseCase.execute({
      description,
      name,
    });

    return response.status(201).json(category);
  }
}
