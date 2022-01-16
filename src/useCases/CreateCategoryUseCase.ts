import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CreateCategoryDTO = {
  name: string;
};

export class CreateCategoryUseCase {
  async execute({ name }: CreateCategoryDTO): Promise<Category | Error> {
    const repo = getRepository(Category);

    const categoryExists = await repo.findOne({ name });

    if (categoryExists) {
      return new Error("Category already exists");
    }

    const category = repo.create({ name });

    await repo.save(category);

    return category;
  }
}