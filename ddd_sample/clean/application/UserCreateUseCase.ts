import { User } from "../domain/User";
import { IUserRepository } from "../infrastructure/interface/IUserRepository";
import { IUserCreatePresenter } from "../presenter/interface/IUserCreatePresenter";
import { UserCreateInputData } from "./dto/UserCreateInputData";
import { UserCreateOutputData } from "./dto/UserCreateOutputData";
import { IUserCreateUseCase } from "./interface/IUserCreateUseCase";

export class UserCreateUseCase implements IUserCreateUseCase {
  private readonly userRepository: IUserRepository;
  private readonly userCreatePresenter: IUserCreatePresenter;

  constructor(userRepository: IUserRepository, userCreatePresenter: IUserCreatePresenter) {
    this.userRepository = userRepository;
    this.userCreatePresenter = userCreatePresenter;
  }

  async execute(inputData: UserCreateInputData): Promise<void> {
    try {
      const user = new User(inputData.getName(), inputData.getEmail());

      const userId = await this.userRepository.save(user);

      const outputData = new UserCreateOutputData(userId);
      this.userCreatePresenter.output(outputData);
    } catch (error) {
      throw error;
    }
  }
}
