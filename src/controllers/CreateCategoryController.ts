import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../useCases/CreateCategoryUseCase";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const useCase = new CreateCategoryUseCase();

    const result = await useCase.execute({ name });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}