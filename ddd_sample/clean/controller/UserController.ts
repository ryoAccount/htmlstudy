import { UserCreateInputData } from "../application/dto/UserCreateInputData";
import { IUserCreateUseCase } from "../application/interface/IUserCreateUseCase";

export class UserController {
  private readonly userCreateUseCase: IUserCreateUseCase;

  constructor(userCreateUseCase: IUserCreateUseCase) {
    this.userCreateUseCase = userCreateUseCase;
  }

  async create(name: string, email: string) {
    const inputData = new UserCreateInputData(name, email);
    await this.userCreateUseCase.execute(inputData);
  }
}