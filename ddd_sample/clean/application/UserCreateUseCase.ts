import { User } from "../domain/User";
import { IUserRepository } from "../infrastructure/interface/IUserRepository";
import { UserCreateInputData } from "./dto/UserCreateInputData";
import { UserCreateOutputData } from "./dto/UserCreateOutputData";
import { IUserCreateUseCase } from "./interface/IUserCreateUseCase";

export class UserCreateUseCase implements IUserCreateUseCase {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(inputData: UserCreateInputData): Promise<UserCreateOutputData> {
    try {
      const user = new User(inputData.getName(), inputData.getEmail());
      const userId = await this.userRepository.save(user);
      return new UserCreateOutputData(userId);
    } catch (error) {
      throw error;
    }
  }
}
