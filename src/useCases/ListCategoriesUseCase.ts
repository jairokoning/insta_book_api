import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type ListCategoriesDTO = {
  name?: string;
};

export class ListCategoriesUseCase {
  async execute({ name }: ListCategoriesDTO): Promise<Category[] | Error> {
    const repo = getRepository(Category);

    if (name) {
      return repo.find({ where: { name }});
    }

    return repo.find();
  }
};
