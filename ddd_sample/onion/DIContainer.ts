import { UserRDBRepository } from "./infrastructure/UserRDBRepository";
import { UserCreateUseCase } from "./application/UserCreateUseCase";

const userRepository = new UserRDBRepository();
const userCreateUseCase = new UserCreateUseCase(userRepository);

export default userCreateUseCase;