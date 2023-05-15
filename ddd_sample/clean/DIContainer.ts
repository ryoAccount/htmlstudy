import { UserRDBRepository } from "./infrastructure/UserRDBRepository";
import { UserCreateUseCase } from "./application/UserCreateUseCase";
import { UserController } from "./controller/UserController";
import { UserCreatePresenter } from "./presenter/UserCreatePresenter";

const userRepository = new UserRDBRepository();
const userCreatePresenter = new UserCreatePresenter();
const userCreateUseCase = new UserCreateUseCase(userRepository, userCreatePresenter);
const userController = new UserController(userCreateUseCase);

export default userController;