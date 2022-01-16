import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Profile } from "../entities/Profile";
import { Type } from "../entities/Type";

type CreateProfileDTO = {
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

export class CreateProfileUseCase {
  async execute(
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
    }: CreateProfileDTO): Promise<Profile | Error> {
    const repo = getRepository(Profile);
    const categoryRepo = getRepository(Category);
    const typeRepo = getRepository(Type);

    const profileExists = await repo.findOne({ name });

    if (profileExists) {
      return new Error("Profile already exists");
    }

    const selectedCategories = await categoryRepo.findByIds(categories);
    const selectedTypes = await typeRepo.findByIds(types);    

    const profile = repo.create(
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
        categories: selectedCategories,
        types: selectedTypes, 
      }
    );

    await repo.save(profile);    

    return profile;
  }
}