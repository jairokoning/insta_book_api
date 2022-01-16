import { Request, Response } from "express";
import { ListCategoriesUseCase } from "../useCases/ListCategoriesUseCase";

export class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;

    const useCase = new ListCategoriesUseCase();

    const result = await useCase.execute({ name: name as string });

    return response.json(result);
  }
}