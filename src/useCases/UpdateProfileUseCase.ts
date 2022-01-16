import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Profile } from "../entities/Profile";
import { Type } from "../entities/Type";

type UpdateProfileDTO = {
  id,
  name: string;
  stars: number;
  priority: boolean;
  level: string;
  has_reference: boolean;
  downloaded: boolean;
  references_checked: boolean;
  tagged_checked: boolean;
  sugestions_checked: boolean;
  categories: string[];
  types: string[];
};

export class UpdateProfileUseCase {
  async execute(
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
    }: UpdateProfileDTO): Promise<Profile | Error> {
    const repo = getRepository(Profile);
    const categoryRepo = getRepository(Category);
    const typeRepo = getRepository(Type);        

    const selectedCategories = await categoryRepo.findByIds(categories);
    const selectedTypes = await typeRepo.findByIds(types);
    
    const profile = repo.create(
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
        categories: selectedCategories,
        types: selectedTypes, 
      }
    );

    await repo.save(profile);    

    return profile;
  }
}