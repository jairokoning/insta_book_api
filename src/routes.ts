import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProfileController } from "./controllers/CreateProfileController";
import { CreateTypeController } from "./controllers/CreateTypeController";
import { ListCategoriesController } from "./controllers/ListCategoriesController";
import { ListTypesController } from "./controllers/ListTypesController";
import { UpdateProfileController } from "./controllers/UpdateProfileController";


const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new ListCategoriesController().handle);

routes.post("/types", new CreateTypeController().handle);
routes.get("/types", new ListTypesController().handle);

routes.post("/profiles", new CreateProfileController().handle);
routes.put("/profiles/:id", new UpdateProfileController().handle);

export { routes };
