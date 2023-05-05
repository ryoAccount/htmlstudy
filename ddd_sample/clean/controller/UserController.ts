import { UserCreateInputData } from "../application/dto/UserCreateInputData";
import { IUserCreateUseCase } from "../application/interface/IUserCreateUseCase";

export class UserController {
  private readonly useCreateUseCase: IUserCreateUseCase;

  constructor(useCreateUseCase: IUserCreateUseCase) {
    this.useCreateUseCase = useCreateUseCase;
  }

  async create(name: string, email: string) {
    const inputData = new UserCreateInputData(name, email);
    const outputData = await this.useCreateUseCase.execute(inputData);
    return outputData.getUserId();
  }
}