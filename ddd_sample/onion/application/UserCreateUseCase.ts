import { User } from "../domain/User";
import { IUserRepository } from "../infrastructure/interface/IUserRepository";

export class UserCreateUseCase {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(name: string, email: string): Promise<number> {
    try {
      const user = new User(name, email);
      return await this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }
}
