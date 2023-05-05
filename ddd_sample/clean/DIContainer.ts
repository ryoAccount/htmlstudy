import { UserRDBRepository } from "./infrastructure/UserRDBRepository";
import { UserCreateUseCase } from "./application/UserCreateUseCase";
import { UserController } from "./controller/UserController";

const userRepository = new UserRDBRepository();
const userCreateUseCase = new UserCreateUseCase(userRepository);
const userController = new UserController(userCreateUseCase);

export default userController;