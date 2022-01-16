import { Request, Response } from "express";
import { CreateTypeUseCase } from "../useCases/CreateTypeUseCase";

export class CreateTypeController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const useCase = new CreateTypeUseCase();

    const result = await useCase.execute({ name });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}