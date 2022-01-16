import { Request, Response } from "express";
import { UpdateProfileUseCase } from "../useCases/UpdateProfileUseCase";

export class UpdateProfileController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { 
      name, 
      stars, 
      priority, 
      level, 
      has_reference, 
      downloaded, 
      references_checked,
      tagged_checked,
      sugestions_checked,
      categories,
      types,  
    } = request.body;

    const useCase = new UpdateProfileUseCase();

    const result = await useCase.execute(
      {
        id,
        name, 
        stars, 
        priority, 
        level, 
        has_reference, 
        downloaded, 
        references_checked,
        tagged_checked,
        sugestions_checked,
        categories,
        types, 
      });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}