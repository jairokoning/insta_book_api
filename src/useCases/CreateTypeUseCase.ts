import { getRepository } from "typeorm";
import { Type } from "../entities/Type";

type CreateTypeDTO = {
  name: string;
};

export class CreateTypeUseCase {
  async execute({ name }: CreateTypeDTO): Promise<Type | Error> {
    const repo = getRepository(Type);

    const typeExists = await repo.findOne({ name });

    if (typeExists) {
      return new Error("Type already exists");
    }

    const type = repo.create({ name });

    await repo.save(type);

    return type;
  }
}