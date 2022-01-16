import { Request, Response } from "express";
import { CreateProfileUseCase } from "../useCases/CreateProfileUseCase";

export class CreateProfileController {
  async handle(request: Request, response: Response) {
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

    const useCase = new CreateProfileUseCase();

    const result = await useCase.execute(
      {
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