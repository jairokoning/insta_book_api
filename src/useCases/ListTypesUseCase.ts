import { getRepository } from "typeorm";
import { Type } from "../entities/Type";

type ListTypesDTO = {
  name?: string;
};

export class ListTypesUseCase {
  async execute({ name }: ListTypesDTO): Promise<Type[] | Error> {
    const repo = getRepository(Type);    

    if (name) {
      return repo.find({ where: { name }});
    }

    return repo.find();
  }
};
