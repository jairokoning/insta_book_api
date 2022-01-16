import { Request, Response } from "express";
import { ListTypesUseCase } from "../useCases/ListTypesUseCase";

export class ListTypesController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;

    const useCase = new ListTypesUseCase();

    const result = await useCase.execute({ name: name as string });

    return response.json(result);
  }
}